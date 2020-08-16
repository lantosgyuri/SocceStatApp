import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { SearchScreen } from "../screens";
import { ListScreen } from "../screens";
import { ROUTES, FONTS } from "../utils/const";

const Tab = createBottomTabNavigator();

const menuLabel = (focused, text) => {
    const menuTextStyle = {
        color: focused ? 'black' : 'gray',
        fontSize: 18,
        fontFamily: FONTS.BASE,
    };

    return (
        <Text style={menuTextStyle}>{text}</Text>
    );
};

const menuIcon = (focused, screen) => {
    const color = focused ? 'black' : 'gray'

    if(screen === ROUTES.SEARCH) {
        return <Icon name="magnify" size={20} color={color} />
    } else if ( screen === ROUTES.HITS) {
        return <Icon name="clover" size={20} color={color} />
    }
}

const Navigation = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name={ROUTES.SEARCH}
                component={SearchScreen}
                options={{
                    tabBarLabel: ({ focused }) => menuLabel(focused, 'Search'),
                    tabBarIcon: ({ focused }) => menuIcon(focused, ROUTES.SEARCH) ,
                }}
            />
            <Tab.Screen
                name={ROUTES.HITS}
                component={ListScreen}
                options={{
                    tabBarLabel: ({ focused }) => menuLabel(focused, 'Hits'),
                    tabBarIcon: ({ focused }) => menuIcon(focused, ROUTES.HITS) ,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
);

export default Navigation;
