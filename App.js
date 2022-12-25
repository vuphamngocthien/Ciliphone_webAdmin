import React, { useState, useEffect } from "react";
import HomeAdmin from "./src/pages/HomeAdmin";
import { app } from "./component/FirebaseConfig";
import { UserContextProvider } from "./firebaseCon/UserContext";
import { ProductContextProvider } from "./firebaseCon/ProductCon";
import Login from "./src/pages/Login";
export default function App() {
  return (
     <UserContextProvider>
      <ProductContextProvider>
         <HomeAdmin /> 
      </ProductContextProvider>
    </UserContextProvider>
  // <Login />
  );
}
