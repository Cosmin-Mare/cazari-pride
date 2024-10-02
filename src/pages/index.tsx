import Image from "next/image";
import styles from "./index.module.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Header from "../components/header";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
    </div>
  );
}
