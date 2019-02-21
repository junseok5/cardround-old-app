import React from "react"
import {} from "react-native"
import styled from "styled-components"
import PreviewBoard from "../components/PreviewBoard"
import Section from "../components/Section"

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

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Section horizontal={false}>
                    <HContainer>
                        <PageTitle>팔로우 보드</PageTitle>
                    </HContainer>
                    <PreviewBoard layoutType="NEWS_PHOTO" />
                    <PreviewBoard layoutType="CHART" />
                    <PreviewBoard layoutType="OLD_BOARD" />
                    <PreviewBoard layoutType="SHOP_PHOTO" />
                </Section>
            </Container>
        )
    }
}
