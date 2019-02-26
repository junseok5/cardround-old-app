import React from "react"
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation"
import Colors from "../constants/Colors"
import TabBarIcon from "../components/common/TabBarIcon"
import HomeScreen from "../screens/HomeScreen"
import BoardsScreen from "../screens/BoardsScreen"
import WebsitesScreen from "../screens/WebsitesScreen"
import ProfileScreen from "../screens/ProfileScreen"
import DetailWebsite from "../screens/DetailWebsite"
import DetailBoard from "../screens/DetailBoard"
import LoginScreen from "../screens/LoginScreen"

const TabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({
                Home: LoginScreen
            }),
            navigationOptions: {
                tabBarLabel: "홈",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name="home" />
                )
            }
        },
        Boards: {
            screen: createStackNavigator({
                Boards: BoardsScreen
            }),
            navigationOptions: {
                tabBarLabel: "보드",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name="credit-card" />
                )
            }
        },
        Websites: {
            screen: createStackNavigator({
                Websites: WebsitesScreen
            }),
            navigationOptions: {
                tabBarLabel: "웹사이트",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name="chrome" />
                )
            }
        },
        Profile: {
            screen: createStackNavigator({
                Profile: ProfileScreen
            }),
            navigationOptions: {
                tabBarLabel: "프로필",
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon focused={focused} name="user" />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#000",
            inactiveTintColor: Colors.supportColor
        }
    }
)

export default createAppContainer(TabNavigation)

// const HomeStack = createStackNavigator({
//     // Home: HomeScreen
//     // Home: DetailWebsite
//     // Home: DetailBoard
//     Home: LoginScreen
// })

// HomeStack.navigationOptions = {
//     tabBarLabel: "홈",
//     tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
//     tabBarOptions
// }

// const BoardsStack = createStackNavigator({
//     Boards: BoardsScreen
// })

// BoardsStack.navigationOptions = {
//     tabBarLabel: "보드",
//     tabBarIcon: ({ focused }) => (
//         <TabBarIcon focused={focused} name="credit-card" />
//     ),
//     tabBarOptions
// }

// const WebsitesStack = createStackNavigator({
//     Websites: WebsitesScreen
// })

// WebsitesStack.navigationOptions = {
//     tabBarLabel: "웹사이트",
//     tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="chrome" />,
//     tabBarOptions
// }

// const ProfileStack = createStackNavigator({
//     Profile: ProfileScreen
// })

// ProfileStack.navigationOptions = {
//     tabBarLabel: "프로필",
//     tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
//     tabBarOptions
// }

// export default createBottomTabNavigator({
//     HomeStack,
//     BoardsStack,
//     WebsitesStack,
//     ProfileStack
// })
