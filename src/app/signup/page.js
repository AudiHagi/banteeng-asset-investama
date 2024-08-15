"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import Button from "../component/button";
import Navbar from "../component/navbar";

export default function Signup() {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [data, setData] = React.useState({
    name: "",
    email: "",
    phone: "",
    memberType: "",
    profitExpectation: "",
    riskManagement: "",
  });

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

  async function daftarAkun() {
  }

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{
        marginBottom: isMobile || isTablet ? "50%" : 0,
      }}
    >
      <Navbar />
      <div
        style={{
          width: "auto",
          padding: isMobile ? "2%" : "4%",
          paddingLeft: isMobile ? "5%" : "32%",
          paddingRight: isMobile ? "5%" : "32%",
        }}
      >
        <div className="text-center">
          <h1
            className="uppercase font-bold"
            style={{
              fontSize: isMobile ? "20px" : "40px",
            }}
          >
            membership registration
          </h1>
          <h4
            className="font-extralight"
            style={{
              fontSize: isMobile ? "15px" : "16px",
            }}
          >
            To apply for membership please complete all questions
          </h4>
        </div>
        <div
          style={{
            width: "auto",
            paddingLeft: isMobile ? "10%" : "12%",
            paddingRight: isMobile ? "10%" : "12%",
            marginTop: isMobile ? "8%" : "4%",
          }}
        >
          <form>
            <div className="form-group">
              <label for="inputName">Name</label>
              <input
                className="font-semibold text-black	 w-full rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                style={{
                  backgroundColor: "#A8A8A8",
                }}
                id="inputName"
                type="text"
                value={data.name}
                onChange={(val) => {
                  setData((prev) => ({
                    ...prev,
                    name: val.target.value,
                  }));
                }}
              />
            </div>
            <div className="form-group mt-3">
              <label for="inputEmail">Email</label>
              <input
                className="font-semibold text-black	 w-full rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                onChange={(val) => {
                  setData((prev) => ({
                    ...prev,
                    email: val.target.value,
                  }));
                }}
                style={{
                  backgroundColor: "#A8A8A8",
                }}
                id="inputEmail"
                type="text"
                value={data.email}
              />
            </div>
            <div className="form-group mt-3">
              <label for="inputPhone1">Phone</label>
              <input
                className="font-semibold text-black	 w-full rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                onChange={(val) => {
                  setData((prev) => ({
                    ...prev,
                    phone: val.target.value,
                  }));
                }}
                style={{
                  backgroundColor: "#A8A8A8",
                }}
                id="inputPhone1"
                type="text"
                value={data.phone}
              />
            </div>
            <div className="form-group mt-3">
              <label>Membership Type</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="membertype1"
                  name="membertype1"
                  value="silver"
                />
                <label className="form-check-label ml-2" for="membertype1">
                  Silver
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="membertype2"
                  name="membertype2"
                  value="gold"
                />
                <label className="form-check-label ml-2" for="membertype2">
                  Gold
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="membertype3"
                  name="membertype3"
                  value="platinum"
                />
                <label className="form-check-label ml-2" for="membertype3">
                  Platinum
                </label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label>Profit Expectation</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="profitexpectation1"
                  name="profitexpectation1"
                  value="low"
                />
                <label
                  className="form-check-label ml-2"
                  for="profitexpectation1"
                >
                  Low
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="profitexpectation2"
                  name="profitexpectation2"
                  value="medium"
                />
                <label
                  className="form-check-label ml-2"
                  for="profitexpectation2"
                >
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="profitexpectation3"
                  name="profitexpectation3"
                  value="high"
                />
                <label
                  className="form-check-label ml-2"
                  for="profitexpectation3"
                >
                  High
                </label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label>Risk Management</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="riskmanagement1"
                  name="riskmanagement1"
                  value="low"
                />
                <label className="form-check-label ml-2" for="riskmanagement1">
                  Low
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="riskmanagement2"
                  name="riskmanagement2"
                  value="medium"
                />
                <label className="form-check-label ml-2" for="riskmanagement2">
                  Medium
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="riskmanagement3"
                  name="riskmanagement3"
                  value="high"
                />
                <label className="form-check-label ml-2" for="riskmanagement3">
                  High
                </label>
              </div>
            </div>
            <div
              className="text-center"
              style={{
                marginTop: isMobile ? "8%" : "10%",
              }}
            >
              <Button
                onClick={() => {
                  daftarAkun();
                }}
                buttonName="sign up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
