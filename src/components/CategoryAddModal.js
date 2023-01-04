import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Image
} from "react-native";

const WIDTH = 300;
const HEIGHT_MODAL = 350;

const CategoryAddModal = (props) => {

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
    //data.map((pro) => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
            <View style={styles.modal}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center", padding: 20}}>
                    <Image source={require("../../assets/img/avataradmin.png")} style={{ height: 75, width: 75 }} />
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 20, paddingBottom: 20 }}>
                    <Text style={{ fontSize: 16, color: "white", paddingBottom: 20 }}>Category Name</Text>
                    <TextInput style={{ width: 260, height: 30, backgroundColor: "white", borderWidth: 1, borderRadius: 5 }}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ justifyContent: "center", alignItems: "center", paddingTop: 50, paddingRight: 70 }}
                        onPress={() => closeModal(false)}
                    >
                        <Text style={{ color: "blue", fontSize: 24, fontWeight: "bold" }}>
                            Add
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ justifyContent: "center", alignItems: "center", paddingTop: 50 }}
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
}

export default CategoryAddModal;

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