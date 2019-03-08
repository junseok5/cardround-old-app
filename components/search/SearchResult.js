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
    padding-left: 15px;
    padding-right: 15px;
`

const Header = styled.View`
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
    websites,
    keyExtractor,
    onEndReached,
    closeScreen,
    ListItem
}) => {
    return (
        <Container>
            <Header>
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
            {loading && websites.length === 0 ? (
                <Loading isList={true} />
            ) : (
                <Main>
                    <FlatList
                        data={websites}
                        keyExtractor={keyExtractor}
                        renderItem={({ item }) => (
                            <ListItem website={item} key={item._id} />
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
