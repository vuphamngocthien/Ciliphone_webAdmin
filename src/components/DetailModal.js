import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 600;

const DetailModal = (props) => {

    const closeModal = (bool) => {
        props.changeModalVisible(bool);
        console.log(bool)
    }

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.modal}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 32, color: 'blue'}}>Detail</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 24, color: 'red'}}>hd01</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>userId : user101</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Email : thanhbomhang@gmail.com</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Address : Gam cau Thu Thiem, Tp. HCM</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Phone : 0909900090</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Product : Iphone 13 (pIp13) (1) : Iphone 14 (pIp14) (2) : Galaxy Note 20 Ultra (pSS20Ultra) (1) ; AirPod Pro (pAirP) (3)</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Total Price : $1000</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Innitiated_date : 23 / 12 / 2022</Text>
                </View>
                <View style={{paddingHorizontal: 50, paddingVertical: 15}}>
                    <Text style={{fontSize: 16,}}>Status : Canceled</Text>
                </View>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => closeModal(false)}>
                    <Text style={{color: 'blue', fontSize: 24, fontWeight: 'bold'}}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailModal;

const styles = StyleSheet.create({
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 500,
        paddingTop: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 10
    }
})