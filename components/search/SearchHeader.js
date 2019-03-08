import React from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { Icon } from "expo"

const Container = styled.View`
    flex: 1;
    flex-direction: row;
`

const SearchWrap = styled.View`
    flex: 1;
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

const SearchHeader = ({ keyword, openSearchScreen }) => {
    return (
        <Container>
            <TouchableWithoutFeedback
                onPress={openSearchScreen}
            >
                <SearchWrap>
                    <SearchButton>
                        <Icon.Feather
                            name="search"
                            size={20}
                            style={{ marginRight: 10 }}
                            color={Colors.supportColor}
                        />
                        <SText>{keyword ? keyword : "검색"}</SText>
                    </SearchButton>
                </SearchWrap>
            </TouchableWithoutFeedback>
        </Container>
    )
}

export default SearchHeader
