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
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div
        className="w-full flex"
        style={{
          backgroundColor: "#393838",
          padding: "2%",
          flexDirection: isMobile || isTablet ? "column" : "row",
        }}
      >
        <div
          className="flex flex-row items-center"
          style={{
            width: isMobile || isTablet ? "100%" : "20%",
          }}
        >
          <Image
            className="w-8 h-8"
            style={{ marginRight: "2%" }}
            src={images.wa}
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
          />
          <div style={{ fontSize: "13px" }}>+62 0000 0000 000</div>
        </div>
        <div
          className="flex flex-row items-center"
          style={{
            marginTop: isMobile ? "5%" : isTablet ? "2%" : 0,
          }}
        >
          <Image
            className="w-8 h-8"
            style={{ marginRight: "2%" }}
            src={images.gmail}
            height={15}
            width={15}
            alt="Picture of the author"
            unoptimized
          />
          <div style={{ fontSize: "13px", marginRight: "5%" }}>
            bantengassetinvestama@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
