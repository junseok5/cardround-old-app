import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
import DetailBoardScreen from "../screens/DetailBoardScreen"
import DetailCardScreen from "../screens/DetailCardScreen"
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
            screen: DetailBoardScreen
        },
        DetailWebsite: {
            screen: DetailWebsite
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
