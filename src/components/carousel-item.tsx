import styles from './carousel-item.module.css';

interface CarouselItemProps {
    num: number;
    link: string;
    active?: boolean;
}

export default function CarouselItem(props: CarouselItemProps) {
    return (
    <div className={styles.carouselItem}>
        <a>
          <img src={`/carousel/carousel-${props.num}.png`}/>
        </a>
      </div>
    );
  }