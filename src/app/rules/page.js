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
          <table class="table-fixed w-full">
            <thead className="uppercase bg-gray-300 text-black font-black	">
              <tr>
                <th>Product</th>
                <th>Minimal Deposit</th>
                <th>Membership Fee</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black text-center font-semibold	">
              <tr>
                <td>Silver</td>
                <td>100 Million</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>Gold</td>
                <td>500 Million</td>
                <td>25%</td>
              </tr>
              <tr>
                <td>Platinum</td>
                <td>1.000 Million</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Trading Lot
            </h2>
            <h4 className="rules-detail mt-1">
              The trading lot is determined based on the member's deposit, with
              a ratio of 0.1 lot per 100 million of deposit. This ensures that
              the trading volume aligns with the member's financial capacity.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Membership Fee
            </h2>
            <h4 className="rules-detail mt-1">
              This fee covers the use of trading algorithms provided by Banteeng
              Asset Investama. For the first cycle, this fee is waived.
              Subsequent membership fees are deducted from the member’s
              withdrawn profits, with the amount depending on the chosen product
              type.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Profit Expectation
            </h2>
            <h4 className="rules-detail mt-1">
              This represents the anticipated return a member aims to achieve
              from trading with the provided algorithms. Trading will cease once
              the profit reaches the member's specified target.
            </h4>
          </div>

          <div className="mt-6">
            <h2
              style={{
                fontWeight: "bold",
                fontSize: isMobile ? "20px" : "24px",
              }}
            >
              Risk Management
            </h2>
            <h4 className="rules-detail mt-1">
              Our risk management framework is designed to safeguard member
              capital from significant losses by implementing risk limits and
              effective mitigation strategies throughout the trading process.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
