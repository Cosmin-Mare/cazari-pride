import styles from './header.module.css';

export default function Home() {
    return (
        <div className={styles.header}>
            <div className={styles.logoContainer}>
                <img src="logo." alt="logo" className={styles.logo} />
            </div>
            <div className={styles.itemContainer}>
                <a className={styles.headerItem}>Pensiune</a>
                <a className={styles.headerItem}>Hotel</a>
                <a className={styles.headerItem}>Cabin</a>
                <a className={styles.headerItem}>Meniu</a>
            </div>
        </div>
    );
}