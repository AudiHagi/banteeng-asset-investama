"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";

export default function Button({ buttonName, route }) {
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
    <button
      onClick={() => {
        router.push(route);
      }}
      className="px-14 py-2 rounded-xl font-extrabold uppercase text-black"
      style={{
        backgroundColor: "#A8A8A8",
        marginTop: isMobile ? "2%" : 0,
      }}
    >
      {buttonName}
    </button>
  );
}
