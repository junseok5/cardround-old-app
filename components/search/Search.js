import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { Icon } from "expo"

const Container = styled.View``

const SearchWrap = styled.View`
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 4px;
    background: ${Colors.buttonBackground};
    flex-direction: row;
    align-items: center;
`

const SearchButton = styled.View`
    flex-direction: row;
    align-items: center;
`

const SText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.supportColor};
`

const Search = ({ openModal }) => {
    return (
        <Container>
            <TouchableWithoutFeedback onPress={openModal}>
                <SearchWrap>
                    <SearchButton>
                        <Icon.Feather
                            name="search"
                            size={20}
                            style={{ marginRight: 10 }}
                            color={Colors.supportColor}
                        />
                        <SText>검색</SText>
                    </SearchButton>
                </SearchWrap>
            </TouchableWithoutFeedback>
        </Container>
    )
}

export default Search
