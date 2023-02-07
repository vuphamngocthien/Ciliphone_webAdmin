import React, { useState, useEffect, createContext } from "react";
import { getUser } from "./UserService";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from "firebase/database";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [data, setData] = useState([]);
  const [Data_user,setData_user]=useState([]);
  const [upUser, setUpuser] = useState([]);
  const getUser = async ({}) => {
    await onValue(ref(getDatabase(), "Products"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  };

  const removeUser = async (us_id) => {
    remove(ref(getDatabase(), "User/" + us_id), {});
  };
  const updateUser = async (
    name,
    birth,
    email,
    address,
    phone,
    us_id,
    Money
  ) => {
    set(ref(getDatabase(), "User/" + us_id), {
      Address: address,
      Birth: birth,
      Email: email,
      Money: Money,
      Password: "123",
      Phone_number: phone,
      User_id: us_id,
      User_name: name,
      User_picture:
        "https://firebasestorage.googleapis.com/v0/b/fa22datn.appspot.com/o/download.jfif?alt=media&token=82db0ca2-b895-43e1-bb64-307bccbfd15a",
    });
  };
  return (
    <UserContext.Provider
      value={{
        removeUser,
        updateUser,
        setUpuser,
        upUser,
        isLoggedIn,
        setisLoggedIn,
        setData_user,
        Data_user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
