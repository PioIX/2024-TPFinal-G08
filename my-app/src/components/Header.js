"use client"
import styles from '@/app/page.module.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Title() {
    return(
        <div className={styles.header}>
            <img src="@/app/mono.png"></img>
            <p>Dress To Impress</p>
        </div>
    )
}