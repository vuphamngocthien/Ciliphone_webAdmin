import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Dashboard from '../pages/DashBoard';
import UserManagement from '../pages/UserManagement';
import CategoryManagement from '../pages/CategoryManagement';
import ProductManagement from '../pages/ProductManagement';
import InvoiceManagement from '../pages/InvoiceManagement';
import Search from '../pages/Search';

const MainNavigation = createStackNavigator(
    {
        Dashboard: Dashboard,
        UserManagement: UserManagement,
        CategoryManagement: CategoryManagement,
        ProductManagement: ProductManagement,
        InvoiceManagement: InvoiceManagement,
        Search: Search,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000'
            }
        }
    }
)

export default createAppContainer(MainNavigation)