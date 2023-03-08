import React from "react";
const monts = Montserrat({ subsets: ["latin"], weight: ["800"] });
const hind = Hind_Vadodara({ subsets: ["latin"], weight: ["300"] });
const conv = Convergence({ subsets: ["latin"], weight: ["400"] });
import { Convergence, Hind_Vadodara, Montserrat } from "next/font/google";

export default function Home() {
  return (
    <div className="flex items-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img  ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-green-custom/50  via-green-500/30 to-white/50 z-[2]"></div>
      <div className="text-white z-20 bottom-0 left-0 xl:m-52 lg:m-40 md:m-32 sm:m-24 m-20 transition-all absolute scale-125 ">
        <h2
          className={` xl:text-9xl lg:text-8xl md:text-7xl sm:text-5xl text-4xl ${monts.className}`}
        >
          ORTELLANO{" "}
        </h2>
        <p
          className={`xl:text-3xl lg:text-xl md:text-lg sm:text-md py-3 mb-5 break-words ${hind.className}`}
        >
          This is a demo application that acts as a investment platform for a{" "}
          <br />
          fictional agribusiness stock market
        </p>
        <button className={`btn btn-ort btn-landing  ${conv.className}`}>
          Join Now
        </button>
        <button
          className={`xl:ml-10 lg:ml-8 md:ml-6 sm:ml-4 ml-4 btn-lg btn btn-transparent btn-scale ${conv.className}`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
