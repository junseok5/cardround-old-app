import React from "react"
import styled from "styled-components"
import { FlatList, TouchableWithoutFeedback } from "react-native"
import { Icon } from "expo"
import WebSearchHeaderContainer from "../../containers/WebSearchHeaderContainer"
import Colors from "../../constants/Colors"
import Loading from "../common/Loading"

const Container = styled.View`
    flex: 1;
    padding-top: 35px;
    padding-left: ${props => (props.isPadding ? "15px" : "0px")};
    padding-right: ${props => (props.isPadding ? "15px" : "0px")};
`

const Header = styled.View`
    padding-left: ${props => (!props.isPadding ? "15px" : "0px")};
    padding-right: ${props => (!props.isPadding ? "15px" : "0px")};
    padding-bottom: 15px;
    flex-direction: row;
    align-items: center;
`

const BackIcon = styled.View`
    margin-right: 10px;
`

const Main = styled.View`
    flex: 1;
`

const SearchResult = ({
    loading,
    listData,
    keyExtractor,
    onEndReached,
    closeScreen,
    ListItem,
    isPadding = true
}) => {
    return (
        <Container isPadding={isPadding}>
            <Header isPadding={isPadding}>
                <TouchableWithoutFeedback onPress={closeScreen}>
                    <BackIcon>
                        <Icon.Entypo
                            name="chevron-left"
                            size={30}
                            color={Colors.supportColor}
                        />
                    </BackIcon>
                </TouchableWithoutFeedback>
                <WebSearchHeaderContainer />
            </Header>
            {loading && listData.length === 0 ? (
                <Loading isList={true} />
            ) : (
                <Main>
                    <FlatList
                        data={listData}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <ListItem data={item} key={item._id} />
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

export default SearchResult
