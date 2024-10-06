import { use, useEffect, useState } from "react";
import styles from "./carousel.module.css";
import CarouselItem from "./carousel-item";

export default function Carousel() {
  const [carouselItems, setCarouselItems] = useState<JSX.Element[]>([])
  useEffect(() => {
    setCarouselItems([
      <CarouselItem num={1} link="#" active />,
      <CarouselItem num={2} link="#" />,
      <CarouselItem num={3} link="#" />,
      <CarouselItem num={4} link="#" />,
      <CarouselItem num={5} link="#" />
    ])
   setInterval(() => {
   carouselItems.forEach((item, index) => {
      //  if(item.props.active){
      //    item.props.active = false;
      //    if(index == carouselItems.length-1)
      //     carouselItems[0].props.active = true;
      //    else
      //       carouselItems[index+1].props.active = true
      //  }
      })
    }, 2000)
  })
  return (
    <div>
      <div className={styles.carousel}>
        <div className={styles.carouselContainer}>
          <CarouselItem num={1} link="#" active />
          <CarouselItem num={2} link="#" />
          <CarouselItem num={3} link="#" />
          <CarouselItem num={4} link="#" />
          <CarouselItem num={5} link="#" />
        </div>
      </div>
    </div>
  );
}
