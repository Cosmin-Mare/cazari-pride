import styles from './footer.module.css';



export default function Home() {
    return (
        <div>
            <div className={styles.logoContainer}>
                <img src="logo.png" alt="logo" className={styles.logo} />
            </div>
            <h1>Contact</h1>
            <p>t is a long established fact that</p>
            <p><a href="mailto:">contact@cazaripraid.ro</a></p>
        </div>
    );
}