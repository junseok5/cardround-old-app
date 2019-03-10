import React from "react"
import { FlatList } from "react-native"
import styled from "styled-components"
import WebsiteContainer from "../../containers/WebsiteContainer"
import WebSearchHeaderContainer from "../../containers/WebSearchHeaderContainer"
import Category from "../../components/category/Category"
import Loading from "../../components/common/Loading"

const Container = styled.View`
    flex: 1;
    padding-top: 35px;
    padding-left: 15px;
    padding-right: 15px;
`

const Header = styled.View`
    height: 85px;
`

const Main = styled.View`
    flex: 1;
`

const WebsitesPresenter = ({
    websites,
    loadingCategories,
    loadingWebsites,
    categories,
    selected,
    keyExtractor,
    onEndReached,
    changeSelectedCategory
}) => {
    return (
        <Container>
            <Header>
                <WebSearchHeaderContainer />
                {!loadingCategories && (
                    <Category
                        selected={selected}
                        data={categories}
                        changeSelectedCategory={changeSelectedCategory}
                    />
                )}
            </Header>
            {loadingWebsites && websites.length === 0 ? (
                <Loading />
            ) : (
                <Main>
                    <FlatList
                        data={websites}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <WebsiteContainer data={item} key={item._id} />
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

export default WebsitesPresenter
