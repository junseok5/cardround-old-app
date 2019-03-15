import React from "react"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width};
    height: ${props => props.height};
    padding: 5px;
    border-radius: 50;
`

const WebsiteName = styled.Text`
    text-align: center;
    font-size: ${props => props.fontSize};
    font-weight: bold;
    color: ${Colors.supportColor};
`

const DefaultWebsiteThumbnail = ({
    websiteName,
    width = 64,
    height = 64,
    fontSize = 11
}) => {
    return (
        <Container width={width} height={height}>
            <WebsiteName fontSize={fontSize}>{websiteName}</WebsiteName>
        </Container>
    )
}

export default DefaultWebsiteThumbnail
