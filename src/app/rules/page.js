"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import Navbar from "../component/navbar";

export default function Rules() {
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
          <h1>member rules</h1>
        </div>
        <div
          style={{
            width: "auto",
            paddingLeft: isMobile ? "10%" : "20%",
            paddingRight: isMobile ? "10%" : "20%",
            marginTop: isMobile ? "5%" : "2%",
          }}
        >
          <div className="pb-2">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Check-in and Check-out
            </h2>
            <h4 className="rules-detail mt-1">
              Follow the specified check-in and check-out times to facilitate a
              smooth transition for everyone.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Quiet Hours
            </h2>
            <h4 className="rules-detail mt-1">
              From 10:00 PM to 7:00 AM, we appreciate your cooperation in
              maintaining a low noise level to ensure everyone’s rest.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              No Smoking
            </h2>
            <h4 className="rules-detail mt-1">
              Our property is a “non-smoking” zone. Please respect this policy
              in common areas and rooms.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Cleanliness and Order
            </h2>
            <h4 className="rules-detail mt-1">
              Contribute to keeping common areas neat and clean. If you use the
              kitchen or other shared spaces, remember to clean up after
              yourself.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
