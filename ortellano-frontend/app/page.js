import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row p-8 justify-center items-center h-screen ">
        <div className="flex ">
          <div className="border flex h-screen justify-center items-center w-32 bg-red-100 mr-4 text-3xl">
            Sidebar
          </div>

          <div className="border w-96 bg-blue-100 mr-4 flex justify-start items-start text-3xl">
            Content
          </div>
          <div className="border w-96 bg-blue-100 mr-4 text-3xl flex justify-end items-start">
            Content
          </div>
          <div className="border w-96 bg-blue-100 mr-4 text-3xl flex justify-start items-end">
            Content
          </div>
          <div className="border w-96 bg-blue-100 flex justify-end items-end mr-4 text-3xl">
            Content
          </div>
        </div>
      </div>

      {/* <div className="w-1/6 border p-3 m-3 rounded-md text-center bg-green-600 text-white text-2xl">
        Div Button
      </div>
      <button className="text-4xl p-4 border-4 rounded-xl m-5 hover:bg-gray-200 hover:text-gray-700">
        Hello
      </button> */}
    </div>
  );
}
