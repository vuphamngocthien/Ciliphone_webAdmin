import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';

import Dashboard from '../../src/pages/DashBoard';
import UserManagement from '../../src/pages/UserManagement';
import CategoryManagement from '../../src/pages/CategoryManagement';
import ProductManagement from '../../src/pages/ProductManagement';
import InvoiceManagement from '../../src/pages/InvoiceManagement';
import Search from '../../src/pages/Search';

const MainNavigation = createStackNavigator(
    {
        Dashboard: Dashboard,
        UserManagement: UserManagement,
        CategoryManagement: CategoryManagement,
        ProductManagement: ProductManagement,
        InvoiceManagement: InvoiceManagement,
        Search: Search,
    },
    {headerMode: 'none'},
    {
        navigationOptions: {
            headerVisible: false
        }
    }
)

export default createAppContainer(MainNavigation)