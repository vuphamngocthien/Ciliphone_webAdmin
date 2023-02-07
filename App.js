import React, { useState, useEffect,createContext } from "react";
import HomeAdmin from "./src/pages/HomeAdmin";
import { app } from "./component/FirebaseConfig";
import { UserContextProvider } from "./firebaseCon/UserContext";
import { ProductContextProvider } from "./firebaseCon/ProductCon";
import Login from "./src/components/Login";
import InvoiceManagement from "./src/pages/InvoiceManagement";
import Dashboard from "./src/pages/DashBoard";
import MainNavigation from './src/navigation/MainNavigation'
import ProductManagement from "./src/pages/ProductManagement";
import ContextNavigation from "./src/navigation/ContextNavigation";

export default function App(props) {
  
  return (
    <UserContextProvider >
      <ProductContextProvider>
        <ContextNavigation>
          {/* <MainNavigation/> */}
        </ContextNavigation>
      </ProductContextProvider>
    </UserContextProvider>
    // <Login />
    //  <Dashboard />
    // <Cart />
  );
}
