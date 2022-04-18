// adding function to data base
import firebase from "./firebase";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

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
