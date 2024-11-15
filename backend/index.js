const express = require('express');
const bodyParser = require('body-parser');
const MySQL = require('./modulos/mysql');
const session = require('express-session');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const LISTEN_PORT = 4000;

const server = app.listen(LISTEN_PORT, () => {
    console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});

const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});

const sessionMiddleware = session({
    secret: "supersarasa",
    resave: true,
    saveUninitialized: true
});

app.use(sessionMiddleware);

io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
});

// Conexión de los sockets
io.on('connection', (socket) => {
    console.log('Usuario conectado:', socket.id);

    socket.on('send_message', (data) => {
        console.log('Mensaje recibido en el servidor: ', data); // Para depuración
        // Mensaje a todos menos al emisor
        socket.broadcast.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('Usuario desconectado:', socket.id);
    });
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Datos de login recibidos: ", { username, password });

    try {
        const query = `SELECT * FROM Usuarios WHERE Nombre = '${username}' AND Contraseña = '${password}'`;
        const resultado = await MySQL.realizarQuery(query);
        console.log(resultado);
        req.session.userId = resultado[0]?.ID_Usuario; // Usa el primer resultado
        console.log(req.session.userId);
        if (resultado.length > 0) {
            res.status(200).json({ message: "Login exitoso", user: resultado });
        } else {
            res.status(401).json({ error: "Credenciales incorrectas" });
        }
    } catch (error) {
        console.error("Error en login: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.post('/registro', async (req, res) => {
    console.log("Datos de registro recibidos: ", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Faltan datos de registro" });
    }

    try {
        // Verificar si el usuario ya existe
        const consultaExistente = `SELECT * FROM Usuarios WHERE Nombre = '${username}'`;
        const resultadoExistente = await MySQL.realizarQuery(consultaExistente);

        if (resultadoExistente.length > 0) {
            return res.status(400).json({ error: "El usuario ya existe." });
        }

        // Si no existe, registrar el nuevo usuario
        const sql = `INSERT INTO Usuarios (Nombre, Contraseña) VALUES ('${username}', '${password}')`;
        const resultado = await MySQL.realizarQuery(sql);

        if (resultado.affectedRows > 0) {
            res.status(201).json({ message: "Usuario registrado exitosamente." });
        } else {
            res.status(500).json({ error: "Error al registrar usuario." });
        }
    } catch (error) {
        console.error("Error en registro: ", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});
app.get('/UsuariosGet', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT ID_Usuario, Nombre, Puntaje, CantidadOutfits FROM Usuarios ORDER BY Puntaje DESC LIMIT 10");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en UsuariosGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/NombreGet', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT Nombre FROM Usuarios");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en NombreGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/PuntajesGet', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT Puntaje FROM Usuarios");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en NombreGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/UserIdGet', async (req, res) => {
    try {
        console.log(`User: ${req.session.userId}`);
        res.send({ id: req.session.userId });
    } catch (error) {
        console.error("Error en UserIdGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/ContraseñaGet', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT Contraseña FROM Usuarios");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/CantidadOutfitsGet', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT CantidadOutfits FROM Usuarios");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en CantidadOutfitsGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

// Ruta para obtener chats del usuario logueado
app.get('/chats', async (req, res) => {
    if (!req.session.userId) {
      return res.status(401).json({ error: "No autorizado" });
    }
  
    const userId = req.session.userId; // ID del usuario logeado
  
    try {
      // usuarios que no son el usuario logueado
      const sql = `SELECT ID_Usuario, Nombre FROM Usuarios WHERE ID_Usuario != ${userId}`;
      const usuarios = await MySQL.realizarQuery(sql);
      
      res.json(usuarios);
    } catch (error) {
      console.error("Error en obtener usuarios: ", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });

// Ruta para enviar mensajes
app.post('/send-message', async (req, res) => {
    const { mensaje, Id_usuario, idchat } = req.body;

    try {
        const sql = `INSERT INTO Mensajes (mensaje, Id_user, idchats) VALUES ('${mensaje}', '${Id_usuario}', '${idchat}');`;
        const resultado = await MySQL.realizarQuery(sql);

        if (resultado.affectedRows > 0) {
            res.status(201).json({ message: "Mensaje enviado" });
        } else {
            res.status(500).json({ error: "Error al enviar el mensaje" });
        }
    } catch (error) {
        console.error("Error en enviar mensaje: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

// obtener mensajes de un chat específico
app.get('/chat/:idchats', async (req, res) => {
    const { idchats } = req.params;

    try {
        const sql = `SELECT * FROM Mensajes WHERE idchats = ${idchats}`;
        const mensajes = await MySQL.realizarQuery(sql);
        res.json(mensajes);
    } catch (error) {
        console.error("Error en obtener mensajes: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

app.get('/get-chats/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const sql = `SELECT ID_Usuario, Nombre FROM Usuarios WHERE ID_Usuario != ${id}`;
    const usuarios = await MySQL.realizarQuery(sql);
    res.json(usuarios);
  } catch (error) {
    console.error("Error en obtener usuarios: ", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Juego

app.get('/getRemeras', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Remeras");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getPantalones', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Pantalones");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getPersonajes', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Personajes");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getCalzados', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Calzados");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getAccesorios', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Accesorios");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getMascotas', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Mascotas");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.get('/getOutfits', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Outfits");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.post('/updateOutfitScore', async (req, res) => {
    const { idOutfit, nuevoPuntaje, nuevaCantidadVotos } = req.body;
    
    if (nuevoPuntaje === null || nuevoPuntaje === undefined) {
        nuevoPuntaje = 0;
    }
    if (nuevaCantidadVotos === null || nuevaCantidadVotos === undefined) {
        nuevaCantidadVotos = 0;
    }
    if (!idOutfit || nuevoPuntaje === undefined || nuevaCantidadVotos === undefined) {
        return res.status(400).json({ error: "Faltan datos para actualizar el puntaje" });
    }
    try {
        const sql = `UPDATE Outfits SET puntaje = ?, cantidaddevotos = ? WHERE idOutfit = ?`;
        const resultado = await MySQL.realizarQuery(sql, [nuevoPuntaje, nuevaCantidadVotos, idOutfit]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ message: "Puntaje actualizado correctamente" });
        } else {
            res.status(404).json({ error: "Outfit no encontrado" });
        }
    } catch (error) {
        console.error("Error en actualizar puntaje de outfit: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});


app.post('/votarOutfit', async (req, res) => {
    const { idOutfit, puntaje } = req.body;

    if (!idOutfit || puntaje === undefined) {
        return res.status(400).json({ error: "Faltan datos para votar el outfit" });
    }

    try {
        // Actualizamos el puntaje acumulado y la cantidad de votos
        const sql = `
            UPDATE Outfits 
            SET puntaje = puntaje + ?, cantidadVotos = cantidadVotos + 1 
            WHERE idOutfit = ?
        `;
        const resultado = await MySQL.realizarQuery(sql, [puntaje, idOutfit]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ message: "Voto registrado correctamente" });
        } else {
            res.status(404).json({ error: "Outfit no encontrado" });
        }
    } catch (error) {
        console.error("Error en votar outfit: ", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

=======
app.get('/getFondos', async (req, res) => {
    try {
        const respuesta = await MySQL.realizarQuery("SELECT * FROM Fondos");
        res.send(respuesta);
    } catch (error) {
        console.error("Error en ContraseñaGet: ", error);
        res.status(500).send({ error: 'Error interno del servidor' });
    }
});

app.post('/outfit', async (req, res) => {
    console.log("Datos de registro recibidos: ", req.body);
    const { remeras, pantalones, calzado, accesorio, mascota, fondo, personaje } = req.body;

    try {
        const sql = `INSERT INTO Outfits (personaje, remera, pantalon, accesorio, calzado, mascota, fondo) 
                     VALUES (${personaje}, ${remeras}, ${pantalones}, ${accesorio}, ${calzado}, ${mascota}, ${fondo})`;

        const resultado = await MySQL.realizarQuery(sql);

        if (resultado[0].affectedRows > 0) {
            res.status(201).json({ message: "Outfit registrado exitosamente." });
        } else {
            res.status(500).json({ error: "Error al registrar outfit." });
        }
    } catch (error) {
        console.error("Error en registro: ", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});



