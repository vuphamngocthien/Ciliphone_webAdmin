import React, { useState, useEffect } from "react";
import HomeAdmin from "./src/pages/HomeAdmin";
import { app } from "./component/FirebaseConfig";
import { UserContextProvider } from "./firebaseCon/UserContext";
import { ProductContextProvider } from "./firebaseCon/ProductCon";
import Login from "./src/pages/Login";
import Cart from "./src/pages/Cart";
import Dashboard from "./src/pages/DashBoard";
export default function App() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <HomeAdmin />
      </ProductContextProvider>
    </UserContextProvider>
    // <Login />
    //  <Dashboard />
    // <Cart />
  );
}
