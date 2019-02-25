import React, { PureComponent } from "react"
import styled from "styled-components"
import { ScrollView } from "react-native"
import CardBamboo from "../card/CardBamboo"

const Container = styled.View``

class BigTextLayout extends PureComponent {
    render() {
        const { numberOfLines, isFb } = this.props
        return (
            <Container>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.props.data.map(card => (
                        <CardBamboo
                            card={card}
                            key={card.code}
                            numberOfLines={numberOfLines}
                            isFb={isFb}
                        />
                    ))}
                </ScrollView>
            </Container>
        )
    }
}

export default BigTextLayout
