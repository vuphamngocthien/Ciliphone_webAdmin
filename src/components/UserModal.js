import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";

const WIDTH = 400;
const HEIGHT_MODAL = 600;

const UserModal = (props) => {

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
    props.changeModalVisible(bool); s
    console.log(bool);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
      <View style={styles.modal}>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Image source={require("../../assets/img/avataradmin.png")} style={{ height: 75, width: 75 }} />
          <View style={{ flexDirection: 'column' }}>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24, color: "white" }}>Dinh Ngoc Tang</Text>
            </View>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 24, color: "brown" }}>$1000</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Birthday</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Address</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Phone</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Email</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center", paddingTop: 100 }}
          onPress={() => closeModal(false)}
        >
          <Text style={{ color: "blue", fontSize: 24, fontWeight: "bold" }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UserModal;

const styles = StyleSheet.create({
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH,
    paddingTop: 10,
    backgroundColor: "#FF9138",
    borderRadius: 10,
    flexDirection: 'column'
  },
});