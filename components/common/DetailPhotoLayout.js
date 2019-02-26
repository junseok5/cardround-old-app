import React, { PureComponent } from "react"
import styled from "styled-components"
import { ScrollView } from "react-native"
import CardPhoto from "../card/CardPhoto"

const Container = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
`

const Card = styled.View`
    margin-top: 10px;
    margin-bottom: 10px;
`

class DetailPhotoLayout extends PureComponent {
    render() {
        const {
            scrollHost,
            layoutWidth,
            layoutHeight,
            isRank = false,
            titleWeight = "normal",
            titleSize = "15px",
            firstAddedInfoWeight = "normal",
            firstAddedInfoSize = "14px",
            secondAddedInfoWeight = "normal",
            secondAddedInfoSize = "14px",
            textAlign = "center",
            numberOfLines = 2
        } = this.props
        return (
            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
            >
                <Container>
                    {this.props.data.map(card => (
                        <Card key={card.code}>
                            <CardPhoto
                                card={card}
                                scrollHost={scrollHost}
                                layoutWidth={layoutWidth}
                                layoutHeight={layoutHeight}
                                isRank={isRank}
                                titleWeight={titleWeight}
                                titleSize={titleSize}
                                firstAddedInfoWeight={firstAddedInfoWeight}
                                firstAddedInfoSize={firstAddedInfoSize}
                                secondAddedInfoWeight={secondAddedInfoWeight}
                                secondAddedInfoSize={secondAddedInfoSize}
                                textAlign={textAlign}
                                numberOfLines={numberOfLines}
                            />
                        </Card>
                    ))}
                </Container>
            </ScrollView>
        )
    }
}

export default DetailPhotoLayout
