import React from "react"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import TabNavigator from "./TabNavigation"
import DetailWebsite from "../screens/DetailWebsite"
import DetailBoard from "../screens/DetailBoard"

export default createAppContainer(
    createSwitchNavigator({
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: TabNavigator,
        DetailWebsite: {
            screen: DetailWebsite
        },
        DetailBoard: {
            screen: DetailBoard,
            navigationOptions: {}
        }
    })
)
