import React from "react"
import { FlatList } from "react-native"
import styled from "styled-components"
import Category from "../../components/category/Category"
import Loading from "../../components/common/Loading"
import BoardSearchHeaderContainer from "../../containers/BoardSearchHeaderContainer"
import Board from "../../components/list/Board"

const Container = styled.View`
    flex: 1;
    padding-top: 35px;
`

const Header = styled.View`
    height: 85px;
    padding-left: 15px;
    padding-right: 15px;
`

const Main = styled.View`
    flex: 1;
`

const BoardsPresenter = ({
    boards,
    loadingCategories,
    loadingBoards,
    categories,
    selected,
    keyExtractor,
    onEndReached,
    changeSelectedCategory
}) => {
    return (
        <Container>
            <Header>
                <BoardSearchHeaderContainer />
                {!loadingCategories && (
                    <Category
                        selected={selected}
                        data={categories}
                        changeSelectedCategory={changeSelectedCategory}
                    />
                )}
            </Header>
            {loadingBoards && boards.length === 0 ? (
                <Loading />
            ) : (
                <Main>
                    <FlatList
                        data={boards}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <Board data={item} key={item._id} />
                        )}
                        onEndReachedThreshold={0.6}
                        onEndReached={onEndReached}
                        showsVerticalScrollIndicator={false}
                    />
                </Main>
            )}
        </Container>
    )
}

export default BoardsPresenter
