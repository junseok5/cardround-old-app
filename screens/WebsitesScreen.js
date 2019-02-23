import React, { Component } from "react"
import styled from "styled-components"
import Search from "../components/search/Search"
import SearchModal from "../components/search/SearchModal"
import Menu from "../components/menu/Menu";

const Container = styled.View`
    padding-top: 35px;
`

class WebsitesScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Search />
                <SearchModal />
                <Menu />
            </Container>
        )
    }
}

export default WebsitesScreen
