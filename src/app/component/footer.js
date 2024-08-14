"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import images from "../../../public/images/Images";

export default function Footer() {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [forget, setForget] = React.useState(false);

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
    <div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#000000",
          padding: "2%",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div style={{ width: "100%", fontSize: "13px" }}>
          Dapatkan update mengenai promo, trading tools, dan berita terbaru dari
          BAI
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#393838",
          padding: "2%",
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: isMobile || isTablet ? "100%" : "20%",
            alignItems: "center",
          }}
        >
          <Image
            src={images.wa}
            className="w-8 h-8"
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
            style={{ marginRight: "2%" }}
          />
          <div style={{ fontSize: "13px" }}>+62 0000 0000 000</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: isMobile ? "5%" : isTablet ? "2%" : 0,
          }}
        >
          <Image
            src={images.gmail}
            className="w-8 h-8"
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
            style={{ marginRight: "2%" }}
          />
          <div style={{ fontSize: "13px", marginRight: "5%" }}>
            bantengassetinvestama@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
