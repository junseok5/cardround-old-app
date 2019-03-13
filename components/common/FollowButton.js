import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    padding: 8px 14px;
    border-radius: 4px;
    background: ${props => props.backgroundColor};
`

const Title = styled.Text`
    color: ${props => props.color};
    font-weight: bold;
    font-size: 14px;
`

const FollowButton = ({
    title,
    backgroundColor = Colors.mainColor,
    color = "#fff",
    onPress
}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Container backgroundColor={backgroundColor}>
                <Title color={color}>{title}</Title>
            </Container>
        </TouchableWithoutFeedback>
    )
}

export default FollowButton
