import React from "react"
import styled from "styled-components"
import Section from "../Section"
import { FlatList } from "react-native"
import { LazyloadScrollView, LazyloadImage } from "react-native-lazyload"

const Container = styled.View`
    padding-left: 10px;
`

const ItemContainer = styled.View`
    width: ${props => props.layoutWidth};
    margin-right: 10px;
`

const ImageWrap = styled.View`
    width: ${props => props.layoutWidth};
    height: ${props => props.layoutHeight};
    background-color: #ecf0f1;
`

const ItemRank = styled.View`
    width: ${props => props.layoutWidth};
    height: 20px;
    margin-bottom: 5px;
    background: #e74c3c;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ItemRankText = styled.Text`
    color: #fff;
    font-size: 13px;
    font-weight: bold;
`

const ItemTitle = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
    height: 18px;
    text-align: center;
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

class Item extends React.PureComponent {
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
            secondAddedInfoSize
        } = this.props
        return (
            <ItemContainer layoutWidth={layoutWidth}>
                <ImageWrap layoutWidth={layoutWidth} layoutHeight={layoutHeight}>
                    <LazyloadImage
                        host="board"
                        style={{
                            width: Number(layoutWidth),
                            height: Number(layoutHeight),
                            marginBottom: isRank ? 0 : 5
                        }}
                        source={{ uri: card.thumbnail }}
                    />
                </ImageWrap>
                {isRank && (
                    <ItemRank layoutWidth={layoutWidth}>
                        <ItemRankText>{card.secondAddedInfo}</ItemRankText>
                    </ItemRank>
                )}

                <ItemTitle weight={titleWeight} fontSize={titleSize}>
                    {card.title}
                </ItemTitle>

                {card.firstAddedInfo && (
                    <FirstAddedInfo
                        weight={firstAddedInfoWeight}
                        fontSize={firstAddedInfoSize}
                    >
                        {card.firstAddedInfo}
                    </FirstAddedInfo>
                )}

                {card.secondAddedInfo && !isRank && (
                    <SecondAddedInfo
                        weight={secondAddedInfoWeight}
                        fontSize={econdAddedInfoSize}
                    >
                        {card.secondAddedInfo}
                    </SecondAddedInfo>
                )}
            </ItemContainer>
        )
    }
}

class PhotoLayout extends React.PureComponent {
    render() {
        const {
            layoutWidth = "150",
            layoutHeight = "150",
            isRank = false,
            titleWeight = "normal",
            titleSize = "14px",
            firstAddedInfoWeight = "normal",
            firstAddedInfoSize = "14px",
            secondAddedInfoWeight = "normal",
            secondAddedInfoSize = "14px"
        } = this.props
        return (
            <Container>
                <LazyloadScrollView
                    name="card"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.props.data.map(card => (
                        <Item
                            card={card}
                            key={card.code}
                            layoutWidth={layoutWidth}
                            layoutHeight={layoutHeight}
                            isRank={isRank}
                            titleWeight={titleWeight}
                            titleSize={titleSize}
                            firstAddedInfoWeight={firstAddedInfoWeight}
                            firstAddedInfoSize={firstAddedInfoSize}
                            secondAddedInfoWeight={secondAddedInfoWeight}
                            secondAddedInfoSize={secondAddedInfoSize}
                            key={card.code}
                        />
                    ))}
                </LazyloadScrollView>
            </Container>
        )
    }
}

export default PhotoLayout
