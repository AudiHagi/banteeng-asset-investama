"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import images from "../../public/images/Images.js";
import Navbar from "./component/navbar";

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        backgroundPosition: "100%",
      }}
    >
      <Navbar />
      <div
        style={{
          width: "100%",
          padding: "8%",
          marginTop: isMobile ? "30%" : 0,
          paddingLeft: isMobile ? "10%" : "20%",
          paddingRight: isMobile ? "10%" : "20%",
        }}
      >
        <div className="justify-center items-center text-center w-full">
          <div
            className="mx-auto"
            style={{
              width: "52%",
            }}
          >
            <Image
              className="w-full"
              src={images.baiLogo}
              alt="Banteeng Asset Investama logo"
            />
          </div>
          <h1
            className="font-bold uppercase"
            style={{
              letterSpacing: "30px",
              fontSize: isMobile ? "48px" : "56px",
            }}
          >
            bai
          </h1>
          <h1
            className="font-thin uppercase"
            style={{
              fontSize: isMobile ? "20px" : "32px",
            }}
          >
            banteeng asset investama
          </h1>
          <h1
            className="font-semibold uppercase"
            style={{
              fontSize: isMobile ? "22px" : "28px",
              marginTop: "10px",
            }}
          >
            profesional copy trade community
          </h1>
        </div>
      </div>
    </div>
  );
}
