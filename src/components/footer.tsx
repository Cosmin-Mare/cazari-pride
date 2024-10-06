import styles from './footer.module.css';



export default function Home() {
    return (
        <div className={styles.footer}>
            <div className={styles.logoContainerFooter}>
                <img src="logo.jpeg" alt="logo" className={styles.photoContainerFooter} />
            </div>
            <div className={styles.contactContainer}>
            <h1 className={styles.contactTitle}>Contact</h1>
            <p className={styles.contactItem}>t is a long established fact that</p>
            <a href="mailto:" className={styles.contactItem}>contact@cazaripraid.ro</a>
            </div>

        </div>
    );
}