import React from "react"
import styled from "styled-components"
import Colors from "../constants/Colors"
import { Button } from "react-native"
import NewsPhoto from "./BoardLayout/NewsPhoto"
import Chart from "./BoardLayout/Chart"
import ShopPhoto from "./BoardLayout/ShopPhoto"
import PhotoLayout from "./BoardLayout/PhotoLayout"
import TextLayout from "./BoardLayout/TextLayout"
import OldBoard from "./BoardLayout/OldBoard"

const Container = styled.View`
    margin-top: 15px;
    margin-bottom: 15px;
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
`

const BoardName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`

const WebsiteName = styled.Text`
    font-size: 14px;
`

const Main = styled.View``

const PreviewBoard = ({ layoutType }) => {
    return (
        <Container>
            <Header>
                <BoardInfo>
                    <BoardThumbnail
                        source={{
                            uri:
                                "http://computer.cnu.ac.kr/files/attach/images/15005/dded82bfbb1de1763f4f03aa1604d2ad.png"
                        }}
                    />
                    <BoardName>학사공지</BoardName>
                    <WebsiteName> - 충남대 컴퓨터공학과</WebsiteName>
                </BoardInfo>
                <Button
                    title="팔로우"
                    color={Colors.mainColor}
                    onPress={() => {}}
                />
            </Header>
            <Main>
                {layoutType === "NEWS_PHOTO" && <NewsPhoto />}
                {layoutType === "CHART" && <Chart />}
                {layoutType === "OLD_BOARD" && <OldBoard />}
                {layoutType === "SHOP_PHOTO" && <ShopPhoto />}
            </Main>
        </Container>
    )
}

export default PreviewBoard
