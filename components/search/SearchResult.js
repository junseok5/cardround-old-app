import React from "react"
import styled from "styled-components"
import { FlatList } from "react-native"
import Loading from "../common/Loading"

const Container = styled.View`
    flex: 1;
    padding-top: 15px;
    padding-left: ${props => (props.isPadding ? "15px" : "0px")};
    padding-right: ${props => (props.isPadding ? "15px" : "0px")};
`

const Main = styled.View`
    flex: 1;
`

const SearchResult = ({
    loading,
    listData,
    keyExtractor,
    onEndReached,
    ListItem,
    target,
    isPadding = true
}) => {
    return (
        <Container isPadding={isPadding}>
            {loading && listData.length === 0 ? (
                <Loading isList={true} />
            ) : (
                <Main>
                    <FlatList
                        data={listData}
                        keyExtractor={keyExtractor}
                        renderItem={({ item, index }) => (
                            <ListItem
                                data={item}
                                target={target}
                                index={index}
                                key={item._id}
                            />
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
