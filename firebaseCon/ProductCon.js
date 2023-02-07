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
  const [upPro, setUppro] = useState();
  const [data_pd,setdata_Pd]=useState([]);
  const [data_user,setdata_user]=useState([]);

  const getProduct = async () => {
    //  var item = [];
    await onValue(ref(getDatabase(), "Products"), (snapshot) => {
      // item = Object.values(snapshot.val());
      setData(Object.values(snapshot.val()));
    });

    // return item;
  };
  useEffect(() => {
    getProduct();
  }, []);
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
    console.log( Category,
      description,
      name,
      picture,
      quantity,
      sale,
      price,
      Pd_id,'djskfhaskdfh')
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
      console.log('chay duoc roi ban oi yeah')
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
    var id = data[data.length - 1].Product_id.slice(2);
    var fullid = parseInt(id) + 1;
    console.log(fullid, "//////////%%%%%%%%%%%%%");
    set(ref(getDatabase(), "Products/pd" + fullid), {
      Category_id: Category,
      Description: description,
      Import_Date: "26/11/2003",
      Product_id: "pd" + fullid,
      Product_name: name,
      Product_picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEj8pII-4uSHc9kV-JadDHiuD3Y1AJ2ugHog&usqp=CAU",
      Quantity: quantity,
      Sale: sale,
      price: price,
    });
    getProduct();
  };
  const getSold = async () => {
    const res = await getProduct();
    var sold = 0;
    for (var i = 1; i < res.length; i++) {
      sold += res[i - 1].Total_price;
    }
    console.log(sold, "%%%%%%%%%%%");
    return sold;
  };
console.log(data_pd)
  return (
    <ProductContext.Provider
      value={{
        addProduct,
        removePro,
        updatePro,
        upPro,
        setUppro,
        getSold,
        setdata_Pd,
        data_pd,
        setdata_user,
        data_user
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
