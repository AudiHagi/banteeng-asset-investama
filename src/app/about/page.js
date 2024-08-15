"use client";
import Carousel from "better-react-carousel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";
import images from "../../../public/images/Images";
import Footer from "../component/footer";
import Navbar from "../component/navbar";

export default function About() {
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
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "100%",
          paddingBottom: isMobile || isTablet ? "7%" : 0,
        }}
      >
        <Navbar />
        <div
          style={{
            width: isMobile || isTablet ? "100%" : "50%",
            padding: "8%",
            textAlign: isMobile || isTablet ? "center" : "left",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: isMobile ? "48px" : "64px",
              textAlign: isMobile || isTablet ? "center" : "left",
            }}
          >
            Banteng Asset Investama
          </div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: isMobile ? "16px" : "20px",
              textAlign: isMobile || isTablet ? "center" : "left",
            }}
          >
            PT Banteng Asset Investama atau biasa disingkat BAI adalah
            perusahaan Broker Local yang memiliki Winner Trader yang sudah
            berpengalaman dan sudah Approve.
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: isMobile ? 450 : isTablet ? 300 : 60,
          right: 0,
          zIndex: 2,
        }}
      >
        {isMobile || isTablet ? (
          <div></div>
        ) : (
          <Image
            src={images.inves}
            style={{ width: isMobile ? "200px" : isTablet ? "400px" : "650px" }}
            height={40}
            width={40}
            alt="Picture of the author"
            unoptimized
          />
        )}
      </div>
      <div
        className="w-full"
        style={{
          backgroundColor: isMobile || isTablet ? "#000000" : "#000000",
          padding: "1%",
        }}
      >
        <div
          className="w-full bg-white relative"
          style={{
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            top: isMobile ? -30 : -80,
            zIndex: 1,
          }}
        >
          <div
            className="w-full bg-white flex"
            style={{
              flexDirection: isMobile ? "column" : "row",
              padding: "4%",
              borderTopLeftRadius: isMobile ? 50 : 80,
              borderTopRightRadius: isMobile ? 50 : 80,
            }}
          >
            <div
              className="text-center justify-center items-center flex"
              style={{
                width: isMobile ? "100%" : "50%",
                padding: isMobile ? 0 : "5%",
              }}
            >
              <Image
                className="w-96 h-96"
                style={{ borderRadius: 50 }}
                src={images.visi}
                height={15}
                width={15}
                alt="Picture of the author"
                unoptimized
              />
            </div>
            <div
              className="text-center justify-center items-center text-black"
              style={{
                width: isMobile ? "100%" : "50%",
                fontSize: isMobile ? "14px" : "20px",
                paddingLeft: "4%",
                paddingRight: "4%",
                padding: "5%",
              }}
            >
              <div style={{ marginTop: isMobile ? 0 : "10%" }}>
                <span className="font-semibold">
                  PT Banteng Asset Investama
                </span>{" "}
                adalah broker terdepan yang menawarkan layanan terbaik dan
                inovatif kepada klien kami. Kami menyediakan akses yang mudah
                dan efisien ke pasar keuangan global, sambil menjaga
                transparansi dan etika bisnis dalam setiap transaksi. Dengan
                demikian, kami berkomitmen untuk membangun kepercayaan dan
                hubungan jangka panjang dengan klien kami, sambil tetap menjaga
                integritas dan profesionalisme.
              </div>
            </div>
          </div>
          <div
            className="w-full bg-black"
            style={{
              padding: "8%",
              paddingLeft: isMobile ? "10%" : "20%",
              paddingRight: isMobile ? "10%" : "20%",
            }}
          >
            <div
              className="font-bold justify-center items-center w-full text-center"
              style={{
                marginBottom: "3%",
                fontSize: "32px",
              }}
            >
              Keunggulan <span className="uppercase">bai</span>
            </div>
            <div
              className="w-full justify-center items-center text-center"
              style={{
                marginBottom: "3%",
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Membantu kebutuhan seorang trader serta mempercepat dan
              mempermudah berbagai proses untuk melancarkan aktivitas trading.
            </div>
            <div className="flex flex-row w-full justify-between items-center text-center">
              <div className="flex flex-col items-center text-center">
                <div style={{ marginTop: "20px" }}>
                  <Image
                    src={images.keunggulan1}
                    style={{ width: isMobile ? "50%" : "100%", height: "100%" }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "14px" : "20px",
                    marginTop: "20px",
                  }}
                >
                  Pembukaan Mudah
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "20px" }}
                >
                  <Image
                    src={images.keunggulan2}
                    style={{ width: isMobile ? "50%" : "100%", height: "100%" }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "14px" : "20px",
                    marginTop: "10px",
                  }}
                >
                  Layanan Bantuan
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div
                  className="flex justify-center"
                  style={{ marginTop: "20px" }}
                >
                  <Image
                    src={images.keunggulan3}
                    style={{ width: isMobile ? "50%" : "100%", height: "100%" }}
                    height={15}
                    width={15}
                    alt="Picture of the author"
                    unoptimized
                  />
                </div>
                <div
                  style={{
                    fontSize: isMobile ? "14px" : "20px",
                    marginTop: "10px",
                  }}
                >
                  Relationship Manager
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full bg-white"
            style={{
              padding: "4%",
              paddingLeft: isMobile ? "10%" : "20%",
              paddingRight: isMobile ? "10%" : "20%",
            }}
          >
            <div
              className="font-bold w-full justify-center items-center text-center text-black"
              style={{
                marginBottom: "3%",
                fontSize: "32px",
              }}
            >
              Kegiatan <span className="uppercase">bai</span>
            </div>
            <div className="w-full justify-center items-center text-center text-black"></div>
            <Carousel
              cols={isTablet ? 2 : 5}
              rows={1}
              gap={isMobile || isTablet ? 34 : 10}
              loop
            >
              <Carousel.Item>
                <div
                  style={{
                    display: isMobile || isTablet ? "" : "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.visi}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    className="text-black text-center"
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: isMobile || isTablet ? "" : "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.visi}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    className="text-black text-center"
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
