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
    flex: 1;
    text-align: center;
    color: #747474;
`

const PublishedDate = styled.Text`
    padding-right: 10px;
    flex: 1.5;
    text-align: center;
    color: #747474;
`

const Item = ({ card }) => {
    return (
        <ItemContainer>
            <Text>{card.title}</Text>

            {card.publishedDate && (
                <PublishedDate>{card.publishedDate}</PublishedDate>
            )}

            {card.firstAddedInfo && (
                <FirstAddedInfo>{card.firstAddedInfo}</FirstAddedInfo>
            )}  
        </ItemContainer>
    )
}

const TextLayout = ({ data }) => {
    return (
        <Container>
            {data.map((card, key) => (
                <Item card={card} key={card.code} />
            ))}
        </Container>
    )
}

export default TextLayout
