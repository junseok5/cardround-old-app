import React, { Component } from "react"
import { TouchableWithoutFeedback } from "react-native"
import styled from "styled-components"
import { Icon } from "expo"

const Container = styled.View`
    /* padding-left: 15px; */
    /* padding-right: 15px; */
`

const SearchWrap = styled.View`
    height: 40px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 4px;
    background: #ecf0f1;
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
    color: #576574;
`

class Search extends Component {
    render() {
        return (
            <Container>
                <TouchableWithoutFeedback>
                    <SearchWrap>
                        <SearchButton>
                            <Icon.Feather
                                name="search"
                                size={20}
                                style={{ marginRight: 10 }}
                                color="#576574"
                            />
                            <SText>검색</SText>
                        </SearchButton>
                    </SearchWrap>
                </TouchableWithoutFeedback>
            </Container>
        )
    }
}

export default Search
