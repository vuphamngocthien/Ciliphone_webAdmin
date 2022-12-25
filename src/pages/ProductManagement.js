import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import GetData from '../components/DataGrid';
import React, { useState, useEffect } from 'react';
import DialogAddProduct from '../components/DialogAddProduct';

const type = 1;

export default function ProductManagement(props) {

  const [type, setType] = useState(1);


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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
              <TouchableOpacity onPress={() => {props.navigation.navigate('Dashboard')}}><Text style={styles.dashboardText}>Dashboard</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.userManagementContainer}>
            <Image
              style={styles.userManagementImg}
              source={require("../../assets/img/group.png")}
            ></Image>
            <View style={styles.userManagementTextContainer}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('UserManagement')}}><Text style={styles.userManagementText}>User Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.categoryManagementContainer}>
            <Image
              style={styles.categoryManagementImg}
              source={require("../../assets/img/options.png")}
            ></Image>
            <View style={styles.categoryManagementTextContainer}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('CategoryManagement')}}><Text style={styles.categoryManagementText}>Category Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.productManagementContainer}>
            <Image
              style={styles.productManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.productManagementTextContainer}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('ProductManagement')}}><Text style={styles.productManagementText}>Product Management</Text></TouchableOpacity>
            </View>
          </View>
          <View style={styles.invoiceManagementContainer}>
            <Image
              style={styles.invoiceManagementImg}
              source={require("../../assets/img/trolley.png")}
            ></Image>
            <View style={styles.invoiceManagementTextContainer}>
              <TouchableOpacity onPress={() => {props.navigation.navigate('InvoiceManagement')}}><Text style={styles.invoiceManagementText}>Invoice Management</Text></TouchableOpacity>
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
          <Image style={styles.dropdownImg} source={require('../../assets/img/down-filled-triangular-arrow.png')}></Image>
          <Image style={styles.avatarImg} source={require('../../assets/img/avataradmin.png')}></Image>
          <View style={styles.hiTextContainer}>
            <Text style={styles.hiText}>Hi, Luan</Text>
          </View>
          <Image style={styles.usaImg} source={require('../../assets/img/usa.png')}></Image>
          <Image style={styles.notificationImg} source={require('../../assets/img/notification.png')}></Image>
          <Image style={styles.openSideImg} source={require('../../assets/img/menu.png')}></Image>
        </View>
        <View style={styles.mainPage}>
          <View style={styles.routes}>
            <Image style={styles.routesImg} source={require('../../assets/img/dashboard.png')}></Image>
            <View style={styles.routesTextContainer}>
              <Text style={styles.routesText}>Dashboard / Product Management</Text>
            </View>
            <TouchableOpacity style={styles.buttonAdd} onPress={handleClickOpen}>
              <Image style={styles.buttonAddImg} source={require('../../assets/img/plus.png')} />
              <Text style={styles.buttonAddText}>New</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tableContainer}>
            <GetData myType={type}></GetData>
            <DialogAddProduct open={open}/>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  sideLeft: {
    backgroundColor: '#D9D9D9',
    width: 250,
    height: '100%',
    flexDirection: 'column',
    marginLeft: 0,
  },
  appNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
  },
  sideMenu: {
    justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 30,
  },
  dashboardContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  dashboardImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  dashboardTextContainer: {

  },
  dashboardText: {
    fontSize: 16
  },
  userManagementContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  userManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  userManagementTextContainer: {

  },
  userManagementText: {
    fontSize: 16
  },
  categoryManagementContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  categoryManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  categoryManagementTextContainer: {

  },
  categoryManagementText: {
    fontSize: 16
  },
  productManagementContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  productManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  productManagementTextContainer: {

  },
  productManagementText: {
    fontSize: 16
  },
  invoiceManagementContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  invoiceManagementImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  invoiceManagementTextContainer: {

  },
  invoiceManagementText: {
    fontSize: 16
  },
  searchContainer: {
    margin: 20,
    flexDirection: 'row'
  },
  searchImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  searchTextContainer: {

  },
  searchText: {
    fontSize: 16
  },
  themeContainer: {
    margin: 20,
    flexDirection: 'row',
    marginTop: 180
  },
  themeImg: {
    width: 24,
    height: 24,
    marginRight: 10
  },
  themeTextContainer: {

  },
  themeText: {
    fontSize: 16
  },
  themeSwitchImg: {
    width: 24,
    height: 24,
    marginLeft: 70
  },
  sideRight: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#D9D9D9',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  openSideImg: {
    width: 24,
    height: 24,
    marginRight: 980
  },
  notificationImg: {
    width: 24,
    height: 24,
    marginRight: 50
  },
  usaImg: {
    width: 24,
    height: 24,
    marginRight: 50
  },
  hiTextContainer: {
    marginRight: 5
  },
  hiText: {
    textSize: 16,
    textAlign: 'center',
  },
  avatarImg: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  dropdownImg: {
    width: 12,
    height: 12,
    marginRight: 20
  },
  mainPage: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  routes: {
    flexDirection: 'row',
    margin: 10,
  },
  routesImg: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  routesTextContainer: {

  },
  routesText: {

  },
  tableContainer: {
    width: '100%',
    height: '100%',
  },
  buttonAdd: {
    borderBottomWidth: 1,
    marginLeft: 900,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonAddImg: {
    width: 16,
    height: 16,
    marginRight: 10
  },
  buttonAddText: {
    color: 'blue'
  },
});
