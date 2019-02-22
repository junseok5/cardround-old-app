import React from "react"
import styled from "styled-components"

const Container = styled.View`
    padding-top: 8px;
    padding-bottom: 8px;
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
`

const Title = styled.Text`
    flex: 7;
    padding-right: 5px;
    padding-left: 10px;
    font-size: 15px;
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

class CardText extends React.PureComponent {
    render() {
        const {
            title,
            publishedDate,
            firstAddedInfo
        } = this.props.card
        return (
            <Container>
                <Title numberOfLines={2}>{title}</Title>

                {publishedDate && (
                    <PublishedDate>{publishedDate}</PublishedDate>
                )}

                {firstAddedInfo && (
                    <FirstAddedInfo>{firstAddedInfo}</FirstAddedInfo>
                )}
            </Container>
        )
    }
}

export default CardText