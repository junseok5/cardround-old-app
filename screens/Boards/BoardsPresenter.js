import React from "react"
import { FlatList } from "react-native"
import styled from "styled-components"
import Category from "../../components/category/Category"
import Previewboard from "../../components/list/Previewboard"
import Loading from "../../components/common/Loading"
import BoardSearchHeaderContainer from "../../containers/BoardSearchHeaderContainer"

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
    previewboards,
    loadingCategories,
    loadingPreviewboards,
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
            {loadingPreviewboards && previewboards.length === 0 ? (
                <Loading />
            ) : (
                <Main>
                    <FlatList
                        data={previewboards}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <Previewboard data={item} key={item._id} />
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
