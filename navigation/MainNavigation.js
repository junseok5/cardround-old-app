import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
import DetailBoard from "../screens/DetailBoard"
import DetailWebsite from "../screens/DetailWebsite"

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        DetailBoard: {
            screen: DetailBoard
        },
        DetailWebsite: {
            screen: DetailWebsite
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
)

export default createAppContainer(MainNavigation)
