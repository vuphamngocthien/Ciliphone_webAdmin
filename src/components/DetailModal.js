import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image
} from "react-native";
import Material from "react-native-vector-icons/MaterialIcons";

const DetailModal = (props) => {
  const [dt_pd, setDt_pd] = useState(props.detailproduct);
  const [dt, setDt] = useState(props.detail);
  const [user, setUser] = useState(props.user);
  const [pd, setpd] = useState(props.product);
  const [data, setData] = useState([]);
  const [dtData, setdtData] = useState([]);

  const [address, setAddress] = useState("");

  const [user_name, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [phone, setUserphone] = useState("");
  const [datalist, setDataList] = useState(props.product_detail);
  const loadData = async () => {
    console.log(datalist);
  };

  useEffect(() => {
    loadData();

    var tt = dt["cart_id"].slice(1) - 1;
    setUsername(user[tt].User_name);
    setUseremail(user[tt].Email);
    setUserphone(user[tt].Phone_number);
    setAddress(user[tt].Address);
  }, []);
  const closeModal = (bool) => {
    props.changeModalVisible(bool);
    console.log(bool);
  };
  const renderItem2 = ({ item, index }) => {
    
    return (
      <View style={styles.favorite_shadow} key={item.product_name}>
        <Image source={{ uri: item.product_picture }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', padding: 10 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column', width:120, top: -60 }}>
            <Text style={{ fontWeight: '700', fontSize: 20, color: 'black', alignSelf: 'center',justifyContent:'center',top:50 }}>{item.product_name}</Text>
            <Text style={{ fontSize: 15, color: 'black', top: 20, left: 20,top:60 }}>{item.product_description}</Text>
          </View>
          <View style={{ flexDirection: 'column', top: -80, left: -17 }}>
            <View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  const renderItem = ({ item, index }) => {
    return(
    <View style={{ paddingHorizontal: 20, paddingVertical: 10,flexDirection:'row' }} >
      <View>
      <Image source={{uri:item.product_image}} style={{width:100,height:100,borderRadius:20}}/>
      </View>
      <View>
      <Text style={{ fontSize: 16, color: "white" }}>
        {item.product_name}
      </Text>
      <Text style={{color:'white'}}>{item.description}</Text>
      </View>
    </View>


)  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
  };
const list=datalist.map((item)=>{
  return (
    <View style={styles.favorite_shadow} >
    <Image source={{ uri: item.product_image }} style={{ width: 80, height: 80, borderRadius: 10, alignSelf: 'center', padding: 10 }} />
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={{ flexDirection: 'column', width:120, top: -60 }}>
        <Text style={{ fontWeight: '700', fontSize: 20, color: 'black', alignSelf: 'center',justifyContent:'center',top:50 }}>{item.product_name}</Text>
        <Text style={{ fontSize: 15, color: 'black', top: 20, left: 20,top:60 }}>{item.description}</Text>
      </View>
      <View style={{ flexDirection: 'column', top: -80, left: -17 }}>
        <View>
        </View>
      </View>
    </View>
  </View>
  )
})
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <View style={styles.modal}>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#212F3D" }}>
            User name : {user_name}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#212F3D" }}>
            Email : {email}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#212F3D" }}>
            Address : {address}
          </Text>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ fontSize: 16, color: "#212F3D" }}>
            Phone : {phone}
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={styles.modal2}>
            <FlatList
              data={datalist}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
            {/* <FlatList
            data={datalist}
            keyExtractor={(item) => Math.random()}
            renderItem={renderItem2}
          /> */}
        
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 80,
}}
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
    flexDirection: "column",
  },
  modal2: {
    height: 500,
    width: 300,
    backgroundColor: "orange",
    borderRadius: 10,
    flexDirection: "column",
  },
});