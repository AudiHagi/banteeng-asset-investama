"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Check from "../../../public/images/Check.png";
import CloseWhite from "../../../public/images/CloseWhite.png";
import info from "../../../public/images/info.png";

export default function Toast({ modal, setToastParam }) {
  const router = useRouter();
  const [modalBayar, setModalBayar] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setToastParam((old) => ({
        ...old,
        kondisi: false,
        type: "",
        value: "",
      }));
    }, 2000);
  }, []);

  if (modal?.kondisi == true && modal?.type?.length > 0) {
    return (
      <div class="toast toast-right toast-top w-1/6 z-50 flex absolute">
        {modal.type == "info" ? (
          <div class="alert alert-info flex flex-row">
            <Image
              src={info}
              width={15}
              height={15}
              unoptimized
              class="w-6 h-6"
              alt="Picture of the author"
            />
            <span class="text-white">{modal.value}</span>
          </div>
        ) : modal.type == "error" ? (
          <div class="alert alert-error flex flex-row">
            <Image
              src={CloseWhite}
              width={15}
              height={15}
              unoptimized
              class="w-6 h-6"
              alt="Picture of the author"
            />
            <span class="text-white">{modal.value}</span>
          </div>
        ) : modal.type == "success" ? (
          <div class="alert alert-success flex flex-row">
            <Image
              src={Check}
              width={15}
              height={15}
              unoptimized
              class="w-6 h-6"
              alt="Picture of the author"
            />
            <span class="text-white lg:text-lg text-xs">{modal.value}</span>
          </div>
        ) : null}
      </div>
    );
  }
}
