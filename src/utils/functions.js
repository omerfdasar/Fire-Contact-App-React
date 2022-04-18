// adding function to data base
import firebase from "./firebase";
import { getDatabase, push, ref, set } from "firebase/database";

export const AddUser = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "clientInformation");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
};
