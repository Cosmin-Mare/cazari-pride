import styles from './footer.module.css';



export default function Home() {
    return (
        <div className={styles.footer}>
            <div className={styles.logoContainerFooter}>
                <img src="logo.jpeg" alt="logo" className={styles.photoContainerFooter} />
            </div>
            <div className={styles.contactContainer}>
            <a className={styles.contactTitle}>Contact</a>
            <p className={styles.contactItem}>About</p>
            <p className={styles.contactItem}>Shahes</p>
            <p className={styles.contactItem}>Fgehsjc</p>
            <a href="mailto:" className={styles.contactItem}>contact@cazaripraid.ro</a>
            </div>

        </div>
    );
}