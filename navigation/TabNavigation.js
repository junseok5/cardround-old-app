import React from "react"
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation"
import { fromLeft, zoomIn, zoomOut } from "react-navigation-transitions"
import Colors from "../constants/Colors"
import TabBarIcon from "../components/common/TabBarIcon"
import HomeScreen from "../screens/Home"
import BoardsScreen from "../screens/Boards"
import WebsitesScreen from "../screens/Websites"
import ProfileScreen from "../screens/Profile"

const handleCustomTransition = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2]
    const nextScene = scenes[scenes.length - 1]

    if (
        prevScene &&
        prevScene.route.routeName === "Home" &&
        nextScene.route.routeName === "Boards"
    ) {
        return fromLeft()
    } else if (
        prevScene &&
        prevScene.route.routeName === "Boards" &&
        nextScene.route.routeName === "Websites"
    ) {
        return fromLeft()
    } else if (
        prevScene &&
        prevScene.route.routeName === "Websites" &&
        nextScene.route.routeName === "Profile"
    ) {
        return fromLeft()
    }
    return fromLeft()
}

const TabNavigation = createBottomTabNavigator(
    {
        Home: {
            screen: createStackNavigator({
                Home: HomeScreen
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
            activeTintColor: Colors.mainColor,
            inactiveTintColor: Colors.supportColor
        },
        transitionConfig: nav => handleCustomTransition(nav)
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
