import { createStackNavigator, createAppContainer } from "react-navigation"
import TabNavigation from "./TabNavigation"
// import DetailBoard from "../screens/DetailBoard"
import DetailCard from "../screens/DetailCard"
import DetailWebsite from "../screens/DetailWebsite"
import WebSearch from "../screens/WebSearch"
import WebSearchResult from "../screens/WebSearchResult"
import BoardSearch from "../screens/BoardSearch"
import BoardSearchResult from "../screens/BoardSearchResult"
import ExternalWebsite from "../screens/ExternalWebsite"

const MainNavigation = createStackNavigator(
    {
        Tabs: {
            screen: TabNavigation,
            navigationOptions: {
                header: null
            }
        },
        DetailWebsite: {
            screen: DetailWebsite
        },
        DetailCard: {
            screen: DetailCard
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
        },
        ExternalWebsite: {
            screen: ExternalWebsite
        }
    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
)

export default createAppContainer(MainNavigation)
