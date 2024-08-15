"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import "tailwindcss/tailwind.css";
import images from "../../../public/images/Images";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [menuOpen, setMenuOpen] = React.useState(false);

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
      <div className="container mx-auto flex justify-between items-center h-20">
        {isMobile || isTablet ? (
          <div className="flex justify-start">
            <div className="relative">
              <Image
                src={images.icon}
                style={{ width: "30px", marginLeft: "50%" }}
                height={40}
                width={40}
                alt="Hamburger"
                unoptimized
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>
            {menuOpen && (
              <div
                className="h-auto w-auto absolute ml-14 text-black"
                style={{
                  backgroundColor: "#A8A8A8",
                }}
              >
                <ul className="items-center">
                  <li
                    className="p-1"
                    style={{
                      backgroundColor: "#A8A8A0",
                    }}
                  >
                    <Link
                      href="/"
                      style={{
                        color: "black",
                        textDecoration: pathname == "/" ? "underline" : "none",
                        textDecorationThickness: "10%",
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className="p-1"
                    style={{
                      backgroundColor: "#A8A8A8",
                    }}
                  >
                    <Link
                      href="/about"
                      style={{
                        color: "black",
                        textDecoration:
                          pathname == "/about/" ? "underline" : "none",
                        textDecorationThickness: "10%",
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li
                    className="p-1"
                    style={{
                      backgroundColor: "#A8A8A8",
                    }}
                  >
                    <Link
                      href="/rules"
                      style={{
                        color: "black",
                        textDecoration:
                          pathname == "/rules/" ? "underline" : "none",
                        textDecorationThickness: "10%",
                      }}
                    >
                      Rules
                    </Link>
                  </li>
                  <li
                    className="p-1"
                    style={{
                      backgroundColor: "#A8A8A8",
                    }}
                  >
                    <Link href="https://www.triveinvest.co.id/">Broker</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="font-extrabold text-white">
            PT Banteng Asset Investama
          </div>
        )}
        {!isMobile && !isTablet && (
          <div className="flex gap-x-6 text-white">
            <ul className="hidden md:flex gap-x-20">
              <li>
                <Link
                  href="/"
                  style={{
                    color: "white",
                    textDecoration: pathname == "/" ? "underline" : "none",
                    textDecorationThickness: "10%",
                  }}
                >
                  <p className="font-extrabold">Home</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  style={{
                    color: "white",
                    textDecoration:
                      pathname == "/about/" ? "underline" : "none",
                    textDecorationThickness: "10%",
                  }}
                >
                  <p className="font-extrabold">About Us</p>
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  style={{
                    color: "white",
                    textDecoration:
                      pathname == "/rules/" ? "underline" : "none",
                    textDecorationThickness: "10%",
                  }}
                >
                  <p className="font-extrabold">Rules</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.triveinvest.co.id/"
                  style={{
                    color: "white",
                    textDecoration:
                      pathname == "https://www.triveinvest.co.id/"
                        ? "underline"
                        : "none",
                    textDecorationThickness: "10%",
                  }}
                >
                  <p className="font-extrabold">Broker</p>
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div
          className="gap-1 flex text-right items-end justify-end"
          style={{
            flexDirection: isMobile ? "column" : "row",
            marginRight: isMobile ? "3%" : 0,
          }}
        >
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="py-2 rounded-xl font-extrabold uppercase text-black"
            style={{
              backgroundColor: "#A8A8A8",
              marginTop: isMobile ? "20%" : 0,
              paddingLeft: isMobile ? "40%" : "10%",
              paddingRight: isMobile ? "40%" : "10%",
              fontSize: isMobile ? "70%" : "100%",
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              router.push("/signup");
            }}
            className="py-2 rounded-xl font-extrabold uppercase text-black"
            style={{
              backgroundColor: "#A8A8A8",
              paddingLeft: isMobile ? "30%" : "10%",
              paddingRight: isMobile ? "30%" : "10%",
              fontSize: isMobile ? "70%" : "100%",
            }}
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
