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
import DefaultWebsiteThumbnail from "../common/DefaultWebsiteThumbnail"

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

const Main = styled.View``

const WaitingUpdate = styled.View`
    padding: 20px 15px;
    margin-left: 15px;
    margin-right: 15px;
    background: ${Colors.textLayout};
    border-radius: 4px;
`

const WaitingUpdateText = styled.Text`
    font-size: 15px;
`

class Board extends PureComponent {
    render() {
        const {
            data,
            target,
            moveToDetailBoard,
            followBoard,
            unfollowBoard
        } = this.props
        const {
            _id,
            name,
            websiteName,
            websiteThumbnail,
            layoutType,
            cards
        } = data

        return (
            <Container>
                <Header>
                    <TouchableWithoutFeedback onPress={moveToDetailBoard}>
                        <BoardInfo>
                            <Thumbnail>
                                {websiteThumbnail ? (
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
                                ) : (
                                    <DefaultWebsiteThumbnail
                                        websiteName={websiteName}
                                        width={35}
                                        height={35}
                                        fontSize={8}
                                    />
                                )}
                            </Thumbnail>
                            <BoardName numberOfLines={1}>{name}</BoardName>
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
                {cards.length === 0 ? (
                    <Main>
                        <WaitingUpdate>
                            <WaitingUpdateText>
                                업데이트를 기다리는 중입니다.
                            </WaitingUpdateText>
                        </WaitingUpdate>
                    </Main>
                ) : (
                    <Main>
                        {layoutType === "NEWS_PHOTO" && (
                            <NewsPhoto
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                        {layoutType === "OLD_BOARD" && (
                            <OldBoard
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                        {layoutType === "SHOP_PHOTO" && (
                            <ShopPhoto
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                        {layoutType === "MOVIE_CHART" && (
                            <MovieChart
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                        {layoutType === "MUSIC_CHART" && (
                            <MusicChart
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                        {layoutType === "BAMBOO" && (
                            <Bamboo
                                data={cards}
                                boardId={_id}
                                target={target}
                            />
                        )}
                    </Main>
                )}
            </Container>
        )
    }
}

export default Board
