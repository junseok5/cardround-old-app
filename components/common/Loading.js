import React from "react"
import { ActivityIndicator } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Loading = () => {
    return (
        <Container>
            <ActivityIndicator size="large" color={Colors.mainColor} />
        </Container>
    )
}

export default Loading
