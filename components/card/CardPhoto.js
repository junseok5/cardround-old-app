import React, { PureComponent } from "react"
import styled from "styled-components"
import { LazyloadImage } from "react-native-lazyload"

const Container = styled.View`
    width: ${props => props.layoutWidth};
    margin-right: 10px;
`

const ImageWrap = styled.View`
    width: ${props => props.layoutWidth};
    height: ${props => props.layoutHeight};
    margin-bottom: ${props => (props.isRank ? "0" : "5px")};
    background-color: #ecf0f1;
`

const Rank = styled.View`
    width: ${props => props.layoutWidth};
    height: 20px;
    margin-bottom: 5px;
    background: #e74c3c;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const RankText = styled.Text`
    color: #fff;
    font-size: 13px;
    font-weight: bold;
`

const Title = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.textAlign};
`

const FirstAddedInfo = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
    text-align: center;
`

const SecondAddedInfo = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
    text-align: center;
`

class CardPhoto extends PureComponent {
    render() {
        const {
            card,
            layoutWidth,
            layoutHeight,
            isRank,
            titleWeight,
            titleSize,
            firstAddedInfoWeight,
            firstAddedInfoSize,
            secondAddedInfoWeight,
            secondAddedInfoSize,
            textAlign,
            numberOfLines
        } = this.props

        return (
            <Container layoutWidth={layoutWidth}>
                <ImageWrap
                    layoutWidth={layoutWidth}
                    layoutHeight={layoutHeight}
                    isRank={isRank}
                >
                    <LazyloadImage
                        host="home-scroll"
                        style={{
                            width: Number(layoutWidth),
                            height: Number(layoutHeight)
                        }}
                        source={{ uri: card.thumbnail }}
                    />
                </ImageWrap>
                {isRank && (
                    <Rank layoutWidth={layoutWidth}>
                        <RankText numberOfLines={1}>
                            {card.secondAddedInfo}
                        </RankText>
                    </Rank>
                )}

                <Title
                    numberOfLines={numberOfLines}
                    weight={titleWeight}
                    fontSize={titleSize}
                    textAlign={textAlign}
                >
                    {card.title}
                </Title>

                {card.firstAddedInfo && (
                    <FirstAddedInfo
                        numberOfLines={1}
                        weight={firstAddedInfoWeight}
                        fontSize={firstAddedInfoSize}
                    >
                        {card.firstAddedInfo}
                    </FirstAddedInfo>
                )}

                {card.secondAddedInfo && !isRank && (
                    <SecondAddedInfo
                        numberOfLines={1}
                        weight={secondAddedInfoWeight}
                        fontSize={secondAddedInfoSize}
                    >
                        {card.secondAddedInfo}
                    </SecondAddedInfo>
                )}
            </Container>
        )
    }
}

export default CardPhoto
