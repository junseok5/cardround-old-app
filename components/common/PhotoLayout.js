import React, { PureComponent } from "react"
import styled from "styled-components"
import { ScrollView } from "react-native"
import CardPhoto from "../card/CardPhoto"
import { scale, verticalScale } from "react-native-size-matters"

const Container = styled.View`
    padding-left: 5px;
    padding-right: 5px;
`

class PhotoLayout extends PureComponent {
    render() {
        const {
            scrollHost,
            layoutWidth = scale(150),
            layoutHeight = verticalScale(150),
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
            <Container>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {this.props.data.map(card => (
                        <CardPhoto
                            card={card}
                            key={card.code}
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
                    ))}
                </ScrollView>
            </Container>
        )
    }
}

export default PhotoLayout
