import styles from './carousel-item.module.css';

export interface CarouselItemProps {
    num: number;
    link: string;
    position?: "left" | "right" | "center" | "none"
}

export default function CarouselItem(props: CarouselItemProps) {
    return (
    <div className={`${styles.carouselItem} ${props.position === "left" ? styles.left : props.position === "right" ? styles.right : props.position === "center" ? styles.center : styles.none}`}>
        <a>
          <img src={`/carousel/carousel-${props.num}.png`}/>
        </a>
      </div>
    );
  }