import React from "react"
import styled from "styled-components"
import CardText from "../card/CardText"

const Container = styled.View`
    background: #fafafa;
    border-top-width: 1px;
    border-top-color: #ccc;
`

const TextLayout = ({ data }) => {
    return (
        <Container>
            {data.map(card => (
                <CardText card={card} key={card.code} />
            ))}
        </Container>
    )
}

export default TextLayout
