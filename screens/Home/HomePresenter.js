import React from "react"
import { FlatList } from "react-native"
import styled from "styled-components"
import Loading from "../../components/common/Loading"
import BoardContainer from "../../containers/BoardContainer"
import { Icon } from "expo"
import Colors from "../../constants/Colors"

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

const NotExists = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const Text = styled.Text`
    margin-top: 10px;
    font-size: 18px;
`

const HomePresenter = ({
    loading,
    boards,
    keyExtractor,
    onEndReached,
    onRefresh
}) => {
    return (
        <Container>
            {loading && boards.length === 0 ? (
                <Loading />
            ) : boards.length === 0 ? (
                <Main>
                    <NotExists>
                        <Icon.AntDesign
                            name="smileo"
                            size={45}
                            color={Colors.mainColor}
                        />
                        <Text>관심있는 보드를 팔로우 해보세요.</Text>
                    </NotExists>
                </Main>
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
                        refreshing={false}
                        onRefresh={onRefresh}
                        showsVerticalScrollIndicator={false}
                    />
                </Main>
            )}
        </Container>
    )
}

export default HomePresenter
