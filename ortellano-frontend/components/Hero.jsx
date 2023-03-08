import { Convergence, Hind_Vadodara, Montserrat } from "next/font/google";
import React from "react";
const monts = Montserrat({ subsets: ["latin"], weight: ["800"] });
const hind = Hind_Vadodara({ subsets: ["latin"], weight: ["300"] });
const conv = Convergence({ subsets: ["latin"], weight: ["400"] });

const Hero = ({}) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/10 z-[2]">
      <div className="flex items-center pl-32 pt-16 h-screen mb-12 bg-fixed bg-center bg-cover custom-img ">
        <div className="text-white">
          <h2 className={`text-white text-9xl mt-80 ${monts.className}`}>
            ORTELLANO{" "}
          </h2>
          <p className={`text-2xl py-3 ${hind.className}`}>
            This is a demo application that acts as a investment platform for a{" "}
            <br />
            fictional agribusiness stock market
          </p>
          <button
            className={`btn btn-success btn-landing btn-translate ${conv.className}`}
          >
            Join Now
          </button>
          <button
            className={`ml-14 btn-lg btn btn-transparent btn-translate ${conv.className}`}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
