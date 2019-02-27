import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
import DetailBoardScreen from "../screens/DetailBoardScreen"
import DetailWebsiteScreen from "../screens/DetailWebsiteScreen"
import DetailCardScreen from "../screens/DetailCardScreen"

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        DetailBoard: {
            screen: DetailBoardScreen
        },
        DetailWebsite: {
            screen: DetailWebsiteScreen
        },
        DetailCard: {
            screen: DetailCardScreen
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
)

export default createAppContainer(MainNavigation)
