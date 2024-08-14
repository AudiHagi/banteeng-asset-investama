"use client";
import {
  getAuth,
  getIdToken,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore
} from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import lokasi from "../../../public/images/lokasi.png";
import { url, userServer } from "../../Constants.js";
import { decrypt, encrypt } from "../component/enkripsi";

export default function FilterHome({ setSuggest, suggest }) {
  const router = useRouter();
  const [mobileSetting, setMobileSetting] = React.useState(false);
  const [dataUser, setDataUser] = React.useState({});
  const [dataApart, setDataApart] = React.useState([]);
  const [dataProvince, setDataProvince] = React.useState([]);

  const [inputValue, setInputValue] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);
  const [jenisSewa, setJenisSewa] = React.useState("Bulanan");
  const [jenisProperti, setJenisProperti] = React.useState("Apartemen");

  const inputRef = React.useRef(null);
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    console.log(dataApart.concat(dataProvince));
    const filteredSuggestions = dataApart
      .concat(dataProvince)
      .filter((items) =>
        items.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    setSuggestions(filteredSuggestions);
    setSuggest(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
  };

  React.useEffect(() => {
    function handleOutsideClick(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  async function authCek() {
    const auth = getAuth();

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await getIdToken(user);
        const uid = user.uid;
        const db = getFirestore();
        const querySnapshot = doc(db, "users", uid);
        const docSnap = await getDoc(querySnapshot);
        let dataUse = docSnap.data();
        if (dataUse?.id == "TkdlFf3gDtXvgiLSwkstONUbU6H2") {
          dataUse.tipe = "admin";
          dataUse.pic = user.photoURL;
          dataUse.token = token;
        } else {
          dataUse.tipe = "user";
          dataUse.pic = user.photoURL;
          dataUse.token = token;
        }
        // setDataUser(dataUse)
        getDatanya(token);
        getDatanya2(token);
        // ...
      } else {
        setDataUser({});
        // User is signed out
        // ...
      }
    });
  }
  React.useEffect(() => {
    authCek();
  }, []);
  async function getDatanya(token) {
    try {
      let body = {
        from_origin: "*",
        userServer: userServer,
        userId: "admin",
        filter: {
          search1: "",
          search_col1: "all",
          sort_col1: "id",
          sort_dir1: "asc",
          jumlah_baris: 50,
          total_baris: 0,
          halaman: 1,
        },
      };
      const configres = {
        headers: {
          Accept: "*",
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token,
        },
      };

      // const respon = await axios.post(url + 'mas_province', body, configres);
      // if (respon.data.status == "OK") {
      //   setDataProvince(respon.data.data)
      // }
    } catch (error) {
      console.log(error);
    }
  }

  async function getDatanya2(token) {
    try {
      let body = {
        from_origin: "*",
        userServer: userServer,
        userId: "admin",
        filter: {
          search1: "",
          search_col1: "all",
          sort_col1: "id",
          sort_dir1: "asc",
          jumlah_baris: 50,
          total_baris: 0,
          halaman: 1,
        },
      };
      const configres = {
        headers: {
          Accept: "*",
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token,
        },
      };

      const respon = await axios.post(url + "mas_property", body, configres);
      if (respon.data.status == "OK") {
        setDataApart(respon.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function CariProperti() {
    try {
      if (inputValue !== "") {
        const filteredData = dataApart
          .concat(dataProvince)
          .filter((item) => item.name === inputValue);
        const searchParams = new URLSearchParams();
        console.log(filteredData);
        var newData = {};
        if (!filteredData?.[0]?.province_id) {
          searchParams.append("id", filteredData?.[0]?.id);
          searchParams.toString();
          newData = {
            id:
              filteredData?.[0]?.id !== undefined
                ? filteredData?.[0]?.id
                : dataApart[0].id,
            name: filteredData?.[0]?.name
              ? filteredData?.[0]?.name
              : dataApart[0].name,
            properti: jenisProperti,
            sewa: jenisSewa,
          };
        } else {
          searchParams.append("id", filteredData?.[0]?.province_id);
          searchParams.toString();
          newData = {
            id:
              filteredData?.[0]?.id !== undefined
                ? filteredData?.[0]?.province_id
                : dataApart[0].id,
            name: "",
            properti: jenisProperti,
            sewa: jenisSewa,
            namaapart: filteredData?.[0]?.id,
          };
        }
      } else {
        const filteredData = dataApart.concat(dataProvince);
        const searchParams = new URLSearchParams();
        console.log(filteredData);
        var newData = {};
        if (!filteredData?.[0]?.province_id) {
          searchParams.append("id", filteredData?.[0]?.id);
          searchParams.toString();
          newData = {
            id:
              filteredData?.[0]?.id !== undefined
                ? filteredData?.[0]?.id
                : dataApart[0].id,
            name: filteredData?.[0]?.name
              ? filteredData?.[0]?.name
              : dataApart[0].name,
            properti: jenisProperti,
            sewa: jenisSewa,
          };
        } else {
          searchParams.append("id", filteredData?.[0]?.province_id);
          searchParams.toString();
          newData = {
            id:
              filteredData?.[0]?.id !== undefined
                ? filteredData?.[0]?.province_id
                : dataApart[0].id,
            name: "",
            properti: jenisProperti,
            sewa: jenisSewa,
            namaapart: filteredData?.[0]?.id,
          };
        }
      }

      console.log(newData);
      const encrip = encrypt(newData);
      const decrypts = decrypt(encrip);
      let lempar = JSON.stringify(encrip);
      router.push("/searchview?" + "items=" + lempar);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      onClick={() => {
        setSuggest(false);
      }}
      class="bg-white w-full h-5/6 border rounded-tr-md rounded-md p-4"
    >
      <div class=" w-full flex flex-wrap">
        <div
          style={{ position: "relative" }}
          class="xl:w-2/6 w-2/5 h-5/6 flex p-1"
        >
          <div
            onClick={() => {
              setSuggest(false);
            }}
            style={{ backgroundColor: "#E9ECEF" }}
            class=" w-12 h-12 flex items-center justify-center mb-8  border rounded-tl-md rounded-bl-md"
          >
            <Image
              src={lokasi}
              height={15}
              width={15}
              unoptimized
              class="w-6 h-6"
              alt="Picture of the author"
            />
          </div>

          <input
            value={inputValue}
            onChange={handleInputChange}
            style={{ backgroundColor: "#E9ECEF" }}
            type="text"
            placeholder="Kota, Lokasi atau Alamat"
            className="outline-none border-none w-full h-12 text-gray-600 border rounded-tr-md rounded-br-md"
          />
          {suggest === true && (
            <ul
              style={{
                overflow: "scroll",
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                color: "black",
              }}
            >
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{ padding: "8px", cursor: "pointer" }}
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div class="xl:w-2/5 w-1/3 h-16 p-1">
          <div
            style={{ backgroundColor: "#E9ECEF" }}
            class="pl-2 pr-2 outline-none border-none  w-full h-12 text-gray-600 border rounded-md "
          >
            <select
              onChange={(e) => setJenisSewa(e.target.value)}
              value={jenisSewa}
              style={{ backgroundColor: "#E9ECEF" }}
              class="outline-none border-none  w-full h-12 text-gray-600 border rounded-md "
            >
              <option value="Bulanan" class="text-gray-500 p-1">
                Bulanan
              </option>
              <option value="Tahunan" class="text-gray-500 p-1">
                Tahunan
              </option>
            </select>
          </div>
        </div>
        <div class=" xl:w-1/4 w-1/4 h-16 p-1">
          <button
            style={{ backgroundColor: "#FF9533", borderColor: "#FF9533" }}
            onClick={() => {
              CariProperti();
            }}
            class="w-full form-control text-white h-12 justify-center flex items-center border rounded-md"
          >
            Cari Properti
          </button>
        </div>
      </div>
      <div class=" xl:h-16 h-10  w-full flex justify-center items-center">
        <hr class="w-1/4 text-gray-800"></hr>
        <div class="text-gray-500 pl-4 pr-4">Atau</div>
        <hr class="w-1/4 text-gray-800"></hr>
      </div>
      <div class="h-16 w-full flex justify-center items-center">
        <button
          style={{ backgroundColor: "#3582B8", borderColor: "#3582B8" }}
          onClick={() => {
            CariProperti();
          }}
          class="w-full form-control text-white pt-2.5 pb-2.5 flex items-center border rounded-md"
        >
          Cari Properti
        </button>
      </div>
    </div>
  );
}
