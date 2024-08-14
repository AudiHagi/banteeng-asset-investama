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
        className="relative overflow-hidden bg-cover bg-no-repeat"
        style={{
          backgroundPosition: "100%",
          paddingBottom: isMobile || isTablet ? "20%" : 0,
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
        <Image
          src={images.inves}
          style={{ width: isMobile ? "200px" : isTablet ? "400px" : "650px" }}
          height={40}
          width={40}
          alt="Picture of the author"
          unoptimized
        />
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: isMobile || isTablet ? "#224E90" : "#D9D9D9",
          padding: "1%",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            position: "relative",
            top: isMobile ? -30 : -80,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "100%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              padding: "4%",
              borderTopLeftRadius: isMobile ? 50 : 80,
              borderTopRightRadius: isMobile ? 50 : 80,
            }}
          >
            <div
              style={{
                width: isMobile ? "100%" : "50%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                padding: "5%",
                marginTop: isMobile ? "10%" : 0,
              }}
            >
              <Image
                src={images.visi}
                className="w-96 h-96"
                height={15}
                width={15}
                alt="Picture of the author"
                unoptimized
                style={{ borderRadius: 50 }}
              />
            </div>
            <div
              style={{
                width: isMobile ? "100%" : "50%",
                color: "black",
                fontSize: isMobile ? "14px" : "20px",
                paddingLeft: "4%",
                paddingRight: "4%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                padding: "5%",
              }}
            >
              <div style={{ marginTop: "10%" }}>
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
            style={{
              width: "100%",
              backgroundColor: "#000000",
              padding: "8%",
              paddingLeft: isMobile ? "10%" : "20%",
              paddingRight: isMobile ? "10%" : "20%",
            }}
          >
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "3%",
                fontSize: isMobile ? "20px" : "32px",
              }}
              className="font-bold"
            >
              Keunggulan
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "3%",
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Membantu kebutuhan seorang trader serta mempercepat dan
              mempermudah berbagai proses untuk melancarkan aktivitas trading.
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
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
                    marginTop: "10px",
                  }}
                >
                  Pembukaan Mudah <br />
                  dan Praktis
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ marginTop: "20px" }}>
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div style={{ marginTop: "20px" }}>
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
            style={{
              width: "100%",
              backgroundColor: "white",
              padding: "4%",
              paddingLeft: isMobile ? "10%" : "20%",
              paddingRight: isMobile ? "10%" : "20%",
            }}
          >
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "3%",
                fontSize: "32px",
                color: "#000000",
              }}
              className="font-bold"
            >
              Kegiatan <span className="uppercase">bai</span>
            </div>
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                color: "black",
              }}
            ></div>
            <Carousel cols={isTablet ? 1 : 5} rows={1} gap={10} loop>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
                    }}
                  >
                    Kegiatan A
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  style={{
                    display: "flex",
                    flexDirection: isMobile || isTablet ? "row" : "column",
                    alignItems: "center",
                  }}
                >
                  <div style={{ marginTop: "20px" }}>
                    <Image
                      src={images.inves}
                      style={{ width: "100%" }}
                      height={15}
                      width={15}
                      alt="Picture of the author"
                      unoptimized
                    />
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "16px" : "20px",
                      marginTop: "10px",
                      color: "black",
                      textAlign: "center",
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
