import React, { Component } from "react"
import { NetInfo, TouchableOpacity } from "react-native"
import { Icon } from "expo"
import DetailWebsitePresenter from "./DetailWebsitePresenter"
import { BaseActions, ListingActions } from "../../store/actionCreator"
import ErrorNotice from "../../components/common/ErrorNotice"
import Colors from "../../constants/Colors"

class DetailWebsiteContainer extends Component {
    componentDidMount() {
        this._initialize()
    }

    componentWillUnmount() {
        NetInfo.removeEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    handleConnectivityChange = isConnected => {
        if (isConnected) {
            BaseActions.changeIsNetworkConnected(true)
            this._fetchPreviewboardList()
        } else {
            BaseActions.changeIsNetworkConnected(false)
        }
    }

    _initialize = () => {
        const { loading } = this.props

        if (loading) {
            return
        }

        this._refetchPreviewboardList()
        NetInfo.isConnected.addEventListener(
            "connectionChange",
            this.handleConnectivityChange
        )
    }

    _fetchPreviewboardList = async () => {
        const {
            page,
            end,
            navigation: {
                state: {
                    params: {
                        website: { _id: websiteId }
                    }
                }
            }
        } = this.props

        if (end) return

        const query = { page, websiteId }

        try {
            await ListingActions.getWebsitePreviewboards(query)
        } catch (error) {
            console.log(error)
        }
    }

    _refetchPreviewboardList = async () => {
        await ListingActions.initializeWebsitePreviewboards()
        this._fetchPreviewboardList()
    }

    _keyExtractor = (item, index) => item._id

    _onEndReached = () => {
        this._fetchPreviewboardList()
    }

    render() {
        const {
            isNetworkConnected,
            errorMessage,
            navigation: {
                state: {
                    params: { website }
                }
            },
            previewboards,
            error,
            loading
        } = this.props

        if (!isNetworkConnected && previewboards.length === 0) {
            return (
                <ErrorNotice
                    message={errorMessage.network}
                    refetch={this._refetchPreviewboardList}
                />
            )
        } else if (error) {
            return (
                <ErrorNotice
                    message={errorMessage.server}
                    refetch={this._refetchPreviewboardList}
                />
            )
        } else {
            return (
                <DetailWebsitePresenter
                    loading={loading}
                    website={website}
                    previewboards={previewboards}
                    keyExtractor={this._keyExtractor}
                    onEndReached={this._onEndReached}
                    onRefresh={this._refetchPreviewboardList}
                />
            )
        }
    }
}

export default DetailWebsiteContainer
