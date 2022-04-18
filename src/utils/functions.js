// adding function to data base
import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import Toastify from "./toast";

// adding info
export const AddUser = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "clientInformation");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  Toastify("User has been added");
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState();
  const [contactList, setContactList] = useState();

  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "clientInformation");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const infoArray = [];

      for (let id in data) {
        infoArray.push({ id, ...data[id] });
      }
      setContactList(infoArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

// deleting information
export const DeleteUser = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "clientInformation");
  remove(ref(db, "clientInformation/" + id));
  Toastify("User has been deleted");
};

// editing
export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["clientInformation/" + info.id] = info;
  return update(ref(db), updates);
};
