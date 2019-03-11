import React, { PureComponent } from "react"
import styled from "styled-components"
import { withNavigation } from "react-navigation"
import Colors from "../../constants/Colors"
import { Button, Image, TouchableWithoutFeedback } from "react-native"
import NewsPhoto from "../previewboard/NewsPhoto"
import ShopPhoto from "../previewboard/ShopPhoto"
import OldBoard from "../previewboard/OldBoard"
import Bamboo from "../previewboard/Bamboo"
import MovieChart from "../previewboard/MovieChart"
import MusicChart from "../previewboard/MusicChart"

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

class Previewboard extends PureComponent {
    render() {
        const { data, navigation } = this.props
        const { name, websiteThumbnail, websiteName, layoutType, cards } = data

        return (
            <Container>
                <Header>
                    <TouchableWithoutFeedback
                        onPress={() =>
                            navigation.navigate({
                                routeName: "DetailBoard",
                                params: {
                                    previewboard: data
                                }
                            })
                        }
                    >
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
                            <BoardName>{name}</BoardName>
                            <WebsiteName> - {websiteName}</WebsiteName>
                        </BoardInfo>
                    </TouchableWithoutFeedback>
                    <Button
                        title="팔로우"
                        color={Colors.mainColor}
                        onPress={() => {}}
                    />
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

export default withNavigation(Previewboard)
