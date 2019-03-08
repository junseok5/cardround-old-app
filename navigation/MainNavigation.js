import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
import DetailBoardScreen from "../screens/DetailBoardScreen"
import DetailCardScreen from "../screens/DetailCardScreen"
import DetailWebsite from "../screens/DetailWebsite"
import WebSearch from "../screens/WebSearch"
import WebSearchResult from "../screens/WebSearchResult"

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
        },
        WebSearch: {
            screen: WebSearch
        },
        WebSearchResult: {
            screen: WebSearchResult
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
)

export default createAppContainer(MainNavigation)
