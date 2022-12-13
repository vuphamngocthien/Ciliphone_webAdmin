import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';

export default function DialogUpdateUser(props) {

    const [open, setOpen] = useState(props)

    return (
        <Dialog open={props.open} style={styles.dialog}>
            <DialogTitle style={styles.dialogTitleContainer}>
                <Text style={styles.dialogTitleText}>Edit Form</Text>
            </DialogTitle>
            <DialogContent style={styles.dialogContent}>
                <View styles={styles.editContainer}>
                    <View style={styles.editUsernameZone}>
                        <View style={styles.editUsernameTextTitle}>
                            <Image style={styles.editUsernameTextImg} source={require('../../assets/img/group.png')}></Image>
                            <Text style={styles.editUsernameText}>Username</Text>
                        </View>
                        <TextInput style={styles.editUsernameInput}></TextInput>
                    </View>
                    <View style={styles.editBirthdayZone}>
                        <View style={styles.editBirthdayTextTitle}>
                            <Image style={styles.editBirthdayTextImg} source={require('../../assets/img/date-of-birth.png')}></Image>
                            <Text style={styles.editBirthdayText}>Birthday</Text>
                        </View>
                        <TextInput style={styles.editBirthdayInput}></TextInput>
                    </View>
                    <View style={styles.editEmailZone}>
                        <View style={styles.editEmailTextTitle}>
                            <Image style={styles.editEmailTextImg} source={require('../../assets/img/gmail.png')}></Image>
                            <Text style={styles.editEmailText}>Email</Text>
                        </View>
                        <TextInput style={styles.editEmailInput}></TextInput>
                    </View>
                    <View style={styles.editAddressZone}>
                        <View style={styles.editAddressTextTitle}>
                            <Image style={styles.editAddressTextImg} source={require('../../assets/img/placeholder.png')}></Image>
                            <Text style={styles.editAddressText}>Address</Text>
                        </View>
                        <TextInput style={styles.editAddressInput}></TextInput>
                    </View>
                    <View style={styles.editPhoneZone}>
                        <View style={styles.editPhoneTextTitle}>
                            <Image style={styles.editPhoneTextImg} source={require('../../assets/img/call.png')}></Image>
                            <Text style={styles.editPhoneText}>Phone</Text>
                        </View>
                        <TextInput style={styles.editPhoneInput}></TextInput>
                    </View>
                    <View style={styles.editMoneyZone}>
                        <View style={styles.editMoneyTextTitle}>
                            <Image style={styles.editMoneyTextImg} source={require('../../assets/img/money.png')}></Image>
                            <Text style={styles.editMoneyText}>Money</Text>
                        </View>
                        <TextInput style={styles.editMoneyInput}></TextInput>
                    </View>
                </View>
            </DialogContent>
            <DialogActions>
                <TouchableOpacity /*onPress={onUpdate}*/ style={styles.buttonUpdate}>Update</TouchableOpacity>
                <TouchableOpacity style={styles.buttonCancel}>Cancel</TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialogTitleText: {
        color: 'blue',
    },
    dialogContent: {

    },
    editContainer: {
        width: 1000,
        height: 1000,
    },
    editUsernameZone: {
        width: 500,
    },
    editUsernameTextTitle: {
        flexDirection: 'row',
    },
    editUsernameTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editUsernameText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editUsernameInput: {
        borderBottomWidth: 1,
        height: 30
    },
    editBirthdayZone: {
        width: 500,
    },
    editBirthdayTextTitle: {
        flexDirection: 'row',
    },
    editBirthdayTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editBirthdayText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editBirthdayInput: {
        borderBottomWidth: 1,
        height: 30
    },
    editEmailZone: {
        width: 500,
    },
    editEmailTextTitle: {
        flexDirection: 'row',
    },
    editEmailTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editEmailText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editEmailInput: {
        borderBottomWidth: 1,
        height: 30
    },
    editAddressZone: {
        width: 500,
    },
    editAddressTextTitle: {
        flexDirection: 'row',
    },
    editAddressTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editAddressText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editAddressInput: {
        borderBottomWidth: 1,
        height: 30
    },
    editPhoneZone: {
        width: 500,
    },
    editPhoneTextTitle: {
        flexDirection: 'row',
    },
    editPhoneTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editPhoneText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editPhoneInput: {
        borderBottomWidth: 1,
        height: 30
    },
    editMoneyZone: {
        width: 500,
    },
    editMoneyTextTitle: {
        flexDirection: 'row',
    },
    editMoneyTextImg: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginTop: 10
    },
    editMoneyText: {
        marginBottom: 10,
        marginTop: 10,
    },
    editMoneyInput: {
        borderBottomWidth: 1,
        height: 30
    },
    buttonUpdate: {
        color: 'red',
        margin: 10
    },
    buttonCancel: {
        color: 'red',
        margin: 10
    }
})