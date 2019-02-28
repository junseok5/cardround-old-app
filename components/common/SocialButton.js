import React from "react"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { Icon } from "expo"

const Button = styled.View`
    width: 240px;
    padding: 10px 10px;
    margin-top: 2px;
    margin-bottom: 2px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-color: ${Colors.borderColor};
    border-radius: 4px;
`

const Title = styled.Text`
    margin-left: 5px;
    font-size: 18px;
`

const SocialButton = ({ iconName, color, title }) => (
    <Button>
        <Icon.EvilIcons name={iconName} size={32} color={color} />
        <Title>{title}</Title>
    </Button>
)

export default SocialButton
