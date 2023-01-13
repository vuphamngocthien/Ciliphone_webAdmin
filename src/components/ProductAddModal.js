import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from "react-native";

const WIDTH = 400;
const HEIGHT_MODAL = 700;

const ProductAddModal = (props) => {

  const [dt_pd, setDt_pd] = useState(props.detailproduct);
  const [dt, setDt] = useState(props.detail);
  const [user, setUser] = useState(props.user);
  const [data, setData] = useState([]);
  const [dtData, setdtData] = useState([]);
  const [pd, setpd] = useState([]);

  const [user_name, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [phone, setUserphone] = useState("");

  const loadData = async () => {
    for (var i = 1; i < Object.values(dt["Product_id"]); i++) {
      if (data[i - 1].dt_id == dt_pd) {
        setdtData(data[i - 1]);
        setpd(Object.values(data[i - 1].Product_id));
        break;
      }
    }
  };

  const loadUserData = async () => { };

  //   useEffect(() => {
  //     // loadData();

  //     var tt = dt["cart_id"].slice(1) - 1;
  //     setUsername(user[tt].User_name);
  //     setUseremail(user[tt].Email);
  //     setUserphone(user[tt].Phone_number);
  //   }, []);

  const closeModal = (bool) => {
    props.changeModalVisible(bool);
    console.log(bool);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
      <View style={styles.modal}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: 20 }}>
          <Image source={require("../../assets/img/14promax.jpg")} style={{ height: 75, width: 75 }} />
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Product Name</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Price</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Category</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Quantity</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Sale</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Description</Text>
          <TextInput multiline={true} style={{ width: 360, height: 70, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{ backgroundColor: '#FF9138', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginRight: 70}}
            onPress={() => closeModal(false)}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#FF9138', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
            onPress={() => closeModal(false)}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductAddModal;

const styles = StyleSheet.create({
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH,
    paddingTop: 10,
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    flexDirection: 'column'
  },
});