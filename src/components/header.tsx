import styles from './header.module.css';

export default function Home() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <div className={styles.photoContainer}>
                <img src="logo.jpeg" alt="logo" />
                </div>
                <h1 className={styles.headerTitle}>Cazari Praid</h1>
            </div>
            <div className={styles.itemContainer}>
                <a className={styles.headerItem}>Pensiune</a>
                <a className={styles.headerItem}>Hotel</a>
                <a className={styles.headerItem}>Cabana</a>
                <a className={styles.headerItem}>Meniu</a>
            </div>
        </div>
    );
}