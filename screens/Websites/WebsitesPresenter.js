import React from "react"
import styled from "styled-components"
import { ActivityIndicator, Button, FlatList } from "react-native"
import Search from "../../components/search/Search"
import SearchModal from "../../components/modal/SearchModal"
import Menu from "../../components/menu/Menu"
import Website from "../../components/list/Website"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    padding-top: 35px;
    padding-left: 15px;
    padding-right: 15px;
`

const Header = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.borderColor};
`

const Main = styled.View`
    flex: 1;
`

const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const menuArr = ["최신", "대학", "영화", "음악", "커뮤니티", "블로그", "쇼핑"]

const WebsitesPresenter = ({
    loading,
    data,
    listError,
    refetchWebsiteList,
    keyExtractor,
    onEndReached
}) => {
    return (
        <Container>
            <Header>
                <Search />
                <SearchModal />
                <Menu data={menuArr} />
            </Header>
            {loading ? (
                <Loading>
                    <ActivityIndicator size="large" color={Colors.mainColor} />
                </Loading>
            ) : listError ? (
                <Button
                    title="다시 시도"
                    color={Colors.buttonBackground}
                    onPress={refetchWebsiteList}
                />
            ) : (
                <Main>
                    <FlatList
                        data={data}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <Website websiteData={item} key={item._id} />
                        )}
                        onEndReachedThreshold={0.7}
                        onEndReached={onEndReached}
                        showsVerticalScrollIndicator={false}
                    />
                </Main>
            )}
        </Container>
    )
}

export default WebsitesPresenter
