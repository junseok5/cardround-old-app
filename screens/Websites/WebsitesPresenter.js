import React from "react"
import styled from "styled-components"
import { ActivityIndicator, FlatList } from "react-native"
import Menu from "../../components/menu/Menu"
import Website from "../../components/list/Website"
import Colors from "../../constants/Colors"
import SearchWebModalContainer from "../../containers/SearchWebModalContainer"
import SearchWebContainer from "../../containers/SearchWebContainer";

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

const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const WebsitesPresenter = ({
    loadingCategories,
    loadingWebsites,
    websites,
    categories,
    selected,
    keyExtractor,
    onEndReached,
    changeSelectedCategory,
}) => {
    return (
        <Container>
            <Header>
                <SearchWebContainer />
                <SearchWebModalContainer />
                {!loadingCategories && (
                    <Menu
                        selected={selected}
                        data={categories}
                        changeSelectedCategory={changeSelectedCategory}
                    />
                )}
            </Header>
            {loadingWebsites && websites.length === 0 ? (
                <Loading>
                    <ActivityIndicator size="large" color={Colors.mainColor} />
                </Loading>
            ) : (
                <Main>
                    <FlatList
                        data={websites}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <Website websiteData={item} key={item._id} />
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
