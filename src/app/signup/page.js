"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import Button from "../component/button";

export default function Signup() {
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
    <div
      className="relative overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundPosition: "100%",
        paddingBottom: isMobile || isTablet ? "20%" : 0,
      }}
    >
      <div
        style={{
          width: "auto",
          height: "0%",
          padding: "8%",
          paddingLeft: isMobile ? "10%" : "20%",
          paddingRight: isMobile ? "10%" : "20%",
        }}
      >
        <div className="text-center">
          <h1
            className="text-center uppercase"
            style={{
              fontWeight: "bold",
              fontSize: isMobile ? "32px" : "40px",
            }}
          >
            membership registration
          </h1>
          <h4 className="text-center uppercase"
            style={{
              fontSize: isMobile ? "8px" : "16px",
            }}>To apply for membership please complete all questions</h4>
        </div>
        <div
          style={{
            width: "auto",
            height: "0%",
            paddingLeft: isMobile ? "10%" : "30%",
            paddingRight: isMobile ? "10%" : "30%",
            marginTop: "3%",
          }}
        >
          <form>
            <div className="form-group">
              <label style={{ textAlign: "left" }} for="inputName">
                Name
              </label>
              <input
                style={{
                  width: "100%",
                  minHeight: "100%",
                  backgroundColor: "#A8A8A8",
                  color: "#000000",
                }}
                id="inputName"
                type="text"
                className="rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="form-group mt-3">
              <label for="inputEmail">Email</label>
              <input
                style={{
                  width: "100%",
                  backgroundColor: "#A8A8A8",
                  color: "#000000",
                }}
                id="inputEmail"
                className="rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
              />
            </div>
            <div className="form-group mt-3">
              <label for="inputPhone1">Phone</label>
              <input
                style={{
                  width: "100%",
                  backgroundColor: "#A8A8A8",
                  color: "#000000",
                }}
                id="inputPhone1"
                className="rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                type="text"
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
                  id="membertype1"
                  name="membertype1"
                  value="silver"
                />
                <label className="form-check-label ml-2" for="membertype1">
                  Low
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
                  Medium
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
                  id="membertype1"
                  name="membertype1"
                  value="silver"
                />
                <label className="form-check-label ml-2" for="membertype1">
                  Low
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
                  Medium
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
                  High
                </label>
              </div>
            </div>
            <div className="mt-5 text-center">
              <Button onClick={() => {}} buttonName="sign up" route="/login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
