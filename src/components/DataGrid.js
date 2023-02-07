import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from "react-native";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { DataGrid } from "@mui/x-data-grid";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";
import ProductModal from "./ProductModal";
import UserModal from "./UserModal";
import CategoryModal from "./CategoryModal";
import { UserContext } from "../../firebaseCon/UserContext";
import { ProductContext } from "../../firebaseCon/ProductCon";
import { async } from "@firebase/util";

function GetData(props) {
  if (props.myType == 1) {
    return DataProduct();
  } else if (props.myType == 2) {
    return DataUser();
  } else if (props.myType == 3) {
    return DataCategory();
  } else if (props.myType == 4) {
    return DataRevenue();
  } else {
    console.log("Dont have data !");
  }
}

function DataProduct(props) {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const { addProduct, removePro,data_pd,setdata_Pd ,setUppro,setdata_user,data_user} = useContext(ProductContext);
  const loadData = async () => {
    await onValue(ref(getDatabase(), "Products"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeModalVisible = (bool,id) => {
    setShowModal(bool);
    setUppro(id);
  };

  const removeProduct = async (id_pd) => {
    await removePro(id_pd);
    loadData();
  };

  const columns = [
    { field: "Product_id", headerName: "ID", width: 30 },
    { field: "Product_name", headerName: "Product Name", width: 250 },
    { field: "Category_id", headerName: "Category", width: 150 },
    { field: "Sale", headerName: "Sale", width: 150 },
    { field: "Import_Date", headerName: "Import_date", width: 150 },
    { field: "Quantity", headerName: "Quantity", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (cellValues) => {
        return (
          <View style={styles.containeredit}>
            <TouchableOpacity style={styles.buttonEdit}onPress={() => { changeModalVisible(true,cellValues.id),setdata_Pd(cellValues.row)}}>
              <Image
                style={styles.buttonEditImg}
                source={require("../../assets/img/edit.png")}
              />
              <Text style={styles.buttonEditText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={() => removeProduct(cellValues.id)}
            >
              <Image
                style={styles.buttonTrash}
                source={require("../../assets/img/trashicon.jpg")}
              />
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];

  const rows = data.map((row) => ({
    id: row.Product_id,
    product_picture:row.Product_picture,
    Product_id:row.Product_id,
    Product_name: row.Product_name,

    Category_id: row.Category_id,
    Sale: row.Sale,
    Import_Date: row.Import_Date,
    Quantity: row.Quantity,
    price: row.price,
    Description:row.Description

  }));

  return (
    <div
      style={{
        height: "95%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      ></DataGrid> 
      <Modal
        animationType="none"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          changeModalVisible(false);
        }}
      >
        <ProductModal
          changeModalVisible={changeModalVisible}
        />
      </Modal>
    </div>
  );
}

function DataUser() {

  const [showModal, setShowModal] = useState(false);

  const { removeUser, updateUser, setUpuser,setData_user,Data_user } = useContext(UserContext);

  const [refreshing, setRefreshing] = useState(false);

  const [us_id, setus_id] = useState("");

  const changeModalVisible = (bool, us) => {
    setShowModal(bool);
    setUpuser(us);
  };

  const removeUser_id = async (us_id) => {
    await removeUser(us_id);
    loadData();
  };

  const [data, setData] = useState([]);

  const loadData = async () => {
    await onValue(ref(getDatabase(), "User"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  };

  useEffect(() => {
    loadData();
    onRefresh();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setRefreshing(false);
  };

  const columns = [
    { field: "User_id", headerName: "ID", width: 30 },
    { field: "User_name", headerName: "User_name", width: 250 },
    { field: "Birth", headerName: "Birthday", width: 150 },
    { field: "Email", headerName: "Email", width: 150 },
    { field: "Address", headerName: "Address", width: 150 },
    { field: "Phone_number", headerName: "Phone", width: 150 },
    { field: "Money", headerName: "Money", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (cellValues) => {
        return (
          <View style={styles.containeredit}>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={() => {changeModalVisible(true),setData_user(cellValues.row)}}
            >
              <Image
                style={styles.buttonEditImg}
                source={require("../../assets/img/info.png")}
              />
              <Text style={styles.buttonEditText}>Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={() => removeUser_id(cellValues.id)}
            >
              <Image
                style={styles.buttonTrash}
                source={require("../../assets/img/trashicon.jpg")}
              />
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];
const rows=data.map((row) => ({
  User_id: row.User_id,
  User_name: row.User_name,
  Birth: row.Birth,
  Email: row.Email,
  Address: row.Address,
  Phone_number: row.Phone_number,
  Money: row.Money,
  id: row.User_id,
}))
  return (
    <div
      style={{
        height: "95%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      ></DataGrid>
      <Modal
        animationType="none"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          changeModalVisible(false);
        }}
      >
        <UserModal
          changeModalVisible={changeModalVisible}

        />
      </Modal>
    </div>
  );
}

function DataCategory() {

  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);

  const { addProduct, removePro, setUppro } = useContext(ProductContext);

  const loadData = async () => {
    await onValue(ref(getDatabase(), "Category"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const changeModalVisible = (bool, id) => {
    setShowModal(bool);
    setUppro(id);
  };

  const removeProduct = async (id_pd) => {
    await removePro(id_pd);
    loadData();
  };

  const columns = [
    { field: "Category_id", headerName: "ID", width: 30 },
    { field: "Category_name", headerName: "Category Name", width: 250 },
    {
      field: "edit",
      headerName: "Edit",
      renderCell: (cellValues) => {
        return (
          <View style={styles.containeredit}>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={() => { changeModalVisible(true) }}
            >
              <Image
                style={styles.buttonEditImg}
                source={require("../../assets/img/edit.png")}
              />
              <Text style={styles.buttonEditText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonEdit}
              onPress={() => removeProduct(cellValues.id)}
            >
              <Image
                style={styles.buttonTrash}
                source={require("../../assets/img/trashicon.jpg")}
              />
            </TouchableOpacity>
          </View>
        );
      },
    },
  ];

  const rows = data.map((row) => ({
    id: row.Category_id,
    Category_id: row.Category_id,
    Category_name: row.Category_name,
  }));

  return (
    <div
      style={{
        height: "95%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      ></DataGrid>
      <Modal
        animationType="none"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          changeModalVisible(false);
        }}
      >
        <CategoryModal
          changeModalVisible={changeModalVisible}
        />
      </Modal>
    </div>
  );
}
function DataRevenue() {
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState([]);
  const [dt_cart, setdt_cart] = useState("");
  const [formComp, setFormComp] = useState([]);

  const loadData = async () => {
    var tam = [];

    onValue(ref(getDatabase(), "Products"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });

    onValue(ref(getDatabase(), "Detail_cart"), (snapshot) => {
      setdt_cart(Object.values(snapshot.val()));
      try{
        Object.values(snapshot.val()).forEach((element) => {
          if (element.Status == "false" || element.Status == "Canceled") {
          } else {
            Object.values(element.Product_id).forEach((kol) => {
              let check = 0;
              if (tam.length == 0) {
                tam.push({
                  id_pd: kol.id_pd,
                  Quantity: kol.Quantity,
                  Total_price: kol.price,
                });
              } else {
                for (var i = 1; i <= tam.length; i++) {
                  if (kol.id_pd == tam[i - 1].id_pd) {
                    tam[i - 1].Quantity =
                      parseInt(tam[i - 1].Quantity) + parseInt(kol.Quantity);
                    tam[i - 1].Total_price =
                      parseInt(tam[i - 1].Total_price) + parseInt(kol.price);
  
                    check = 0;
                    break;
                  } else {
                    check = 1;
                  }
                }
                if (check == 1) {
                  tam.push({
                    id_pd: kol.id_pd,
                    Quantity: kol.Quantity,
                    Total_price: kol.price,
                  });
                }
              }
            });
          }
        });
      }catch(error){
        console.log(error);
      }
      
    });

    setFormComp(tam);
  };
  const loadName = async (id) => {
    for (var j = 0; j <= data.length; i++) {
      if (id == data[j].Product_id) {
        return data[j].Product_name;
      }
    }
  };
  useEffect(() => {
    loadData();

    console.log(data.length, ">>>>>>>>>>>>>data");
    console.log(formComp.length, "<<<<<<<<<<<<<<<<formcomp");
  }, []);

  const columns = [
    { field: "Product_id", headerName: "ID", width: 30 },
    { field: "Product_name", headerName: "Product Name", width: 250 },
    { field: "quantity_sold", headerName: "Quantity Sold", width: 150 },
    { field: "total_revenue", headerName: "Total Revenue", width: 150 },
  ];

  const rows = formComp.map((row) => ({
    id: row.id_pd,
    Product_id: row.id_pd,
    Product_name: "Xiaomi",
    quantity_sold: row.Quantity,
    total_revenue: row.Total_price,
  }));

  return (
    <div
      style={{
        height: "95%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        initialState={{
          sorting: {
            sortModel: [{ field: "total_revenue", sort: "desc" }],
          },
        }}
      ></DataGrid>
    </div>
  );
}

export default GetData;

const styles = StyleSheet.create({
  containeredit: {
    flexDirection: "row",
  },
  buttonEdit: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonEditImg: {
    width: 12,
    height: 12,
    margin: 10,
  },
  buttonTrash: {
    width: 18,
    height: 18,
    margin: 10,
  },
  buttonEditText: {
    color: "blue",
  },
});
