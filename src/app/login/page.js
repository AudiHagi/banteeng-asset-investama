"use client";
import { useRouter } from "next/navigation";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import Navbar from "../component/navbar";

export default function Login() {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = React.useState(
    window.innerWidth > 768 && window.innerWidth <= 1024
  );
  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    memberType: "",
    profitExpectation: "",
    riskManagement: "",
  });
  const buttonRef = React.useRef(null);

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

  async function login() {
    console.log("button triggered");
    if (data.email.length <= 0) {
      toast.error("Email Harus Diisi");
      return;
    }
    if (data.password.length <= 0) {
      toast.error("Password Harus Diisi");
      return;
    }
    console.log("INI ISI DATA", data);
    // let dataInput = {
    //   // "email": data.email,
    //   // "username": data.name,
    //   // "password": data.pass,
    //   username: data.email,
    //   codeEmailVerification: data.code,
    //   telp: "+62" + data.phone.replace(/ /g, ""),
    //   password: data.password,
    //   successRedirectUrl: baseURL,
    // };
    // console.log("INI ISI DATAINPUT", dataInput);
    // try {
    //   const register = await FETCH_API("users/register", dataInput);
    //   if (register.status == "OK") {
    //     toast.success(register.message);
    //     console.log(register);
    //     // navigate("/Login");
    //     window.location.href = register.data.invoice_url;
    //   } else {
    //     if (register.message !== undefined) {
    //       toast.error(register.message);
    //     } else {
    //       toast.error(register.error.message);
    //     }
    //   }
    // } catch (error) {
    //   toast.error(error);
    // }
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
            member login
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
          <div className="form-group mt-3">
            <label htmlFor="inputEmail">Email</label>
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
              type="email"
              value={data.email}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputPassword">Password</label>
            <input
              className="font-semibold text-black	 w-full rounded-md py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={(val) => {
                setData((prev) => ({
                  ...prev,
                  password: val.target.value,
                }));
              }}
              style={{
                backgroundColor: "#A8A8A8",
              }}
              id="inputPassword"
              type="password"
              value={data.password}
            />
          </div>
          <div
            className="text-center"
            style={{
              marginTop: isMobile ? "8%" : "10%",
            }}
          >
            <button
              onClick={() => {
                login();
                router.push("/signup");
              }}
              className="py-2 rounded-xl font-extrabold uppercase text-black hover:bg-white"
              ref={buttonRef}
              style={{
                backgroundColor: "#A8A8A8",
                paddingLeft: isMobile ? "30%" : "10%",
                paddingRight: isMobile ? "30%" : "10%",
                fontSize: isMobile ? "70%" : "100%",
              }}
            >
              login
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
