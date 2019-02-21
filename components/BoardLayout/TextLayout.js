import React from "react"
import styled from "styled-components"

const Container = styled.View`
    background: #fafafa;
    border-top-width: 1px;
    border-top-color: #ccc;
`

const ItemContainer = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
`

const Text = styled.Text`
    flex: 7;
    padding-right: 5px;
    padding-left: 10px;
`

const FirstAddedInfo = styled.Text`
    padding-right: 5px;
    flex: 1.5;
    text-align: center;
    color: #747474;
`

const SecondAddedInfo = styled.Text`
    padding-right: 10px;
    flex: 1;
    text-align: center;
    color: #747474;
`

const Item = ({ title, firstAddedInfo, secondAddedInfo }) => {
    return (
        <ItemContainer>
            <Text>{title}</Text>

            {firstAddedInfo && (
                <FirstAddedInfo>{firstAddedInfo}</FirstAddedInfo>
            )}

            {secondAddedInfo && (
                <SecondAddedInfo>{secondAddedInfo}</SecondAddedInfo>
            )}
        </ItemContainer>
    )
}

const TextLayout = ({ title, firstAddedInfo, secondAddedInfo }) => {
    return (
        <Container>
            <Item
                title={title}
                firstAddedInfo={firstAddedInfo}
                secondAddedInfo={secondAddedInfo}
            />
            <Item
                title={title}
                firstAddedInfo={firstAddedInfo}
                secondAddedInfo={secondAddedInfo}
            />
            <Item
                title={title}
                firstAddedInfo={firstAddedInfo}
                secondAddedInfo={secondAddedInfo}
            />
            <Item
                title={title}
                firstAddedInfo={firstAddedInfo}
                secondAddedInfo={secondAddedInfo}
            />
        </Container>
    )
}

export default TextLayout
