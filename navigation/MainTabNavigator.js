import React from "react"
import {
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation"
import Colors from '../constants/Colors'
import TabBarIcon from "../components/common/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import WebsitesScreen from "../screens/WebsitesScreen"
import ProfileScreen from "../screens/ProfileScreen"

const tabBarOptions = {
    activeTintColor: "#000",
    inactiveTintColor: Colors.supportColor
}

const HomeStack = createStackNavigator({
    Home: HomeScreen
})

HomeStack.navigationOptions = {
    tabBarLabel: "홈",
    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
    tabBarOptions
}

const WebsitesStack = createStackNavigator({
    Websites: WebsitesScreen
})

WebsitesStack.navigationOptions = {
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
    WebsitesStack,
    ProfileStack
})
