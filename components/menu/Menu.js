import React from "react"
import styled from "styled-components"
import { ScrollView, TouchableWithoutFeedback } from "react-native"
import Colors from "../../constants/Colors"

const selected = "최신"

const Container = styled.View`
    padding: 10px 5px;
`

const MenuText = styled.Text`
    margin-right: 15px;
    font-size: 18px;
    font-weight: bold;
    color: ${props => (props.selected ? Colors.mainColor : Colors.supportColor)};
`

const Menu = ({ data }) => {
    return (
        <Container>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data.map((item, key) => (
                    <TouchableWithoutFeedback key={key}>
                        <MenuText selected={selected === item}>
                            {item}
                        </MenuText>
                    </TouchableWithoutFeedback>
                ))}
            </ScrollView>
        </Container>
    )
}

export default Menu
