import React, { useState, useEffect,useContext } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { ProductContext } from "../../firebaseCon/ProductCon";
import { Dropdown } from "react-native-element-dropdown";

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
const HEIGHT_MODAL = 700;

const ProductAddModal = (props) => {

  const [dt_pd, setDt_pd] = useState(props.detailproduct);
  const [dt, setDt] = useState(props.detail);
  const [user, setUser] = useState(props.user);
  const [data, setData] = useState([]);
  const [dtData, setdtData] = useState([]);
  const [name, setName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [pd, setpd] = useState([]);
  const [value, setValue] = useState("");

  const { addProduct,upPro } = useContext(ProductContext);

  const [user_name, setUsername] = useState("");
  const [email, setUseremail] = useState("");
  const [phone, setUserphone] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Sale, setSale] = useState("");
  const [Price, setPrice] = useState("");
  const [image,setImage]=useState('');
  const [description,setDescription]=useState('');
  const loadData = async () => {
    for (var i = 1; i < Object.values(dt["Product_id"]); i++) {
      if (data[i - 1].dt_id == dt_pd) {
        setdtData(data[i - 1]);
        setpd(Object.values(data[i - 1].Product_id));
        break;
      }
    }
  };
  const addPro = async () => {
    await addProduct(value,description, name, image, Quantity, Sale, Price, upPro);
  };
  const loadUserData = async () => { };

    useEffect(() => {
      onValue(ref(getDatabase(), "Category"), (snapshot) => {
        setData(Object.values(snapshot.val()));
      });
    }, []);

  const closeModal = (bool) => {
    props.changeModalVisible(bool);
    console.log(bool);
  };
const handleAvater=(e)=>{
  const file=e.target.files[0];
  file.preview=URL.createObjectURL(file);
  setImage(file);
}
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
      <View style={styles.modal}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: 20 }}>
          <TouchableOpacity >
          {image &&(
            <Image source={image.preview} style={{ height: 75, width: 75,alignSelf:'center' }} />)}
          </TouchableOpacity>
          <input type='file' onChange={handleAvater}/>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Product Name</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setName}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Price</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setPrice}></TextInput>
        
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
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item) => {
                setValue(item.Category_id);
                setIsFocus(false);
              }}
            />
         </View> 
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Quantity</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setQuantity}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Sale</Text>
          <TextInput style={{ width: 360, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setSale}></TextInput>
        </View>
        <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
          <Text style={{ fontSize: 16, color: "white", paddingBottom: 5 }}>Description</Text>
          <TextInput multiline={true} style={{ width: 360, height: 70, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }} onChangeText={setDescription} ></TextInput>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={{ backgroundColor: '#FF9138', height: 40, width: 120, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20, marginRight: 70}}
            onPress={addPro}
          >
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Addddddd
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