import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList
} from "react-native";
import Material from "react-native-vector-icons/MaterialIcons";


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

  const loadUserData = async () => { };

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

  const datalist = [
    {},
  ]

  const renderItem = ({ item, index }) => {

  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
  };

  return (
    <View style={{flexDirection: 'row',}}> 
      <View style={{flex: 1}}>
        <View style={styles.modal}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#212F3D' }}>User_id : { }</Text>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#212F3D' }}>User name : {user_name}</Text>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#212F3D' }}>Email : {email}</Text>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#212F3D' }}>Address : { }</Text>
          </View>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ fontSize: 16, color: '#212F3D' }}>Phone : {phone}</Text>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.modal2}>
          <FlatList
            data={datalist}
            keyExtractor={(e, dt_id) => dt_id.toString()}
            renderItem={renderItem}
            ItemSeparatorComponent={separator}
          />
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center", paddingTop: 80 }}
            onPress={() => closeModal(false)}
          >
            <Text style={{ color: "blue", fontSize: 24, fontWeight: "bold" }}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailModal;

const styles = StyleSheet.create({
  modal: {
    height: 200,
    width: 250,
    backgroundColor: "#E8F8F5",
    borderRadius: 10,
    flexDirection: 'column',
  },
  modal2: {
    height: 500,
    width: 300,
    backgroundColor: "#FF9138",
    borderRadius: 10,
    flexDirection: 'column',
  },
});
