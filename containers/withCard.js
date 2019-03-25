import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { FollowActions, BoardsActions } from "../store/actionCreator"
import { WebBrowser } from "expo"

const withCard = Card => {
    return class extends Component {
        _onClick = async () => {
            const {
                boardId,
                target,
                card: { link }
            } = this.props

            WebBrowser.openBrowserAsync(link)

            if (target === "following") {
                const token = await AsyncStorage.getItem("accessToken")
                FollowActions.updateFollowingBoardScore({ token, boardId })
            } else {
                BoardsActions.updateBoardScore(boardId)
            }
        }

        render() {
            return <Card {...this.props} onClick={this._onClick} />
        }
    }
}

export default withCard
