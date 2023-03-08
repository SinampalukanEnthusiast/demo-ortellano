import { Convergence, Hind_Vadodara, Montserrat } from "next/font/google";
import React from "react";
const monts = Montserrat({ subsets: ["latin"], weight: ["800"] });
const hind = Hind_Vadodara({ subsets: ["latin"], weight: ["300"] });
const conv = Convergence({ subsets: ["latin"], weight: ["400"] });

const Hero = ({}) => {
  return (
    <div className="flex items-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img  ">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-green-custom/50  via-green-500/30 to-white/50 z-[2]"></div>
      <div className="text-white justify-end pl-48 z-20 bottom-[13rem] left-0 absolute scale-125">
        <h2 className={`text-white text-9xl  ${monts.className}`}>
          ORTELLANO{" "}
        </h2>
        <p className={`text-3xl py-3 mb-5 ${hind.className}`}>
          This is a demo application that acts as a investment platform for a{" "}
          <br />
          fictional agribusiness stock market
        </p>
        <button className={`btn btn-ort btn-landing ${conv.className}`}>
          Join Now
        </button>
        <button
          className={`ml-10 btn-lg btn btn-transparent btn-scale ${conv.className}`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
