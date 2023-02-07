import React, { useState, useEffect,useContext } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { ProductContext } from "../../firebaseCon/ProductCon";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const WIDTH = 400;
const HEIGHT_MODAL = 600;

const ProductModal = (props) => {

  const [dt_pd, setDt_pd] = useState(props.detailproduct);
  const [dt, setDt] = useState(props.detail);
  const [user, setUser] = useState(props.user);
  const [data, setData] = useState([]);
  const [dtData, setdtData] = useState([]);
  const [pd, setpd] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const [user_name, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [phone, setUserphone] = useState("");

  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Sale, setSale] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const {data_pd,updatePro,upPro}=useContext(ProductContext)
  const loadData = async () => {
    for (var i = 1; i < Object.values(dt["Product_id"]); i++) {
      if (data[i - 1].dt_id == dt_pd) {
        setdtData(data[i - 1]);
        setpd(Object.values(data[i - 1].Product_id));
        break;
      }
    }
  };
  const updateProduct = async () => {
    await updatePro(Category,description, name, "asda", Quantity, Sale, Price, upPro);
    closeModal(false);
  };
  const loadUserData = async () => { };

    useEffect(() => {
      onValue(ref(getDatabase(), "Category"), (snapshot) => {
        setData(Object.values(snapshot.val()));
      });
    }, []);

  const closeModal = (bool) => {
    props.changeModalVisible(bool);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
      <View style={styles.modal}>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <Image source={{uri:data_pd.product_picture}} style={{ height: 75, width: 75 }} />
          <View style={{ flexDirection: 'column' }}>
            <View style={{ marginLeft: 20 }}>
              <TextInput style={{ fontSize: 24, color: "white" }} onChangeText={setName} defaultValue={data_pd.Product_name}></TextInput>
            </View>
            <View style={{ marginLeft: 20 }}>
              <TextInput style={{ fontSize: 24, color: "brown" }}  onChangeText={setPrice} defaultValue={data_pd.price}></TextInput>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Category</Text>
        <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="Category_name"
              valueField="Category_id"
              placeholder={!isFocus ? "Select item" : "..."}
              searchPlaceholder="Search..."
              value={data_pd.Category_name}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setCategory(item.Category_name);
                setIsFocus(false);
              }}
            />
         </View> 
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }} >Quantity</Text>
          <TextInput  style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={text =>setQuantity(text)} defaultValue={data_pd.Quantity}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }} >Sale</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}onChangeText={setSale} defaultValue={data_pd.Sale}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }} >Description</Text>
          <TextInput multiline={true} style={{ width: 360, height: 70, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setDescription} defaultValue={data_pd.Description}></TextInput>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{ backgroundColor: '#FF9138', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 80, marginRight: 70}}
            onPress={updateProduct}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ backgroundColor: '#FF9138', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 80 }}
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

export default ProductModal;

const styles = StyleSheet.create({
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH,
    paddingTop: 10,
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    flexDirection: 'column'
  },
  dropdown:{
    borderColor:'black',
    borderRadius:1,
    borderColor:'black',
    borderWidth:1,
    borderRadius:6,
    marginRight:20,
    backgroundColor:'white'
  }
});