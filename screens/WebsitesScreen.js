import React, { Component } from "react"
import styled from "styled-components"
import Search from "../components/common/Search"
import SearchModal from "../components/common/SearchModal"

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
            </Container>
        )
    }
}

export default WebsitesScreen
