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
      console.log(isMobile, isTablet);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        backgroundPosition: "100%",
        paddingBottom: "20%"
      }}
    >
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "8%",
          paddingLeft: isMobile ? "10%" : "20%",
          paddingRight: isMobile ? "10%" : "20%",
        }}
      >
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3%",
            fontSize: isMobile ? "20px" : "32px",
          }}
        >
          <div
            style={{
              width: "52%",
              height: "10%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Image
              style={{
                width: "100%",
              }}
              src={images.baiLogo}
              alt="logo"
            />
          </div>
          <h1
            className="uppercase"
            style={{
              fontWeight: "bold",
              letterSpacing: "30px",
              fontSize: "56px",
            }}
          >
            bai
          </h1>
          <h1
            style={{
              fontWeight: "lighter",
              fontSize: "32px",
            }}
            className="uppercase"
          >
            banteeng asset investama
          </h1>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "28px",
            }}
            className="uppercase"
          >
            profesional copy trade community
          </h1>
        </div>
      </div>
    </div>
  );
}
