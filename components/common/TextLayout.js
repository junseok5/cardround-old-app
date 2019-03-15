import React from "react"
import styled from "styled-components"
import CardText from "../card/CardText"
import Colors from "../../constants/Colors"

const Container = styled.View`
    background: ${Colors.textLayout};
    border-top-width: 1px;
    border-top-color: ${Colors.thickBorder};
`

const TextLayout = ({ data, boardId, target }) => {
    return (
        <Container>
            {data.map(card => (
                <CardText
                    boardId={boardId}
                    target={target}
                    card={card}
                    key={card.code}
                />
            ))}
        </Container>
    )
}

export default TextLayout
