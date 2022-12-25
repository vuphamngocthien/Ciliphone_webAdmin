import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function Login(props) {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [password, setPassword] = useState([]);
  useEffect(() => {
    onValue(ref(getDatabase(), "User"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  }, []);
  const login = () => {
    for (var i = 0; i <= data.length; i++) {
      if (name == data[i].Email && password == data[i].Password) {
        alert("dang nhap thanh cong");
      } else {
        return;
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.reactAdminContainer}>
          <Text style={styles.reactAdminText}>Ciliphone</Text>
          <View style={styles.formInputContainer}>
            <TextInput
              style={styles.inputUsername}
              onChangeText={setName}
              placeholder="Username"
            />
            <TextInput
              style={styles.inputPassword}
              onChangeText={setPassword}
              placeholder="Password"
            />
            <TouchableOpacity style={styles.btnLogin} onPress={login}>
              Sign In
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Image
          style={styles.githubImg}
          source={require("../../assets/img/github.png")}
        />
        <View style={styles.language}>
          <Text style={styles.vietnamese}>Vietnamese</Text>
          <Text style={styles.english}>English</Text>
          <Text style={styles.french}>French</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: 450,
    height: 250,
    backgroundColor: "#D9D9D9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  reactAdminContainer: {},
  reactAdminText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#1677FF",
    marginBottom: 30,
  },
  formInputContainer: {
    width: 300,
    height: 150,
  },
  inputUsername: {
    height: 30,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  inputPassword: {
    height: 30,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  btnLogin: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1677FF",
    borderRadius: 10,
    color: "#FFFFFF",
    marginTop: 20,
  },
  footer: {
    flexDirection: "row",
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  githubImg: {
    height: 24,
    width: 24,
    marginRight: 20,
  },
  language: {
    flexDirection: "row",
  },
  vietnamese: {
    marginRight: 20,
  },
  english: {
    marginRight: 20,
  },
  french: {
    marginRight: 20,
  },
});
