import React, { PureComponent } from "react"
import styled from "styled-components"
import { ScrollView } from 'react-native'
// import { LazyloadScrollView } from "react-native-lazyload"
import CardPhoto from "../card/CardPhoto"

const Container = styled.View`
    padding-left: 10px;
`

class PhotoLayout extends PureComponent {
    render() {
        const {
            scrollHost,
            layoutWidth = "150",
            layoutHeight = "150",
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
                    // name="card"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
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
