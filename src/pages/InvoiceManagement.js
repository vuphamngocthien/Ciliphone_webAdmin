import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import Material from "react-native-vector-icons/MaterialIcons";
import DetailModal from "../components/DetailModal";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
const listStatusTitle = [
  { status: "All" },
  { status: "Canceled" },
  { status: "Process" },
  { status: "Delivered" },
];

const InvoiceManagement = (props) => {
  const [status, setStatus] = useState("All");

  const [refreshing, setRefreshing] = useState(false);

  const [data, setData] = useState([]);

  const [user, setUser] = useState([]);
  const [product, setProduct] = useState([]);

  const loadData = async () => {
    await onValue(ref(getDatabase(), "Detail_cart"), (snapshot) => {
      setData(Object.values(snapshot.val()));
      setDatalist(Object.values(snapshot.val()));
    });
    onValue(ref(getDatabase(), "Products"), (snapshot) => {
      setProduct(Object.values(snapshot.val()));
    });
  };

  const [datalist, setDatalist] = useState([]);

  useEffect(() => {
    loadData();
    onValue(ref(getDatabase(), "User"), (snapshot) => {
      setUser(Object.values(snapshot.val()));
    });
    setDatalist(data);
    onRefresh();
    setStatusFilter(status);
  }, [data.length, datalist.length]);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const setStatusFilter = (status) => {
    if (status != "All") {
      setDatalist([...data.filter((e) => e.Status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  const renderItem = ({ item, index }) => {
    return item.Status == "false" ? null : (
      <View
        key={index.dt_id}
        style={{ flexDirection: "row", paddingVertical: 15 }}
      >
        <View style={{ padding: 10 }}>
          <Material name="" style={{ width: 50, height: 50 }}></Material>
        </View>
        <View
          style={{ flex: 2, paddingHorizontal: 10, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            {item.Innitiated_date}
          </Text>
        </View>
        <View
          style={{ flex: 2, paddingHorizontal: 5, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Price: {item.Price}
          </Text>
        </View>
        <View
          style={[
            styles.itemStatus,
            { backgroundColor: item.status === "All" ? "#e5848e" : "#69c080" },
          ]}
        >
          <Text>{item.Status}</Text>
        </View>
        <TouchableOpacity
          style={[
            styles.itemStatus,
            { backgroundColor: item.status === "All" ? "#e5848e" : "#blue" },
          ]}
          onPress={() => {
            changeModalVisible(true);
            setdt_id(item.dt_id);
            setdt(item);
          }}
        >
          <Text>Detail</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [dt_id, setdt_id] = useState("");
  const [dt, setdt] = useState({});

  const changeModalVisible = (bool) => {
    setShowModal(bool);
  };
  const getProduct_detail = (dt) => {
    var arr = Object.values(dt["Product_id"]);
    var tam = [];
    for (var i = 1; i <= arr.length; i++) {
      for (var j = 1; j <= product.length; j++) {
        if (product[j - 1].Product_id == arr[i - 1].id_pd) {
          tam.push({
            product_image: product[j - 1].Product_picture,
            product_name: product[j - 1].Product_name,
            description: product[j - 1].Description,
          });
          console.log(tam.length);
        }
      }
    }
    return tam;
  };

  const separator = () => {
    return <View style={{ height: 1, backgroundColor: "#f1f1f1" }} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.sideLeft}>
        <View style={styles.appNameContainer}>
          <Text style={styles.appName}>Ciliphone</Text>
        </View>
        <View style={styles.sideMenu}>
          <View style={styles.dashboardContainer}>
            <Image
              style={styles.dashboardImg}
              source={require("../../assets/img/dashboard.png")}
            ></Image>
            <View style={styles.dashboardTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Dashboard");
                }}
              >
                <Text style={styles.dashboardText}>Dashboard</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.userManagementContainer}>
            <Image
              style={styles.userManagementImg}
              source={require("../../assets/img/group.png")}
            ></Image>
            <View style={styles.userManagementTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("UserManagement");
                }}
              >
                <Text style={styles.userManagementText}>User Management</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.categoryManagementContainer}>
            <Image
              style={styles.categoryManagementImg}
              source={require("../../assets/img/options.png")}
            ></Image>
            <View style={styles.categoryManagementTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("CategoryManagement");
                }}
              >
                <Text style={styles.categoryManagementText}>
                  Category Management
                </Text>
              </TouchableOpacity>
</View>
          </View>
          <View style={styles.productManagementContainer}>
            <Image
              style={styles.productManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.productManagementTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("ProductManagement");
                }}
              >
                <Text style={styles.productManagementText}>
                  Product Management
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.invoiceManagementContainer}>
            <Image
              style={styles.invoiceManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.invoiceManagementTextContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("InvoiceManagement");
                }}
              >
                <Text style={styles.invoiceManagementText}>
                  Invoice Management
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.themeContainer}>
            <Image
              style={styles.themeImg}
              source={require("../../assets/img/light-bulb.png")}
            ></Image>
            <View style={styles.themeTextContainer}>
              <Text style={styles.themeText}>Switch Theme</Text>
            </View>
            <Image
              style={styles.themeSwitchImg}
              source={require("../../assets/img/on-button.png")}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.sideRight}>
        <View style={styles.header}>
          <Image
            style={styles.dropdownImg}
            source={require("../../assets/img/down-filled-triangular-arrow.png")}
          ></Image>
          <Image
            style={styles.avatarImg}
            source={require("../../assets/img/avataradmin.png")}
          ></Image>
          <View style={styles.hiTextContainer}>
            <Text style={styles.hiText}>Hi, Luan</Text>
          </View>
          <Image
            style={styles.usaImg}
            source={require("../../assets/img/usa.png")}
          ></Image>
          <Image
            style={styles.notificationImg}
            source={require("../../assets/img/notification.png")}
          ></Image>
          <Image
            style={styles.openSideImg}
            source={require("../../assets/img/menu.png")}
          ></Image>
        </View>
        <View style={styles.mainPage}>
          <View style={styles.routes}>
            <Image
              style={styles.routesImg}
              source={require("../../assets/img/dashboard.png")}
            ></Image>
<View style={styles.routesTextContainer}>
              <Text style={styles.routesText}>
                Dashboard / Invoice Management
              </Text>
            </View>
          </View>
          <View
            style={{ flex: 1, paddingHorizontal: 10, justifyContent: "center" }}
          >
            <View style={styles.listStatus}>
              {listStatusTitle.map((e) => (
                <TouchableOpacity
                  style={[
                    styles.btnStatus,
                    status === e.status && styles.btnActive,
                  ]}
                  onPress={() => setStatusFilter(e.status)}
                >
                  <Text
                    style={[
                      styles.btnText,
                      status === e.status && styles.textActive,
                    ]}
                  >
                    {e.status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <FlatList
              data={datalist}
              keyExtractor={(e, dt_id) => dt_id.toString()}
              renderItem={renderItem}
              ItemSeparatorComponent={separator}
            />
            <Modal
              animationType="none"
              transparent={false}
              visible={showModal}
              onRequestClose={() => {
                changeModalVisible(false);
              }}
            >
              <DetailModal
                changeModalVisible={changeModalVisible}
                detailproduct={dt_id}
                detail={dt}
                user={user}
                product={product}
                product_detail={() => getProduct_detail(dt)}
              />
            </Modal>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InvoiceManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  sideLeft: {
    backgroundColor: "#D9D9D9",
    width: 250,
    height: "100%",
    flexDirection: "column",
    marginLeft: 0,
  },
  appNameContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
  },
  sideMenu: {
    justifyContent: "center",
    //alignItems: 'center',
    marginTop: 30,
  },
  dashboardContainer: {
    margin: 20,
    flexDirection: "row",
  },
  dashboardImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  dashboardTextContainer: {},
  dashboardText: {
    fontSize: 16,
  },
  userManagementContainer: {
    margin: 20,
    flexDirection: "row",
  },
  userManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  userManagementTextContainer: {},
  userManagementText: {
    fontSize: 16,
  },
  categoryManagementContainer: {
    margin: 20,
    flexDirection: "row",
  },
  categoryManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
categoryManagementTextContainer: {},
  categoryManagementText: {
    fontSize: 16,
  },
  productManagementContainer: {
    margin: 20,
    flexDirection: "row",
  },
  productManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  productManagementTextContainer: {},
  productManagementText: {
    fontSize: 16,
  },
  invoiceManagementContainer: {
    margin: 20,
    flexDirection: "row",
  },
  invoiceManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  invoiceManagementTextContainer: {},
  invoiceManagementText: {
    fontSize: 16,
  },
  searchContainer: {
    margin: 20,
    flexDirection: "row",
  },
  searchImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchTextContainer: {},
  searchText: {
    fontSize: 16,
  },
  themeContainer: {
    margin: 20,
    flexDirection: "row",
    marginTop: 180,
  },
  themeImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  themeTextContainer: {},
  themeText: {
    fontSize: 16,
  },
  themeSwitchImg: {
    width: 24,
    height: 24,
    marginLeft: 70,
  },
  sideRight: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: 50,
    flexDirection: "row",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  openSideImg: {
    width: 24,
    height: 24,
    marginRight: 980,
  },
  notificationImg: {
    width: 24,
    height: 24,
    marginRight: 50,
  },
  usaImg: {
    width: 24,
    height: 24,
    marginRight: 50,
  },
  hiTextContainer: {
    marginRight: 5,
  },
  hiText: {
    textSize: 16,
    textAlign: "center",
  },
  avatarImg: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  dropdownImg: {
    width: 12,
    height: 12,
    marginRight: 20,
  },
  mainPage: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  routes: {
    flexDirection: "row",
    margin: 10,
  },
  routesImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  routesTextContainer: {},
  routesText: {},
  listStatus: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },
  btnStatus: {
    width: 250,
    flexDirection: "row",
    borderWidth: 0.5,
    borderColor: "#EBEBEB",
    padding: 10,
    justifyContent: "center",
  },
  btnText: {
    fontSize: 16,
  },
  btnActive: {
    backgroundColor: "#E6838D",
  },
  textActive: {
    color: "#fff",
  },
  itemStatus: {
    backgroundColor: "green",
    paddingHorizontal: 6,
    justifyContent: "center",
    right: 12,
    width: 100,
    alignItems: "center",
  },
});