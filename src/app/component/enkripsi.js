import CryptoJS from "crypto-js";

export const encrypt = (data) => {
  if (data) {
    var ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "secret key 123"
    ).toString();
    return ciphertext;
  } else {
    return data;
  }
};

export const decrypt = (data) => {
  if (data) {
    var bytes = CryptoJS.AES.decrypt(data, "secret key 123");
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
  } else {
    return data;
  }
};
