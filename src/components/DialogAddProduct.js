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
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { Dropdown } from "react-native-element-dropdown";
import { ProductContext } from "../../firebaseCon/ProductCon";
import axios from "axios";

export default function DialogAddProduct(props) {
  const [open, setOpen] = useState(props);

  const { addProduct, removePro, upPro, setUppro } = useContext(ProductContext);
  const [name, setName] = useState("");
  const [Category, setCategory] = useState("");
  const [Sale, setSale] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(ref(getDatabase(), "Category"), (snapshot) => {
      setData(Object.values(snapshot.val()));
    });
  }, []);
  const [value, setValue] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const addPro = async () => {
    console.log("da them product", name);
    await addProduct(value, "asda", name, "asda", Quantity, Sale, Price, upPro);
  };
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          Category text
        </Text>
      );
    }
    return null;
  };
  const kol = async () => {
    setOpen(false);
  };
  return (
    <Dialog open={props.open} style={styles.dialog}>
      <DialogTitle style={styles.dialogTitleContainer}>
        <Text style={styles.dialogTitleText}>Add Form</Text>
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
                //   console.log(item.value, "//Q^^^^^^^^^^^^^^^");
                setIsFocus(false);
              }}
            />
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
        <TouchableOpacity onPress={addPro} style={styles.buttonUpdate}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonCancel} onPress={kol}>
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
