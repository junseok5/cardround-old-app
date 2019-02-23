import React from "react"
import styled from "styled-components"
import { ScrollView, TouchableWithoutFeedback } from "react-native"
import Colors from "../../constants/Colors"

const selected = "최신"

const Container = styled.View`
    padding: 10px 20px;
`

const MenuText = styled.Text`
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
    color: ${props =>
        props.selected ? Colors.mainColor : Colors.supportColor};
`

const Menu = () => {
    return (
        <Container>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "최신"}>최신</MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "대학"}>대학</MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "영화"}>영화</MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "음악"}>음악</MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "커뮤니티"}>
                        커뮤니티
                    </MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "블로그"}>블로그</MenuText>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <MenuText selected={selected === "쇼핑"}>쇼핑</MenuText>
                </TouchableWithoutFeedback>
            </ScrollView>
        </Container>
    )
}

export default Menu
