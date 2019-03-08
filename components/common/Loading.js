import React from "react"
import { ActivityIndicator } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    justify-content: ${props => (props.isList ? "flex-start" : "center")};
    align-items: center;

    /* align-items: center; */
`

const Loading = ({ isList = false }) => {
    return (
        <Container isList={isList}>
            <ActivityIndicator size="large" color={Colors.mainColor} />
        </Container>
    )
}

export default Loading
