import React from "react"
import { Platform } from "react-native"
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation"
import { mainColor } from '../constants/Colors'

import TabBarIcon from "../components/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import LinksScreen from "../screens/LinksScreen"
import ProfileScreen from "../screens/ProfileScreen"

const tabBarOptions = {
  activeTintColor: '#000',
  inactiveTintColor: '#ccc'
}

const HomeStack = createStackNavigator({
    Home: HomeScreen
})

HomeStack.navigationOptions = {
    tabBarLabel: "홈",
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
    tabBarOptions
}

const LinksStack = createStackNavigator({
    Links: LinksScreen
})

LinksStack.navigationOptions = {
    tabBarLabel: "웹사이트",
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="chrome" />,
    tabBarOptions
}

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen
})

ProfileStack.navigationOptions = {
    tabBarLabel: "프로필",
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
    tabBarOptions
}

export default createBottomTabNavigator({
    HomeStack,
    LinksStack,
    ProfileStack
})
