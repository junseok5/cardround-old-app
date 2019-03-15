import React, { Component } from "react"
import { AsyncStorage } from "react-native"
import { withNavigation } from "react-navigation"
import { FollowActions, BoardsActions } from "../store/actionCreator"

const withCard = Card => {
    return withNavigation(
        class extends Component {
            _onClick = async () => {
                const {
                    navigation,
                    boardId,
                    target,
                    card: { title, link }
                } = this.props

                navigation.navigate({
                    routeName: "DetailCard",
                    params: {
                        title,
                        link
                    }
                })

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
    )
}

export default withCard
