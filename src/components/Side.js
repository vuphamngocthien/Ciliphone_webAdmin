import { StyleSheet, Text, View, Image } from 'react-native';

export default function Side() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
    height: '100%',
    width: 535,
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
});
