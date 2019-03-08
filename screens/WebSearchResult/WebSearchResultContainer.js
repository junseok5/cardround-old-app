import React, { Component } from "react"
import { withNavigation } from "react-navigation"
import SearchResult from "../../components/search/SearchResult"
import Website from "../../components/list/Website"
import { ListingActions } from "../../store/actionCreator";

class WebSearchResultContainer extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this._refetchWebsiteList()
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.keyword !== this.props.keyword) {
    //         this._refetchWebsiteList()
    //     }
    // }

    _fetchWebsiteList = async () => {
        const { page, keyword, end } = this.props

        if (end) return

        const query = { page, keyword }

        try {
            await ListingActions.getSearchWebsites(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchWebsiteList = async () => {
        await ListingActions.initializeSearchWebsites()
        this._fetchWebsiteList()
    }

    _closeScreen = () => {
        const { navigation } = this.props
        navigation.goBack()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        this._fetchWebsiteList()
    }

    render() {
        const { loading, websites } = this.props
        return (
            <SearchResult
                loading={loading}
                websites={websites}
                keyExtractor={this._keyExtractor}
                onEndReached={this._onEndReached}
                closeScreen={this._closeScreen}
                ListItem={Website}
            />
        )
    }
}

export default withNavigation(WebSearchResultContainer)
