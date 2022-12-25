import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

import DialogUpdateUser from "./DialogUpdateUser";
import DialogUpdateProduct from "./DialogUpdateProduct";
function Dialog(props) {
  const [open, setOpen] = useState(props);
  if (props.myType == 1) {
    setOpen(true);
    return <DialogUpdateProduct open={open} />;
  } else if (props.myType == 2) {
    setOpen(true);
    return <DialogUpdateUser open={open} />;
  } else {
    console.log("Dont have data !");
  }
}
export default Dialog;
