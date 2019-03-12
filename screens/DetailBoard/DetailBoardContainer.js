// import React, { Component } from "react"
// import { NetInfo, TouchableOpacity } from "react-native"
// import { Icon } from "expo"
// import DetailBoardPresenter from "./DetailBoardPresenter"
// import { BaseActions, BoardActions } from "../../store/actionCreator"
// import ErrorNotice from "../../components/common/ErrorNotice"
// import Colors from "../../constants/Colors"

// class DetailBoardContainer extends Component {
//     static navigationOptions = ({ navigation }) => {
//         const {
//             state: {
//                 params: {
//                     previewboard: { link }
//                 }
//             }
//         } = navigation

//         return {
//             headerRight: (
//                 <TouchableOpacity
//                     onPress={() =>
//                         navigation.navigate({
//                             routeName: "ExternalWebsite",
//                             params: { link }
//                         })
//                     }
//                 >
//                     <Icon.EvilIcons
//                         name="external-link"
//                         size={35}
//                         color={Colors.supportColor}
//                         style={{ marginRight: 10 }}
//                     />
//                 </TouchableOpacity>
//             )
//         }
//     }

//     componentDidMount() {
//         this._initialize()
//     }

//     componentWillUnmount() {
//         NetInfo.removeEventListener(
//             "connectionChange",
//             this.handleConnectivityChange
//         )
//     }

//     handleConnectivityChange = isConnected => {
//         if (isConnected) {
//             BaseActions.changeIsNetworkConnected(true)
//             this._fetchBoard()
//         } else {
//             BaseActions.changeIsNetworkConnected(false)
//         }
//     }

//     _initialize = () => {
//         const { loading } = this.props

//         if (loading) {
//             return
//         }

//         this._refetchBoard()
//         NetInfo.isConnected.addEventListener(
//             "connectionChange",
//             this.handleConnectivityChange
//         )
//     }

//     _fetchBoard = async () => {
//         const {
//             navigation: {
//                 state: {
//                     params: {
//                         previewboard: { board: id }
//                     }
//                 }
//             }
//         } = this.props

//         if (id) {
//             try {
//                 await BoardActions.getBoard(id)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//     }

//     _refetchBoard = async () => {
//         await BoardActions.initialize()
//         this._fetchBoard()
//     }

//     _moveToDetailWebsite = () => {
//         const { navigation } = this.props
//         const {
//             state: {
//                 params: { previewboard }
//             }
//         } = navigation
//         const website = {
//             _id: previewboard.websiteId,
//             name: previewboard.websiteName,
//             thumbnail: previewboard.websiteThumbnail
//         }

//         navigation.navigate({ routeName: "DetailWebsite", params: { website } })
//     }

//     render() {
//         const {
//             isNetworkConnected,
//             errorMessage,
//             navigation: {
//                 state: {
//                     params: { previewboard }
//                 }
//             },
//             board,
//             error,
//             loading
//         } = this.props

//         if (!isNetworkConnected && !board) {
//             return (
//                 <ErrorNotice
//                     message={errorMessage.network}
//                     refetch={this._refetchBoard}
//                 />
//             )
//         } else if (error) {
//             return (
//                 <ErrorNotice
//                     message={errorMessage.server}
//                     refetch={this._refetchBoard}
//                 />
//             )
//         } else {
//             return (
//                 <DetailBoardPresenter
//                     loading={loading}
//                     previewboard={previewboard}
//                     board={board}
//                     onRefresh={this._refetchBoard}
//                     moveToDetailWebsite={this._moveToDetailWebsite}
//                 />
//             )
//         }
//     }
// }

// export default DetailBoardContainer
