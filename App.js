import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, FlatList, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import Material from 'react-native-vector-icons/MaterialIcons';
import DetailModal from './src/components/DetailModal';

const listStatusTitle = [
  { status: 'All'},
  { status: 'Canceled'},
  { status: 'Process'},
  { status: 'Delivered'},
]

const data = [
  {
    name: 'hd01',
    status: 'Canceled',
  },
  {
    name: 'hd02',
    status: 'Process',
  },
  {
    name: 'hd03',
    status: 'Canceled',
  },
  {
    name: 'hd04',
    status: 'Process',
  },
  {
    name: 'hd05',
    status: 'Process',
  },
  {
    name: 'hd06',
    status: 'Process',
  },
  {
    name: 'hd07',
    status: 'Delivered',
  },
  {
    name: 'hd08',
    status: 'Canceled',
  },
  {
    name: 'hd09',
    status: 'Process',
  },
  {
    name: 'hd10',
    status: 'Canceled',
  },
  {
    name: 'hd11',
    status: 'Process',
  },
  {
    name: 'hd12',
    status: 'Delivered',
  },
  {
    name: 'hd13',
    status: 'Delivered',
  },
  {
    name: 'hd14',
    status: 'Delivered',
  },
  {
    name: 'hd15',
    status: 'Canceled',
  },
]

export default function App(props) {

  const [status, setStatus] = useState('All');

  const [datalist, setDatalist] = useState(data);

  const setStatusFilter = status => {
    if (status != 'All') {
      setDatalist([...data.filter(e => e.status === status)])
    } else {
      setDatalist(data);
    }
    setStatus(status)
  }

  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={{flexDirection: 'row', paddingVertical: 15,}}>
        <View style={{padding: 10}}>
          <Material name='' style={{width: 50, height: 50,}}></Material>
        </View>
        <View style={{flex: 1, paddingHorizontal: 10, justifyContent: 'center',}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
        </View>
        <View style={[
          styles.itemStatus,
          {backgroundColor: item.status === 'All' ? '#e5848e' : '#69c080'}
          ]}>
          <Text>{item.status}</Text>
        </View>
        <TouchableOpacity style={[
          styles.itemStatus,
          {backgroundColor: item.status === 'All' ? '#e5848e' : '#blue'}
          ]}
          onPress={() =>{changeModalVisible(true)}}
          >
          <Text>Detail</Text>
        </TouchableOpacity>
      </View> 
    )
  }

  const [showModal, setShowModal] = useState(false);

  const changeModalVisible = (bool) => {
    setShowModal(bool);
  }

  const separator = () => {
    return <View style={{height: 1, backgroundColor: '#f1f1f1'}}/>
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.sideLeft}>
        <View style={styles.appNameContainer}>
          <Text style={styles.appName}>REACT ADMIN</Text>
        </View>
        <View style={styles.sideMenu}>
          <View style={styles.dashboardContainer}>
            <Image style={styles.dashboardImg} source={require('./assets/img/dashboard.png')}></Image>
            <View style={styles.dashboardTextContainer}>
              <Text style={styles.dashboardText}>Dashboard</Text>
            </View>
          </View>
          <View style={styles.userManagementContainer}>
            <Image style={styles.userManagementImg} source={require('./assets/img/group.png')}></Image>
            <View style={styles.userManagementTextContainer}>
              <Text style={styles.userManagementText}>User Management</Text>
            </View>
          </View>
          <View style={styles.categoryManagementContainer}>
            <Image style={styles.categoryManagementImg} source={require('./assets/img/options.png')}></Image>
            <View style={styles.categoryManagementTextContainer}>
              <Text style={styles.categoryManagementText}>Category Management</Text>
            </View>
          </View>
          <View style={styles.productManagementContainer}>
            <Image style={styles.productManagementImg} source={require('./assets/img/trolley.png')}></Image>
            <View style={styles.productManagementTextContainer}>
              <Text style={styles.productManagementText}>Product Management</Text>
            </View>
          </View>
          <View style={styles.invoiceManagementContainer}>
            <Image style={styles.invoiceManagementImg} source={require('./assets/img/bill.png')}></Image>
            <View style={styles.invoiceManagementTextContainer}>
              <Text style={styles.invoiceManagementText}>Invoice Management</Text>
            </View>
          </View>
          <View style={styles.searchContainer}>
            <Image style={styles.searchImg} source={require('./assets/img/search.png')}></Image>
            <View style={styles.searchTextContainer}>
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>
          <View style={styles.themeContainer}>
            <Image style={styles.themeImg} source={require('./assets/img/light-bulb.png')}></Image>
            <View style={styles.themeTextContainer}>
              <Text style={styles.themeText}>Switch Theme</Text>
            </View>
            <Image style={styles.themeSwitchImg} source={require('./assets/img/on-button.png')}></Image>
          </View>
        </View>
      </View>
      <View style={styles.sideRight}>
        <View style={styles.header}>
          <Image style={styles.dropdownImg} source={require('./assets/img/down-filled-triangular-arrow.png')}></Image>
          <Image style={styles.avatarImg} source={require('./assets/img/avataradmin.png')}></Image>
          <View style={styles.hiTextContainer}>
            <Text style={styles.hiText}>Hi, Luan</Text>
          </View>
          <Image style={styles.usaImg} source={require('./assets/img/usa.png')}></Image>
          <Image style={styles.notificationImg} source={require('./assets/img/notification.png')}></Image>
          <Image style={styles.openSideImg} source={require('./assets/img/menu.png')}></Image>
        </View>
        <View style={styles.mainPage}>
          <View style={styles.routes}>
            <Image style={styles.routesImg} source={require('./assets/img/dashboard.png')}></Image>
            <View style={styles.routesTextContainer}>
              <Text style={styles.routesText}>Dashboard</Text>
            </View>
          </View>
          <View style={{flex: 1, paddingHorizontal: 10, justifyContent: 'center'}}>
            <View style={styles.listStatus}>
              {
                listStatusTitle.map(e => (
                  <TouchableOpacity style={[styles.btnStatus, status === e.status && styles.btnActive]} onPress={() => setStatusFilter(e.status)}>
                    <Text style={[styles.btnText, status === e.status && styles.textActive]}>
                      {e.status}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </View>
            <FlatList 
              data={datalist}
              keyExtractor={(e, i) => i.toString()}
              renderItem={renderItem}
              ItemSeparatorComponent={separator}
            />
            <Modal animationType='none' transparent={false} visible={showModal} onRequestClose={() => {
              changeModalVisible(false);
            }}>
              <DetailModal changeModalVisible={changeModalVisible}/>
            </Modal>
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
  listStatus: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20
  },
  btnStatus: {
    width: 300,
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 16,
  },
  btnActive: {
    backgroundColor: '#E6838D'
  },
  textActive: {
    color: '#fff'
  },
  itemStatus: {
    backgroundColor: 'green',
    paddingHorizontal: 6,
    justifyContent: 'center',
    right: 12,
    width: 100,
    alignItems: 'center'
  }
});
