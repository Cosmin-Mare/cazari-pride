import styles from './footer.module.css';



export default function Home() {
    return (
        <div className={styles.footer}>
            <div className={styles.logoContainerFooter}>
                <img src="logo.jpeg" alt="logo" className={styles.photoContainerFooter} />
            </div>
            <h1>Contact</h1>
            <p>t is a long established fact that</p>
            <p><a href="mailto:">contact@cazaripraid.ro</a></p>
        </div>
    );
}