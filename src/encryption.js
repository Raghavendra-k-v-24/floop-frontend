import CryptoJS from "crypto-js";

const SECRET_KEY =
  "b4f1c3a9d8e7f20c9a6b5d3e4f12ab34c9d7e6a1b2c3d4e5f6a7b8c9d0e1f299"; // ideally store in .env

export const encryptData = (data) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  return encrypted;
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decrypted;
};
