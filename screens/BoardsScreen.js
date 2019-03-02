import React, { Component } from "react"
import { RefreshControl } from "react-native"
import styled from "styled-components"
import Search from "../components/search/Search"
import SearchModal from "../components/modal/SearchModal"
import Menu from "../components/menu/Menu"
import { LazyloadScrollView } from "react-native-lazyload"
import PreviewBoard from "../components/previewboard/PreviewBoard"
import Colors from "../constants/Colors"

const Container = styled.View`
    padding-top: 35px;
    margin-bottom: 80px;
`

const Header = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.borderColor};
`

const menuArr = ["추천", "만화", "영화", "음악", "애니", "요리", "쇼핑", "운동"]

class BoardsScreen extends Component {
    static navigationOptions = {
        header: null
    }

    state = {
        refreshing: false
    }

    _onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 1000)
    }

    render() {
        return (
            <Container>
                <Header>
                    <Search />
                    <SearchModal />
                    <Menu data={menuArr} />
                </Header>
                <LazyloadScrollView
                    name="boards-scroll"
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                >
                    {data.map((previewboard, key) => (
                        <PreviewBoard
                            previewboardData={previewboard}
                            scrollHost="boards-scroll"
                            key={key}
                        />
                    ))}
                </LazyloadScrollView>
            </Container>
        )
    }
}

export default BoardsScreen
