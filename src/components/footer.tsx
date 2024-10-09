import styles from './footer.module.css';



export default function Home() {
    return (
        <div className={styles.footer}>
            <div className={styles.logoContainerFooter}>
                <img src="logo.jpeg" alt="logo" className={styles.photoContainerFooter} />
            </div>
            <div className={styles.footerItemContainer}>
            <p className={styles.footerTitle}>Contact</p>
            <p className={styles.footerItem}>About</p>
            <p className={styles.footerItem}>Shahes</p>
            <p className={styles.footerItem}>Fgehsjc</p>
            <a href="mailto:" className={styles.contactItem}>contact@cazaripraid.ro</a>
            </div>
            
            <div className={styles.footerItemContainer}>
            <p className={styles.footerTitle}>Contact</p>
            <p className={styles.footerItem}>About</p>
            <p className={styles.footerItem}>Shahes</p>
            <p className={styles.footerItem}>Fgehsjc</p>
            <a href="mailto:" className={styles.contactItem}>contact@cazaripraid.ro</a>
            </div>

            <div className={styles.footerItemContainer}>
            <p className={styles.footerTitle}>Contact</p>
            <p className={styles.footerItem}>About</p>
            <p className={styles.footerItem}>Shahes</p>
            <p className={styles.footerItem}>Fgehsjc</p>
            <a href="mailto:" className={styles.contactItem}>contact@cazaripraid.ro</a>
            </div>

        </div>
    );
}