import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DataGrid } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import DialogUpdateUser from './DialogUpdateUser';
import DialogUpdateProduct from './DialogUpdateProduct';

function GetData(props) {
    // const [data, setData] = useState([]);

    // const getData = async () => {
    //     await axios.get("").then((res) => {
    //         setData(res.data.data);
    //     });
    // }

    // useEffect(() => {
    //     getData();
    // }, []);
    if (props.myType == 1) {
        return DataProduct();
    } else if (props.myType == 2) {
        return DataUser();
    } else {
        console.log("Dont have data !")
    }
}

function DataProduct() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const data = [
        { id: '1', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '2', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '3', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '4', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '5', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '6', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '7', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '8', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '9', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
        { id: '10', proName: 'IPhone 14 Pro Max', category: 'Iphone', sale: '10%', import_date: '10/12/2022', quantity: '10', price: '5000$' },
    ];

    const columns = [
        { field: "id", headerName: "ID", width: 30 },
        { field: "proName", headerName: "Product Name", width: 250 },
        { field: "category", headerName: "Category", width: 150 },
        { field: "sale", headerName: "Sale", width: 150 },
        { field: "import_date", headerName: "Import_date", width: 150 },
        { field: "quantity", headerName: "Quantity", width: 150 },
        { field: "price", headerName: "Price", width: 150 },
        { 
            field: "edit",
            headerName: "Edit",
            renderCell: (cellValues) => {
                return (
                    <TouchableOpacity style={styles.buttonEdit} onPress={handleClickOpen}>
                        <Image style={styles.buttonEditImg} source={require('../../assets/img/edit.png')}/>
                        <Text style={styles.buttonEditText}>Edit</Text>
                    </TouchableOpacity>
                )
            }
        },
    ];

    const rows = data.map((row) => ({
        id: row.id,
        proName: row.proName,
        category: row.category,
        sale: row.sale,
        import_date: row.import_date,
        quantity: row.quantity,
        price: row.price,
    }))

    console.log(data);
    console.log(open);

    return <div style={{ height: '95%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection>
        </DataGrid>
        <DialogUpdateProduct open={open}/>
    </div>;
}

function DataUser() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const data = [
        { id: '1', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '2', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '3', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '4', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '5', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '6', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '7', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '8', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '9', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
        { id: '10', username: 'Le Ba Luan', birthday: '01 / 01 / 2002', email: 'luanlbps16836@fpt.edu.vn', address: 'Long An', phone: '0987456321', money: '50000$' },
    ];

    const columns = [
        { field: "id", headerName: "ID", width: 30 },
        { field: "username", headerName: "Username", width: 250 },
        { field: "birthday", headerName: "Birthday", width: 150 },
        { field: "email", headerName: "Email", width: 150 },
        { field: "address", headerName: "Address", width: 150 },
        { field: "phone", headerName: "Phone", width: 150 },
        { field: "money", headerName: "Money", width: 150 },
        { 
            field: "edit",
            headerName: "Edit",
            renderCell: (cellValues) => {
                return (
                    <TouchableOpacity style={styles.buttonEdit} onPress={handleClickOpen}>
                        <Image style={styles.buttonEditImg} source={require('../../assets/img/edit.png')}/>
                        <Text style={styles.buttonEditText}>Edit</Text>
                    </TouchableOpacity>
                )
            }
        },
    ];

    const rows = data.map((row) => ({
        id: row.id,
        username: row.username,
        birthday: row.birthday,
        email: row.email,
        address: row.address,
        phone: row.phone,
        money: row.money,
    }))

    console.log(data);
    console.log(open);

    return <div style={{ height: '95%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection>
        </DataGrid>
        <DialogUpdateUser open={open} />
    </div>;
}

export default GetData;

const styles = StyleSheet.create({
    buttonEdit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonEditImg: {
        width: 12,
        height: 12,
        margin: 10
    },
    buttonEditText: {
        color: 'blue'
    },
})