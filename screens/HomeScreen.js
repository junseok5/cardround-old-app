import React from "react"
import styled from "styled-components"
import PreviewBoard from "../components/PreviewBoard"
import Section from "../components/Section"
import { FlatList } from "react-native"

const Container = styled.View`
    padding-top: 40px;
    padding-bottom: 10px;
`

const HContainer = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`

const PageTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

const testData = [
    {
        key: "1",
        layoutType: "NEWS_PHOTO"
    },
    {
        key: "2",
        layoutType: "CHART"
    },
    {
        key: "3",
        layoutType: "OLD_BOARD"
    },
    {
        key: "4",
        layoutType: "SHOP_PHOTO"
    },
    {
        key: "5",
        layoutType: "NEWS_PHOTO"
    },
    {
        key: "6",
        layoutType: "CHART"
    },
    {
        key: "7",
        layoutType: "OLD_BOARD"
    },
    {
        key: "8",
        layoutType: "SHOP_PHOTO"
    }
]

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    _keyExtractor = (item, index) => item.key

    _renderItem = ({ item }) => <PreviewBoard layoutType={item.layoutType} />

    render() {
        return (
            <Container>
                <FlatList
                    data={testData}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}
                />
                {/* <Section horizontal={false}> */}
                {/* <HContainer>
                        <PageTitle>팔로우 보드</PageTitle>
                    </HContainer>
                    <PreviewBoard layoutType="NEWS_PHOTO" />
                    <PreviewBoard layoutType="CHART" />
                    <PreviewBoard layoutType="OLD_BOARD" />
                    <PreviewBoard layoutType="SHOP_PHOTO" />
                    <PreviewBoard layoutType="NEWS_PHOTO" />
                    <PreviewBoard layoutType="CHART" />
                    <PreviewBoard layoutType="OLD_BOARD" />
                    <PreviewBoard layoutType="SHOP_PHOTO" />
                    <PreviewBoard layoutType="NEWS_PHOTO" />
                    <PreviewBoard layoutType="CHART" />
                    <PreviewBoard layoutType="OLD_BOARD" />
                    <PreviewBoard layoutType="SHOP_PHOTO" />
                    <PreviewBoard layoutType="NEWS_PHOTO" />
                    <PreviewBoard layoutType="CHART" />
                    <PreviewBoard layoutType="OLD_BOARD" />
                    <PreviewBoard layoutType="SHOP_PHOTO" /> */}
                {/* </Section> */}
            </Container>
        )
    }
}
