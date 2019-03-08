import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
import DetailBoardScreen from "../screens/DetailBoardScreen"
import DetailCardScreen from "../screens/DetailCardScreen"
import DetailWebsite from "../screens/DetailWebsite"
import WebSearch from "../screens/WebSearch"
import WebSearchResult from "../screens/WebSearchResult"
import BoardSearch from "../screens/BoardSearch"
import BoardSearchResult from "../screens/BoardSearchResult"

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
        },
        BoardSearch: {
            screen: BoardSearch
        },
        BoardSearchResult: {
            screen: BoardSearchResult
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
)

export default createAppContainer(MainNavigation)
