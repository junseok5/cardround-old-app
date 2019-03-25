import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import Board from "../components/list/Board"
import { BoardsActions, FollowActions } from "../store/actionCreator"
import { WebBrowser } from "expo"

class BoardContainer extends Component {
    _moveToDetailBoard = () => {
        const { data } = this.props
        WebBrowser.openBrowserAsync(data.link)
    }

    _followBoard = async boardId => {
        const token = await AsyncStorage.getItem("accessToken")
        const { target, index } = this.props

        try {
            FollowActions.followBoard({ token, boardId })
            BoardsActions.changeFollowingStatus({
                target,
                index,
                boardId,
                isFollowing: true
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    _unfollowBoard = async boardId => {
        const token = await AsyncStorage.getItem("accessToken")
        const { target, index } = this.props

        try {
            FollowActions.unfollowBoard({ token, boardId })
            BoardsActions.changeFollowingStatus({
                target,
                index,
                boardId,
                isFollowing: false
            })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const { data, target } = this.props

        return (
            <Board
                data={data}
                target={target}
                moveToDetailBoard={this._moveToDetailBoard}
                followBoard={this._followBoard}
                unfollowBoard={this._unfollowBoard}
            />
        )
    }
}

export default BoardContainer
