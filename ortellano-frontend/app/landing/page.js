import styles from "../page.module.css";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Hero from "@/components/Hero";
const monts = Montserrat({ subsets: ["latin"], weight: ["900"] });

export default function Landing(params) {
  return (
    <div>
      <Hero />
      <h1 className="text-8xl ml-5">hi</h1>
    </div>
  );
}
