"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./button";

export default function Navbar({ name }) {
  const router = useRouter();
  const [mobileSetting, setMobileSetting] = React.useState(false);
  const [dataUser, setDataUser] = React.useState({});
  const [data, setData] = React.useState([
    {
      list: 125,
      prov: "Yokyakarta",
      url: "https://i.postimg.cc/nzJ9DCf9/Rectangle-10.png",
    },
    {
      list: 190,
      prov: "Surabaya",
      url: "https://i.postimg.cc/zvPf0f6j/Rectangle-12.png",
    },
    {
      list: 90,
      prov: "Bali",
      url: "https://i.postimg.cc/PJHbTS5c/Rectangle-13.png",
    },
    { list: 70, prov: "Jakarta", url: "https://i.postimg.cc/pXXm3nD5/BG.png" },
  ]);

  return (
    <div className="w-full h-20 bg-transparent sticky top-0">
      <div className="container mx-auto  h-full flex justify-between items-center">
        <div class="font-extrabold">PT Banteng Asset Investama</div>
        <div className="flex gap-x-6 text-white">
          <ul className="hidden md:flex gap-x-20">
            <li>
              <Link href="/">
                <p className="font-extrabold">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="font-extrabold">About Us</p>
              </Link>
            </li>
            <li>
              <Link href="/rules">
                <p className="font-extrabold">Rules</p>
              </Link>
            </li>
            <li>
              <Link href="https://www.triveinvest.co.id/">
                <p className="font-extrabold">Broker</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-6">
          <Button buttonName="login" route="/login" />
          <Button buttonName="create account" route="/signup" />
        </div>
      </div>
    </div>
  );
}
