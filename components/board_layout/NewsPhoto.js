import React from "react"
import styled from "styled-components"
import Section from "../Section"

const Container = styled.View`
    padding-left: 10px;
`

const ItemContainer = styled.View`
    margin-right: 10px;
`

const ItemPhoto = styled.Image`
    width: 200px;
    height: 150px;
    margin-bottom: 5px;
`

const ItemTitle = styled.Text`
    font-size: 14px;
`

const Item = () => {
    return (
        <ItemContainer>
            <ItemPhoto
                source={{
                    uri:
                        "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg"
                }}
            />
            <ItemTitle>타이틀</ItemTitle>
        </ItemContainer>
    )
}

const NewsPhoto = () => {
    return (
        <Container>
            <Section>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </Section>
        </Container>
    )
}

export default NewsPhoto
