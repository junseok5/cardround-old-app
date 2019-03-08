import React from "react"
import styled from "styled-components"
import { ScrollView, TouchableWithoutFeedback } from "react-native"
import Colors from "../../constants/Colors"

const Container = styled.View`
    padding: 10px 5px;
`

const CategoryText = styled.Text`
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
    color: ${props =>
        props.selected ? Colors.mainColor : Colors.supportColor};
`

const Category = ({ selected, data, changeSelectedCategory }) => (
    <Container>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback
                onPress={() => changeSelectedCategory("인기")}
            >
                <CategoryText selected={selected === "인기"}>인기</CategoryText>
            </TouchableWithoutFeedback>
            {data.map((item, key) => (
                <TouchableWithoutFeedback
                    key={key}
                    onPress={() => changeSelectedCategory(item.name)}
                >
                    <CategoryText selected={selected === item.name}>
                        {item.name}
                    </CategoryText>
                </TouchableWithoutFeedback>
            ))}
        </ScrollView>
    </Container>
)

export default Category
