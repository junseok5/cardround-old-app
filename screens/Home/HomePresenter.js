import React from "react"
import { FlatList } from "react-native"
import styled from "styled-components"
import Loading from "../../components/common/Loading"
import BoardContainer from "../../containers/BoardContainer"

const Container = styled.View`
    flex: 1;
    padding-top: 24px;
`

const PageTitle = styled.Text`
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    font-size: 18px;
    font-weight: bold;
`

const Main = styled.View`
    flex: 1;
`

const HomePresenter = ({ loading, boards, keyExtractor, onEndReached }) => {
    return (
        <Container>
            {loading && boards.length === 0 ? (
                <Loading />
            ) : (
                <Main>
                    <FlatList
                        data={boards}
                        keyExtractor={keyExtractor}
                        ListHeaderComponent={<PageTitle>팔로우 보드</PageTitle>}
                        renderItem={({ item, index }) => (
                            <BoardContainer
                                data={item}
                                target="following"
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

export default HomePresenter
