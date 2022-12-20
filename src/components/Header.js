import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        height: '100%',
        width: 535,
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
});
