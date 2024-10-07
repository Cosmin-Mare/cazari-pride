import Image from "next/image";
import styles from "./index.module.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Header from "../components/header";
import Carousel from "@/components/carousel";
import Footer from '../components/footer';
import Card from '../components/card'

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Card />
      <Footer />
    </div>
  );
}
