import { use, useEffect, useState } from "react";
import styles from "./carousel.module.css";
import CarouselItem, { CarouselItemProps } from "./carousel-item";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselItems, setCarouselItems] = useState<CarouselItemProps[]>([
    {num: 0, link: "#"},
    {num: 1, link: "#"},
    {num: 2, link: "#"},
    {num: 3, link: "#"},
    {num: 4, link: "#"}
  ])
  const [slideInterval, setSlideInterval] = useState<NodeJS.Timeout>()
  useEffect(() => {
    setSlideInterval(setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 3000))
  }, [])
  useEffect(() => {
    console.log(currentSlide)
  }, [currentSlide])
  return (
      <div className={styles.carousel}>
        <button onClick={() => {
          clearInterval(slideInterval)
          setCurrentSlide((prevSlide) => (prevSlide == 0 ? 4 : prevSlide-1));
          setSlideInterval(setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
          }, 3000))
        }} className={styles.leftArrow}>
          <div className={styles.arrow}>
            <p>{"<"}</p>
          </div>
        </button>
        <div className={styles.carouselContainer}>
          {currentSlide === 0 ? <CarouselItem {...carouselItems[carouselItems.length-1]} position="left" /> :
          <CarouselItem {...carouselItems[currentSlide-1]} position="left"/>}
          <CarouselItem {...carouselItems[currentSlide]} position="center"/>
          {currentSlide === carouselItems.length-1 ? <CarouselItem {...carouselItems[0]} position="right"/> : 
          <CarouselItem {...carouselItems[currentSlide+1]} position="right" />
          }
        </div>
        <button onClick={() => {
          clearInterval(slideInterval)
          setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
          setSlideInterval(setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
          }, 3000))
        }} className={styles.rightArrow}>
          <div className={styles.arrow}>
            <p>{">"}</p>
          </div>
        </button>
      </div>
      
  );
}
