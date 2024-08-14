"use client";
import {
  getAuth,
  onAuthStateChanged
} from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore
} from "firebase/firestore";
import { userServer } from "../../Constants.js";

export default function authCek() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      const db = getFirestore();
      const querySnapshot = doc(db, "users", uid);
      const docSnap = await getDoc(querySnapshot);
      let dataUse = docSnap.data();
      if (dataUse?.id == "TkdlFf3gDtXvgiLSwkstONUbU6H2") {
        dataUse.tipe = "admin";
        dataUse.pic = user.photoURL;
        dataUse.token = user.accessToken;
      } else {
        dataUse.tipe = "user";
        dataUse.pic = user.photoURL;
        dataUse.token = user.accessToken;
      }
      try {
        let body = {
          from_origin: "*",
          userServer: userServer,
          userId: "admin",
          id: dataUse.id,
        };
        const configres = {
          headers: {
            Accept: "*",
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "x-access-token": dataUse.token,
          },
        };

        // const respon = await axios.post(url + 'mas_customers/get1', body, configres);
        // if (respon.data.status == "OK") {
        //   let newdata = dataUse
        //   newdata.nama = respon.data.data[0].name
        //   newdata.address = respon.data.data[0].address
        //   newdata.phone = respon.data.data[0].phone
        //   newdata.city_id = respon.data.data[0].city_id
        // }
        // localStorage.setItem("data", JSON.stringify(dataUse))
      } catch (error) {
        console.log(error);
      }
    } else {
    }
  });
}
