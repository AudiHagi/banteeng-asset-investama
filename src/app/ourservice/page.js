"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import Navbar from "../component/navbar";

export default function OurService() {
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
    <div
      style={{
        backgroundPosition: "100%",
        paddingBottom: isMobile || isTablet ? "7%" : 0,
      }}
    >
      <Navbar />
      <div
        style={{
          width: "auto",
          padding: isMobile ? "8%" : "4%",
          paddingLeft: isMobile ? "10%" : "20%",
          paddingRight: isMobile ? "10%" : "20%",
        }}
      >
        <div
          className="text-center uppercase font-bold"
          style={{
            fontSize: isMobile ? "32px" : "40px",
          }}
        >
          <h1>our service</h1>
        </div>
      </div>
    </div>
  );
}
