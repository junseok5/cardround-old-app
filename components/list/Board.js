import React, { PureComponent } from "react"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { Image, TouchableWithoutFeedback } from "react-native"
import NewsPhoto from "../board_layout_type/NewsPhoto"
import ShopPhoto from "../board_layout_type/ShopPhoto"
import OldBoard from "../board_layout_type/OldBoard"
import Bamboo from "../board_layout_type/Bamboo"
import MovieChart from "../board_layout_type/MovieChart"
import MusicChart from "../board_layout_type/MusicChart"
import FollowButton from "../common/FollowButton"

const Container = styled.View`
    margin-top: 15px;
    margin-bottom: 40px;
`

const Header = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const BoardInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

const Thumbnail = styled.View`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50;
    border-color: ${Colors.thickBorder};
    border-width: 0.5px;
`

const BoardName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

const WebsiteName = styled.Text`
    font-size: 14px;
`

const Main = styled.View``

class Board extends PureComponent {
    render() {
        const {
            data,
            moveToDetailBoard,
            followBoard,
            unfollowBoard
        } = this.props
        const {
            _id,
            name,
            websiteThumbnail,
            websiteName,
            layoutType,
            cards
        } = data

        return (
            <Container>
                <Header>
                    <TouchableWithoutFeedback onPress={moveToDetailBoard}>
                        <BoardInfo>
                            <Thumbnail>
                                <Image
                                    source={{
                                        uri: websiteThumbnail
                                    }}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 50,
                                        resizeMode: "contain"
                                    }}
                                />
                            </Thumbnail>
                            <BoardName numberOfLines={1}>{name}</BoardName>
                            {/* <WebsiteName numberOfLines={1}>
                                {" "}
                                - {websiteName}
                            </WebsiteName> */}
                        </BoardInfo>
                    </TouchableWithoutFeedback>
                    {data.following ? (
                        <FollowButton
                            title="언팔로우"
                            backgroundColor={Colors.buttonBackground}
                            color={Colors.thickBlack}
                            onPress={() => unfollowBoard(_id)}
                        />
                    ) : (
                        <FollowButton
                            title="팔로우"
                            onPress={() => followBoard(_id)}
                        />
                    )}
                </Header>
                <Main>
                    {layoutType === "NEWS_PHOTO" && <NewsPhoto data={cards} />}
                    {layoutType === "OLD_BOARD" && <OldBoard data={cards} />}
                    {layoutType === "SHOP_PHOTO" && <ShopPhoto data={cards} />}
                    {layoutType === "MOVIE_CHART" && (
                        <MovieChart data={cards} />
                    )}
                    {layoutType === "MUSIC_CHART" && (
                        <MusicChart data={cards} />
                    )}
                    {layoutType === "BAMBOO" && <Bamboo data={cards} />}
                </Main>
            </Container>
        )
    }
}

export default Board
