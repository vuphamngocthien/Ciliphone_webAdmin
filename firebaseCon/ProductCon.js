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

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;

  const [data, setData] = useState([]);

  const getProduct = async ({}) => {
    await onValue(ref(getDatabase(), "Products"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  };
  const updatePro = async (
    Category,
    description,
    name,
    picture,
    quantity,
    sale,
    price,
    Pd_id
  ) => {
    set(ref(getDatabase(), "Products/" + Pd_id), {
      Category_id: Category,
      Description: description,
      Import_Date: "26/11/2003",
      Product_id: Pd_id,
      Product_name: name,
      Product_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj8pII-4uSHc9kV-JadDHiuD3Y1AJ2ugHog&usqp=CAU",
      Quantity: quantity,
      Sale: sale,
      price: price,
    });
  };
  const removePro = async (pd_id) => {
    remove(ref(getDatabase(), "Products/" + pd_id), {});
  };

  const addProduct = async (
    Category,
    description,
    name,
    picture,
    quantity,
    sale,
    price
  ) => {
    await getProduct();
    var id = "pd" + data.length + 1;
    set(ref(getDatabase(), "Products/" + id), {
      Category_id: Category,
      Description: description,
      Import_Date: "26/11/2003",
      Product_id: id,
      Product_name: name,
      Product_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj8pII-4uSHc9kV-JadDHiuD3Y1AJ2ugHog&usqp=CAU",
      Quantity: quantity,
      Sale: sale,
      price: price,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        removePro,
        updatePro,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
