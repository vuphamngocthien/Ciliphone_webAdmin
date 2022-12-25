import React,{useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../../firebaseCon/UserContext';
import Login from '../../src/components/Login';
import MainNavigation from '../navigation/MainNavigation';


export default function ContextNavigation (props)  {
    const LoggedIn = true;
    const {isLoggedIn} = useContext(UserContext);
    return (
        <NavigationContainer independent={true} >
            {
                LoggedIn == true ? 
                <MainNavigation />:
                <Login />
            }
        </NavigationContainer>
        )
}