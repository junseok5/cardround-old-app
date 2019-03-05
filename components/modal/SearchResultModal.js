import React from "react"
import styled from "styled-components"
import {
    ActivityIndicator,
    FlatList,
    Modal,
    TouchableWithoutFeedback
} from "react-native"
import { Icon } from "expo"
import SearchWebContainer from "../../containers/SearchWebContainer"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    padding-top: 3px;
    padding-left: 15px;
    padding-right: 15px;
`

const Header = styled.View`
    height: 55px;
    flex-direction: row;
    align-items: center;
`

const BackIcon = styled.View`
    margin-right: 10px;
`

const Main = styled.View`
    flex: 1;
`

const Loading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const SearchResultModal = ({
    visible,
    loading,
    websites,
    keyExtractor,
    onEndReached,
    closeModal,
    ListItem
}) => {
    return (
        <Modal
            animationType="none"
            visible={visible}
            onRequestClose={closeModal}
        >
            <Container>
                <Header>
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <BackIcon>
                            <Icon.Entypo
                                name="chevron-left"
                                size={30}
                                color={Colors.supportColor}
                            />
                        </BackIcon>
                    </TouchableWithoutFeedback>
                    <SearchWebContainer />
                </Header>
                {loading && websites.length === 0 ? (
                    <Loading>
                        <ActivityIndicator
                            size="large"
                            color={Colors.mainColor}
                        />
                    </Loading>
                ) : (
                    <Main>
                        <FlatList
                            data={websites}
                            keyExtractor={keyExtractor}
                            renderItem={({ item }) => (
                                <ListItem websiteData={item} key={item._id} />
                            )}
                            onEndReachedThreshold={0.6}
                            onEndReached={onEndReached}
                            showsVerticalScrollIndicator={false}
                        />
                    </Main>
                )}
            </Container>
        </Modal>
    )
}

export default SearchResultModal
