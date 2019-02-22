import React from "react"
import styled from "styled-components"
import Colors from "../constants/Colors"
import { Button } from "react-native"
import NewsPhoto from "./BoardLayout/NewsPhoto"
import Chart from "./BoardLayout/Chart"
import ShopPhoto from "./BoardLayout/ShopPhoto"
import OldBoard from "./BoardLayout/OldBoard"

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

const BoardThumbnail = styled.Image`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50;
    border-color: #ccc;
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

const PreviewBoard = ({ data }) => {
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
                <BoardInfo>
                    <BoardThumbnail
                        source={{
                            uri: websiteThumbnail
                        }}
                    />
                    <BoardName>{name}</BoardName>
                    <WebsiteName> - {websiteName}</WebsiteName>
                </BoardInfo>
                <Button
                    title="팔로우"
                    color={Colors.mainColor}
                    onPress={() => {}}
                />
            </Header>
            <Main>
                {layoutType === "NEWS_PHOTO" && <NewsPhoto data={cards} />}
                {layoutType === "CHART" && <Chart data={cards} />}
                {layoutType === "OLD_BOARD" && <OldBoard data={cards} />}
                {layoutType === "SHOP_PHOTO" && <ShopPhoto data={cards} />}
            </Main>
        </Container>
    )
}

export default PreviewBoard
