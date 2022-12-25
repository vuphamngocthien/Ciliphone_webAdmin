import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT_MODAL = 600;

const DetailModal = (props) => {
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
  const loadUserData = async () => {};

  useEffect(() => {
    // loadData();

    var tt = dt["cart_id"].slice(1) - 1;
    setUsername(user[tt].User_name);
    setUseremail(user[tt].Email);
    setUserphone(user[tt].Phone_number);
  }, []);
  const closeModal = (bool) => {
    props.changeModalVisible(bool);

    console.log(bool);
  };
  //data.map((pro) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.modal}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 32, color: "blue" }}>Detail</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ fontSize: 24, color: "red" }}>wew</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>User name : {user_name}</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>Email : {email}</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>
            Address : Gam cau Thu Thiem, Tp. HCM
          </Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>Phone : {phone}</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>Product:</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>Total Price : {dt["Price"]}</Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>
            Innitiated_date : {dt["Innitiated_date"]}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 50, paddingVertical: 15 }}>
          <Text style={{ fontSize: 16 }}>Status : {dt["Status"]}</Text>
        </View>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => closeModal(false)}
        >
          <Text style={{ color: "blue", fontSize: 24, fontWeight: "bold" }}>
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  // });
};

export default DetailModal;

const styles = StyleSheet.create({
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 500,
    paddingTop: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
  },
});
