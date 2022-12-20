import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard } from '../pages/DashBoard';
import { UserManagement } from '../pages/UserManagement';
import { CategoryManagement } from '../pages/CategoryManagement';
import { ProductManagement } from '../pages/ProductManagement';
import { InvoiceManagement } from '../pages/InvoiceManagement';
import { Search } from '../pages/Search';

const Stack = createNativeStackNavigator();

export default function adminNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="dashboard" component={Dashboard}/>
                <Stack.Screen name="user" component={UserManagement}/>
                <Stack.Screen name="category" component={CategoryManagement}/>
                <Stack.Screen name="product" component={ProductManagement}/>
                <Stack.Screen name="invoice" component={InvoiceManagement}/>
                <Stack.Screen name="search" component={Search}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}