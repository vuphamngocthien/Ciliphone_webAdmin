import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ProductContext } from "../../firebaseCon/ProductCon";
import axios from "axios";

export default function DialogUpdateProduct(props) {
  const [open, setOpen] = useState(props);
  const [Pd_id, setpd_id] = useState(props);

  const { addProduct, removePro, updatePro } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Sale, setSale] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const updateProduct = async () => {
    console.log("da update", name);
    await updatePro(
      Category,
      "asda",
      name,
      "asda",
      Quantity,
      Sale,
      Price,
      "pd5"
    );
  };
  return (
    <Dialog open={props.open} style={styles.dialog}>
      <DialogTitle style={styles.dialogTitleContainer}>
        <Text style={styles.dialogTitleText}>Edit Form</Text>
      </DialogTitle>
      <DialogContent style={styles.dialogContent}>
        <View styles={styles.editContainer}>
          <View style={styles.editProductNameZone}>
            <View style={styles.editProductNameTextTitle}>
              <Image
                style={styles.editProductNameTextImg}
                source={require("../../assets/img/trolley.png")}
              ></Image>
              <Text style={styles.editProductNameText}>Product Name</Text>
            </View>
            <TextInput
              style={styles.editProductNameInput}
              onChangeText={setName}
            ></TextInput>
          </View>
          <View style={styles.editCategoryZone}>
            <View style={styles.editCategoryTextTitle}>
              <Image
                style={styles.editCategoryTextImg}
                source={require("../../assets/img/options.png")}
              ></Image>
              <Text style={styles.editCategoryText}>Category</Text>
            </View>
            <TextInput
              style={styles.editCategoryInput}
              onChangeText={setCategory}
            ></TextInput>
          </View>
          <View style={styles.editSaleZone}>
            <View style={styles.editSaleTextTitle}>
              <Image
                style={styles.editSaleTextImg}
                source={require("../../assets/img/sale.png")}
              ></Image>
              <Text style={styles.editSaleText}>Sale</Text>
            </View>
            <TextInput
              style={styles.editSaleInput}
              onChangeText={setSale}
            ></TextInput>
          </View>
          <View style={styles.editQuantityZone}>
            <View style={styles.editQuantityTextTitle}>
              <Image
                style={styles.editQuantityTextImg}
                source={require("../../assets/img/boxes.png")}
              ></Image>
              <Text style={styles.editQuantityText}>Quantity</Text>
            </View>
            <TextInput
              style={styles.editQuantityInput}
              onChangeText={setQuantity}
            ></TextInput>
          </View>
          <View style={styles.editPriceZone}>
            <View style={styles.editPriceTextTitle}>
              <Image
                style={styles.editPriceTextImg}
                source={require("../../assets/img/tag.png")}
              ></Image>
              <Text style={styles.editPriceText}>Price</Text>
            </View>
            <TextInput
              style={styles.editPriceInput}
              onChangeText={setPrice}
            ></TextInput>
          </View>
        </View>
      </DialogContent>
      <DialogActions>
        <TouchableOpacity onPress={updateProduct} style={styles.buttonUpdate}>
          <Text>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel}>
          <Text>Cancle</Text>
        </TouchableOpacity>
      </DialogActions>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  /*dialog: {
        width: 1000,
        height: 1000,
        justifyContent: 'center',
        alignItems: 'center',
    },*/
  dialogTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  dialogTitleText: {
    color: "blue",
  },
  dialogContent: {},
  editContainer: {
    width: 1000,
    height: 1000,
  },
  editProductNameZone: {
    width: 500,
  },
  editProductNameTextTitle: {
    flexDirection: "row",
  },
  editProductNameTextImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  editProductNameText: {
    marginBottom: 10,
    marginTop: 10,
  },
  editProductNameInput: {
    borderBottomWidth: 1,
    height: 30,
  },
  editCategoryZone: {
    width: 500,
  },
  editCategoryTextTitle: {
    flexDirection: "row",
  },
  editCategoryTextImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  editCategoryText: {
    marginBottom: 10,
    marginTop: 10,
  },
  editCategoryInput: {
    borderBottomWidth: 1,
    height: 30,
  },
  editSaleZone: {
    width: 500,
  },
  editSaleTextTitle: {
    flexDirection: "row",
  },
  editSaleTextImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  editSaleText: {
    marginBottom: 10,
    marginTop: 10,
  },
  editSaleInput: {
    borderBottomWidth: 1,
    height: 30,
  },
  editQuantityZone: {
    width: 500,
  },
  editQuantityTextTitle: {
    flexDirection: "row",
  },
  editQuantityTextImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  editQuantityText: {
    marginBottom: 10,
    marginTop: 10,
  },
  editQuantityInput: {
    borderBottomWidth: 1,
    height: 30,
  },
  editPriceZone: {
    width: 500,
  },
  editPriceTextTitle: {
    flexDirection: "row",
  },
  editPriceTextImg: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 10,
  },
  editPriceText: {
    marginBottom: 10,
    marginTop: 10,
  },
  editPriceInput: {
    borderBottomWidth: 1,
    height: 30,
  },
  buttonUpdate: {
    color: "red",
    margin: 10,
  },
  buttonCancel: {
    color: "red",
    margin: 10,
  },
});
