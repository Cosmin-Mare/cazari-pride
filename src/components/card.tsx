import styles from "./card.module.css"



export default function Home() {
    return (
        <div className={styles.allCardsContainer}>
            <div className={styles.cardContainer}>
                <div className={styles.photoCard}>
                    <img src='/carousel/carousel-1.png' />
                </div>
             <div className={styles.itemContainer}>
                <h2> </h2>
                <a></a>
                <a></a>
             </div>
            </div>
        </div>
    );
}