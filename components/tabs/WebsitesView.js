import React from "react"
import styled from "styled-components"
import { Icon } from "expo"
import {
    ActivityIndicator,
    FlatList,
    TouchableWithoutFeedback
} from "react-native"
import { LazyloadScrollView } from "react-native-lazyload"
import Search from "../search/Search"
import SearchModal from "../modal/SearchModal"
import Menu from "../menu/Menu"
import WebRequestModal from "../modal/WebRequestModal"
import Website from "../website/Website"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    padding-top: 35px;
`

const Header = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.borderColor};
`

const Main = styled.View`
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;
`

// const WebsiteRequest = styled.View`
//     flex-direction: row;
//     justify-content: center;
//     padding-top: 6px;
//     padding-bottom: 6px;
//     margin-top: 10px;
//     margin-bottom: 10px;
//     background: ${Colors.buttonBackground};
//     border-radius: 4;
// `

const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const List = styled.View`
    flex: 1;
    padding-top: 10px;
    padding-bottom: 10px;
`

// const WRText = styled.Text`
//     font-weight: bold;
//     font-size: 17px;
//     color: ${Colors.supportColor};
// `

const menuArr = ["최신", "대학", "영화", "음악", "커뮤니티", "블로그", "쇼핑"]

const WebsitesView = ({ loading, data, keyExtractor, onEndReached }) => {
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
            ) : (
                <Main>
                    <WebRequestModal />
                    <LazyloadScrollView
                        name="website-scroll"
                        showsVerticalScrollIndicator={false}
                    >
                        {/* <TouchableWithoutFeedback>
                            <WebsiteRequest>
                                <Icon.Feather
                                    name="edit"
                                    size={20}
                                    style={{ marginRight: 3 }}
                                    color={Colors.supportColor}
                                />
                                <WRText>웹사이트 요청하기</WRText>
                            </WebsiteRequest>
                        </TouchableWithoutFeedback> */}
                        <List>
                            <FlatList
                                data={data}
                                keyExtractor={keyExtractor}
                                renderItem={({ item }) => (
                                    <Website
                                        websiteData={item}
                                        key={item._id}
                                    />
                                )}
                                onEndReachedThreshold={0.5}
                                onEndReached={onEndReached}
                            />
                        </List>
                    </LazyloadScrollView>
                </Main>
            )}
        </Container>
    )
}

export default WebsitesView
