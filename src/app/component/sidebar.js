"use client";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import axios from "axios";
import {
  faArrowUpFromWaterPump,
  faBolt,
  faCity,
  faGlobe,
  faGolfBall,
  faHotel,
  faHouseChimney,
  faLocation,
  faPeopleArrows,
  faPeopleGroup,
  faPeopleLine,
  faPeopleRobbery,
  faStairs,
  faTowerCell,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../public/images/LogoUruzWhite.png";
import { userServer } from "../../Constants.js";

export default function Sidebar() {
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

  async function authCek() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const db = getFirestore();
        const querySnapshot = doc(db, "users", uid);
        const docSnap = await getDoc(querySnapshot);
        let dataUse = docSnap.data();
        if (dataUse?.id == "gUPgQJzEBcf0ChD1zYseTbYgMMy2") {
          dataUse.tipe = "superadmin";
          dataUse.pic = user.photoURL;
          dataUse.token = user.accessToken;
        } else {
          dataUse.tipe = "user";
          dataUse.pic = user.photoURL;
          dataUse.token = user.accessToken;
        }
        setDataUser(dataUse);
        localStorage.setItem("data", JSON.stringify(dataUse));
        // cekCustomer(dataUse)
        // ...
      } else {
        setDataUser({});
        // User is signed out
        // ...
      }
    });
  }

  async function cekCustomer(datause) {
    try {
      let body = {
        from_origin: "*",
        userServer: userServer,
        userId: "admin",
        id: datause.id,
      };
      const configres = {
        headers: {
          Accept: "*",
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": datause.token,
        },
      };

      // const respon = await axios.post(url + 'mas_customers/get1', body, configres);
      // if (respon.data.status == "OK") {
      //   let newdata = datause
      //   newdata.nama = respon.data.data[0].name
      //   newdata.address = respon.data.data[0].address
      //   newdata.phone = respon.data.data[0].phone
      //   newdata.city_id = respon.data.data[0].city_id
      //   // setDataUser(newdata)
      //   // localStorage.setItem("data", JSON.stringify(newdata))
      // }
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // history.push(`/${router}login`,{data:''})
        authCek();
        router.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  React.useEffect(() => {
    authCek();
  }, []);
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <aside
        id="logo-sidebar"
        class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-blue-950 border-blue-950`}
        aria-label="Sidebar"
      >
        {" "}
        <div class="h-full px-3 pb-4 overflow-y-auto bg-blue-950">
          <ul class="space-y-2 font-medium">
            {dataUser.group === "superadmin" ||
              (dataUser.group === "admin" && (
                <div>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/tower");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faTowerCell} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Tower
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/floors");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faStairs} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Lantai
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer ">
                    <a
                      onClick={() => {
                        router.push("/dashboard/unit");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faHouseChimney} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Unit
                      </span>
                    </a>
                  </li>
                </div>
              ))}

            {dataUser.group === "superadmin" && (
              <li class="cursor-pointer">
                <a
                  onClick={() => {
                    router.push("/dashboard/approveadmin");
                  }}
                  class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={faPeopleArrows} />
                  <span class="ml-3 text-white">Approve Admin</span>
                </a>
              </li>
            )}
            {dataUser.group === "admin" && (
              <li class="cursor-pointer">
                <a
                  onClick={() => {
                    router.push("/dashboard/manageuser");
                  }}
                  class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={faPeopleGroup} />
                  <span class="ml-3 text-white">Manage User</span>
                </a>
              </li>
            )}
            {dataUser.group === "admin" && (
              <li class="cursor-pointer">
                <a
                  onClick={() => {
                    router.push("/dashboard/approveunit");
                  }}
                  class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={faPeopleArrows} />
                  <span class="ml-3 text-white">Approve Unit</span>
                </a>
              </li>
            )}
            {dataUser.group === "admin" && (
              <li class="cursor-pointer">
                <a
                  onClick={() => {
                    router.push("/dashboard/complainunit");
                  }}
                  class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={faPeopleLine} />
                  <span class="ml-3 text-white">Complain</span>
                </a>
              </li>
            )}
            {dataUser.group === "Teknisi" && (
              <li class="cursor-pointer">
                <a
                  onClick={() => {
                    router.push("/dashboard/teknisi");
                  }}
                  class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                >
                  <FontAwesomeIcon icon={faPeopleRobbery} />
                  <span class="ml-3 text-white">Daftar Complain</span>
                </a>
              </li>
            )}
            {dataUser.group === "superadmin" && (
              <ul>
                <li class="cursor-pointer pb-2">
                  <a
                    onClick={() => {
                      router.push("/dashboard/property");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <FontAwesomeIcon icon={faHotel} />
                    <span class="flex-1 ml-3 whitespace-nowrap text-white">
                      Apartemen
                    </span>
                    {/* <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
                  </a>
                </li>
                <li class="cursor-pointer pb-2">
                  <a
                    onClick={() => {
                      router.push("/dashboard/country");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <FontAwesomeIcon icon={faGlobe} />
                    <span class="flex-1 ml-3 whitespace-nowrap text-white">
                      Negara
                    </span>
                  </a>
                </li>
                <li class="cursor-pointer pb-2">
                  <a
                    onClick={() => {
                      router.push("/dashboard/province");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <FontAwesomeIcon icon={faLocation} />
                    <span class="flex-1 ml-3 whitespace-nowrap text-white">
                      Provinsi
                    </span>
                    {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span> */}
                  </a>
                </li>
                <li class="cursor-pointer pb-2">
                  <a
                    onClick={() => {
                      router.push("/dashboard/city");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <FontAwesomeIcon icon={faCity} />
                    <span class="flex-1 ml-3 whitespace-nowrap text-white">
                      Kota
                    </span>
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a
                    onClick={() => {
                      router.push("/dashboard/facilities");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <FontAwesomeIcon icon={faWifi} />
                    <span class="flex-1 ml-3 whitespace-nowrap text-white">
                      Fasilitas
                    </span>
                  </a>
                </li>
                <li class="cursor-pointer">
                  <a
                    onClick={() => {
                      router.push("/dashboard/edc");
                    }}
                    class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                  >
                    <svg
                      class="flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400  group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">EDC</span>
                  </a>
                </li>
              </ul>
            )}
            {dataUser.group === "superadmin" ||
              (dataUser.group === "admin" && (
                <div>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/facilities");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faWifi} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Fasilitas
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/approverentfacilities");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faGolfBall} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Approve Rent Fasilitas
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/unitbilling");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faArrowUpFromWaterPump} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Maintenance
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/billingmaintenance");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faBolt} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Data Maintenance
                      </span>
                    </a>
                  </li>
                  <li class="cursor-pointer pb-2">
                    <a
                      onClick={() => {
                        router.push("/dashboard/report");
                      }}
                      class="flex items-center p-2  rounded-lg text-white hover:bg-gray-700 group"
                    >
                      <FontAwesomeIcon icon={faBolt} />
                      <span class="flex-1 ml-3 whitespace-nowrap text-white">
                        Report
                      </span>
                    </a>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </aside>

      <nav class="fixed z-50 top-0  w-full bg-blue-950 border-gray-200">
        <div class="flex w-full flex-wrap items-center justify-between px-3">
          <div class="flex w-full flex-wrap items-center justify-between">
            <div
              class="cursor-pointer"
              onClick={() => {
                router.push("/");
              }}
            >
              <Image
                src={Logo}
                unoptimized
                width={15}
                height={15}
                class="ml-8 xl:w-14 xl:h-14 lg:w-14 lg:h-14 w-10 h-10"
                alt="Picture of the author"
              />
            </div>
            <div
              className={`md:hidden lg:hidden fixed top-0 left-0 z-50 p-2 mr-10`}
            >
              <button
                onClick={toggleSidebar}
                className="text-white text-xl focus:outline-none"
              >
                ☰
              </button>
            </div>
            <div class="flex items-center">
              {dataUser?.id != undefined ? (
                <div class="hidden sm:block card-body pt-2 pb-2 pr-4 lg:pr-12">
                  <div
                    onClick={() => {
                      setMobileSetting(!mobileSetting);
                    }}
                    class=" flex flex-row items-center"
                  >
                    <div class="mr-4 text-white">{dataUser?.nama}</div>
                    <div class="avatar">
                      <div class="w-12 mr-5 rounded-full">
                        <img src={dataUser?.pic} />
                      </div>
                    </div>
                  </div>
                  {mobileSetting == true && (
                    <ul
                      tabindex="0"
                      class=" flex absolute dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                      <li>
                        <a
                          onClick={() => {
                            router.push("/profile");
                          }}
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/request2");
                          }}
                        >
                          Sewakan
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/requestUnit");
                          }}
                        >
                          Request Unit
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/complain");
                          }}
                        >
                          Complain
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <div class="hidden sm:block card-body pt-2 pb-2 pr-4 lg:pr-12">
                  <button
                    style={{
                      backgroundColor: "#3582B8",
                      borderColor: "#3582B8",
                    }}
                    onClick={() => {
                      router.push("/login");
                    }}
                    // onClick={()=>{window.modal_login.showModal()}}
                    class="form-control text-black pt-2 pb-2 pl-4 pr-4 border rounded-md"
                  >
                    Daftar/Login
                  </button>
                </div>
              )}
            </div>

            <div class="lg:hidden xl:hidden md:hidden sm:hidden block drawer w-1/2">
              <input id="my-drawer" type="checkbox" class="drawer-toggle" />
              <div class="drawer-content flex w-full justify-end pr-4">
                <label
                  for="my-drawer"
                  class="btn btn-primary drawer-button bg-transparent border-transparent"
                >
                  <svg
                    onClick={() => {}}
                    class="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                </label>
                {/* <label for="my-drawer" class="btn btn-primary drawer-button bg-white border-white text-black">Action</label> */}
              </div>
              <div class="drawer-side">
                <label for="my-drawer" class="drawer-overlay"></label>
                <ul class="menu p-4 w-3/5 min-h-full bg-gray-800">
                  <div class="w-full flex justify-center mb-8">
                    <Image
                      src={Logo}
                      width={15}
                      height={15}
                      unoptimized
                      alt="Picture of the author"
                      class="w-24 h-20"
                    />
                  </div>
                  {dataUser?.id == undefined ? (
                    <li class=" text-white">
                      <a
                        onClick={() => {
                          router.push("/regis");
                        }}
                        for="my-drawer1"
                        class="text-lg font-bold"
                      >
                        Regis
                      </a>
                    </li>
                  ) : dataUser?.group != "admin" &&
                    dataUser?.group != "superadmin" ? (
                    <div class=" text-white">
                      <li>
                        <a
                          onClick={() => {
                            router.push("/request");
                          }}
                          for="my-drawer1"
                          class="text-lg font-bold"
                        >
                          Sewakan
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/profile");
                          }}
                          for="my-drawer1"
                          class="text-lg font-bold"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/requestUnit");
                          }}
                          for="my-drawer1"
                          class="text-lg font-bold"
                        >
                          Request Unit
                        </a>
                      </li>
                    </div>
                  ) : (
                    <li class=" text-white">
                      <a
                        onClick={() => {
                          if (dataUser?.group === "Teknisi") {
                            router.push("/dashboard/teknisi");
                          } else if (dataUser?.group === "superadmin") {
                            router.push("/dashboard/approveadmin");
                          } else {
                            router.push("/dashboard/tower");
                          }
                        }}
                      >
                        Dashboard
                      </a>
                    </li>
                  )}
                  {dataUser?.id != undefined ? (
                    <div class=" text-white">
                      <li>
                        <a
                          onClick={() => {
                            router.push("/profile");
                          }}
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/request2");
                          }}
                        >
                          Sewakan
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            router.push("/requestUnit");
                          }}
                        >
                          Request Unit
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => {
                            router.push("/complain");
                          }}
                        >
                          Complain
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={() => {
                            logout();
                          }}
                        >
                          Logout
                        </a>
                      </li>
                    </div>
                  ) : (
                    <li>
                      <a
                        onClick={() => {
                          router.push("/login");
                        }}
                        for="my-drawer"
                        class="text-lg font-bold text-black"
                      >
                        Login
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
