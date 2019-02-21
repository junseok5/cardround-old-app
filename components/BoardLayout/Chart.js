import React from "react"
import styled from "styled-components"
import Section from "../Section"

const Container = styled.View`
    padding-left: 10px;
`

const ItemContainer = styled.View`
    width: 110px;
    margin-right: 10px;
`

const ItemPhoto = styled.Image`
    width: 110px;
    height: 160px;
`

const ItemRank = styled.View`
    width: 110px;
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
    font-size: 14px;
    height: 34px;
`

const Item = () => {
    return (
        <ItemContainer>
            
            <ItemPhoto
                source={{
                    uri: "http://contents.cgv.co.kr/Upload/Movie/38970/p.gif"
                }}
            />
            <ItemRank>
                <ItemRankText>No.1</ItemRankText>
            </ItemRank>
            <ItemTitle>해리포터와 비밀의 방해리포터와 비밀의 방</ItemTitle>
        </ItemContainer>
    )
}

const Chart = () => {
    return (
        <Container>
            <Section horizontal={true}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Section>
        </Container>
    )
}

export default Chart
