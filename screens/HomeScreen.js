import React from "react"
import {} from "react-native"
import styled from "styled-components"

const Container = styled.View`
    padding-top: 32px;
    padding-bottom: 15px;
`

const HContainer = styled.View`
    padding-left: 15px;
    padding-right: 15px;
`

const PageTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

const MainContainer = styled.View`

`

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <HContainer>
                    <PageTitle>팔로우 보드</PageTitle>
                </HContainer>
                <MainContainer></MainContainer>
            </Container>
        )
    }
}
