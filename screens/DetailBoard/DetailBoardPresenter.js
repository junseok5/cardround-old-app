// import React from "react"
// import {
//     Button,
//     RefreshControl,
//     ScrollView,
//     TouchableWithoutFeedback
// } from "react-native"
// import styled from "styled-components"
// import Colors from "../../constants/Colors"
// import DetailBamboo from "../../components/board/DetailBamboo"
// import DetailNewsPhoto from "../../components/board/DetailNewsPhoto"
// import DetailShopPhoto from "../../components/board/DetailShopPhoto"
// import OldBoard from "../../components/previewboard/OldBoard"
// import DetailMusicChart from "../../components/board/DetailMusicChart"
// import DetailMovieChart from "../../components/board/DetailMovieChart"
// import Loading from "../../components/common/Loading"

// const Container = styled.View`
//     padding-top: 40px;
//     padding-bottom: 20px;
// `

// const BoardInfo = styled.View`
//     padding-left: 20px;
//     padding-right: 20px;
// `

// const MetaWrap = styled.View`
//     margin-bottom: 15px;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
// `

// const Meta = styled.View``

// const Name = styled.View`
//     margin-bottom: 3px;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
// `

// const BoardName = styled.Text`
//     font-size: 24px;
//     font-weight: bold;
// `

// const WebsiteName = styled.Text`
//     font-size: 18px;
// `

// const FollowButton = styled.View``

// const Follower = styled.Text`
//     color: ${Colors.supportColor};
// `

// const WebInfo = styled.View`
//     flex-direction: row;
//     justify-content: flex-end;
// `

// const Thumbnail = styled.Image`
//     width: 45px;
//     height: 45px;
//     border-width: 0.5px;
//     border-color: ${Colors.thickBorder};
// `

// const CardList = styled.View`
//     margin-top: 20px;
// `

// const DetailBoardPresenter = ({
//     loading,
//     previewboard,
//     board,
//     onRefresh,
//     moveToDetailWebsite
// }) => {
//     const {
//         name,
//         websiteName,
//         follower,
//         websiteThumbnail,
//         layoutType
//     } = previewboard

//     return (
//         <ScrollView
//             showsVerticalScrollIndicator={false}
//             refreshControl={
//                 <RefreshControl refreshing={false} onRefresh={onRefresh} />
//             }
//         >
//             <Container>
//                 <BoardInfo>
//                     <MetaWrap>
//                         <Meta>
//                             <Name>
//                                 <BoardName>{name} - </BoardName>
//                                 <WebsiteName>{websiteName}</WebsiteName>
//                             </Name>
//                             <Follower>팔로워 {follower}명</Follower>
//                         </Meta>
//                         <FollowButton>
//                             <Button
//                                 title="팔로우"
//                                 color={Colors.mainColor}
//                                 onPress={() => {}}
//                             />
//                         </FollowButton>
//                     </MetaWrap>
//                     <WebInfo>
//                         <TouchableWithoutFeedback onPress={moveToDetailWebsite}>
//                             <Thumbnail
//                                 source={{
//                                     uri: websiteThumbnail
//                                 }}
//                                 resizeMode="contain"
//                             />
//                         </TouchableWithoutFeedback>
//                     </WebInfo>
//                 </BoardInfo>
//                 {loading ? (
//                     <Loading />
//                 ) : (
//                     <CardList>
//                         {layoutType === "NEWS_PHOTO" && (
//                             <DetailNewsPhoto data={board.cards} />
//                         )}
//                         {layoutType === "OLD_BOARD" && (
//                             <OldBoard data={board.cards} />
//                         )}
//                         {layoutType === "SHOP_PHOTO" && (
//                             <DetailShopPhoto data={board.cards} />
//                         )}
//                         {layoutType === "MOVIE_CHART" && (
//                             <DetailMovieChart data={board.cards} />
//                         )}
//                         {layoutType === "MUSIC_CHART" && (
//                             <DetailMusicChart data={board.cards} />
//                         )}
//                         {layoutType === "BAMBOO" && (
//                             <DetailBamboo data={board.cards} />
//                         )}
//                     </CardList>
//                 )}
//             </Container>
//         </ScrollView>
//     )
// }

// export default DetailBoardPresenter
