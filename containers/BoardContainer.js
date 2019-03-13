import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { withNavigation } from "react-navigation"
import Board from "../components/list/Board"
import { FollowActions } from "../store/actionCreator"

class BoardContainer extends Component {
    _moveToDetailBoard = () => {
        const { data, navigation } = this.props

        navigation.navigate({
            routeName: "ExternalWebsite",
            params: {
                link: data.link,
                name: data.name,
                websiteName: data.websiteName
            }
        })
    }

    _followBoard = async boardId => {
        const token = await AsyncStorage.getItem("accessToken")

        try {
            await FollowActions.followBoard({ token, boardId })
        } catch (error) {
            console.log(error.message)
        }
    }

    _unfollowBoard = async boardId => {
        const token = await AsyncStorage.getItem("accessToken")

        try {
            await FollowActions.unfollowBoard({ token, boardId })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { data } = this.props

        return (
            <Board
                data={data}
                moveToDetailBoard={this._moveToDetailBoard}
                followBoard={this._followBoard}
                unfollowBoard={this._unfollowBoard}
            />
        )
    }
}

export default withNavigation(BoardContainer)
