import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import GetData from '../components/DataGrid';
import React, { useState, useEffect, useContext } from "react";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import Material from "react-native-vector-icons/MaterialIcons";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChartac,
} from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const type = 4;

const chartConfig = {
  backgroundGradientFrom: "black",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "black",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 3, // optional
    },
  ],
  //legend: ["Rainy Days"] // optional
};

const Dashboard = (props) => {
  // const { getSold } = useContext(ProductContext);
  const [type, setType] = useState(4);
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(props.open);
  const [productSold, setProductSold] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [Total_cm, setTotal_cm] = useState("");
  const [aveStar, setaveStar] = useState("");
  var c = 0;
  var s = 0;
  var i = 0;
  var to = 0;
  const loadData = async () => {
    await onValue(ref(getDatabase(), "Cart"), (snapshot) => {
      setCart(Object.values(snapshot.val()));

      Object.values(snapshot.val()).forEach((element) => {
        i += element.Total_price;

        setProductSold(i);
      });
    });
    onValue(ref(getDatabase(), "Comment"), (snapshot) => {
      Object.values(snapshot.val()).forEach((element) => {
        c += element.star;
        to += 1;
        setTotal_cm(to);
        setaveStar(c / to);
      });
    });
  };
  const loadpro = async () => {
    var item = 0;
    var item2 = [3, 1, 2];
    const res = await loadData();

    for (var i = 1; i <= res.length; i++) {
      //   console.log(res[i], "&&&&&&&&&7");
    }
  };

  useEffect(() => {
    loadData();
    onRefresh();
  }, []);
  const onRefresh = () => {
    setRefreshing(true);

    setRefreshing(false);
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
              <TouchableOpacity onPress={() => { props.navigation.navigate('Dashboard') }}><Text style={styles.dashboardText}>Dashboard</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.userManagementContainer}>
            <Image
              style={styles.userManagementImg}
              source={require("../../assets/img/group.png")}
            ></Image>
            <View style={styles.userManagementTextContainer}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('UserManagement') }}><Text style={styles.userManagementText}>User Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.categoryManagementContainer}>
            <Image
              style={styles.categoryManagementImg}
              source={require("../../assets/img/options.png")}
            ></Image>
            <View style={styles.categoryManagementTextContainer}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('CategoryManagement') }}><Text style={styles.categoryManagementText}>Category Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.productManagementContainer}>
            <Image
              style={styles.productManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.productManagementTextContainer}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('ProductManagement') }}><Text style={styles.productManagementText}>Product Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.invoiceManagementContainer}>
            <Image
              style={styles.invoiceManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.invoiceManagementTextContainer}>
              <TouchableOpacity onPress={() => { props.navigation.navigate('InvoiceManagement') }}><Text style={styles.invoiceManagementText}>Invoice Management</Text></TouchableOpacity>
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
              <Text style={styles.routesText}>Dashboard</Text>
            </View>
          </View>
          <View style={styles.analytics}>
            <View style={{ margin: 10, flexDirection: "row", marginLeft: 55 }}>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    Total Access
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>1.500.000</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    New User
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>134</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    Revenue
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>
                    {productSold}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    New Product
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>32</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    Total Comments
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>{Total_cm}</Text>
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#D9D9D9",
                  width: 170,
                  height: 120,
                  borderRadius: 10,
                  marginRight: 30,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Material
                    name="language"
                    style={{ color: "red", fontSize: 24, marginRight: 5 }}
                  />
                  <Text
                    style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}
                  >
                    Average Rating
                  </Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={{ color: "red", fontSize: 24 }}>
                    {aveStar} / 5
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row", display: "flex", margin: 10 }}>
              <BarChart
                style={{flex: 1}}
                data={data}
                width={600}
                height={400}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
              />
              <View style={{width: 600, height: 420, flex: 1}}>
                <GetData myType={type}></GetData>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

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
});
