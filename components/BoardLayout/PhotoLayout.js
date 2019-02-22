import React from "react"
import styled from "styled-components"
import Section from "../Section"
import { FlatList } from 'react-native'

const Container = styled.View`
    padding-left: 10px;
`

const ItemContainer = styled.View`
    width: ${props => props.layoutWidth};
    margin-right: 10px;
`

const ItemPhoto = styled.Image`
    width: ${props => props.layoutWidth};
    height: ${props => props.layoutHeight};
    margin-bottom: ${props => (!props.isRank ? "5px" : "0px")};
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
`

const FirstAddedInfo = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
`

const SecondAddedInfo = styled.Text`
    font-weight: ${props => props.weight};
    font-size: ${props => props.fontSize};
`

class Item extends React.PureComponent {
    render() {
        const {
            photoUrl,
            layoutWidth = "150px",
            layoutHeight = "150px",
            isRank = false,
            title,
            titleWeight = "normal",
            titleSize = "14px",
            firstAddedInfo,
            firstAddedInfoWeight = "normal",
            firstAddedInfoSize = "14px",
            Link,
            secondAddedInfo,
            secondAddedInfoWeight = "normal",
            secondAddedInfoSize = "14px"
        } = this.props.card
        return (
            <ItemContainer layoutWidth={layoutWidth}>
                <ItemPhoto
                    resizeMethod="resize"
                    layoutWidth={layoutWidth}
                    layoutHeight={layoutHeight}
                    isRank={isRank}
                    source={{
                        uri: photoUrl
                    }}
                />
                {isRank && (
                    <ItemRank layoutWidth={layoutWidth}>
                        <ItemRankText>No.1</ItemRankText>
                    </ItemRank>
                )}

                <ItemTitle weight={titleWeight} fontSize={titleSize}>
                    {title}
                </ItemTitle>

                {firstAddedInfo && (
                    <FirstAddedInfo
                        weight={firstAddedInfoWeight}
                        fontSize={firstAddedInfoSize}
                    >
                        {firstAddedInfo}
                    </FirstAddedInfo>
                )}

                {secondAddedInfo && (
                    <SecondAddedInfo
                        weight={secondAddedInfoWeight}
                        fontSize={secondAddedInfoSize}
                    >
                        {secondAddedInfo}
                    </SecondAddedInfo>
                )}
            </ItemContainer>
        )
    }
}

class PhotoLayout extends React.PureComponent {
    _keyExtractor = (item, index) => item.code

    _renderItem = ({item}) => (
        <Item
            card={item}
        />
    )

    render() {
        return (
            <Container>
                {/* <Section horizontal={true}> */}
                    <FlatList
                        data={this.props.data}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                {/* </Section> */}
            </Container>
        )
    }
}

export default PhotoLayout
