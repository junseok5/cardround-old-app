import React, { Component } from "react"
import { Dimensions, Modal, TouchableOpacity } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { Icon } from "expo"

const { width } = Dimensions.get("window")

const Container = styled.View`
    padding: 15px;
`

const SearchView = styled.View`
    flex-direction: row;
    align-items: center;
`

const SearchBox = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    margin-right: 10px;
    border-radius: 4px;
    background: ${Colors.buttonBackground};
    flex-direction: row;
    align-items: center;
`

const SearchInput = styled.TextInput`
    width: ${width - 125};
    height: 40px;
    padding-left: 10px;
    padding-right: 10px;
    background: ${Colors.buttonBackground};
    font-size: 17px;
    font-weight: bold;
`

const SearchCancel = styled.View`
    width: 65px;
`

const CancelText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${Colors.supportColor};
`

const SearchHelper = styled.View`
    padding-top: 30px;
    padding-left: 5px;
    padding-right: 5px;
`

const SHContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const Title = styled.Text`
    font-size: 15px;
`

const DeleteButton = styled.View`
    padding: 3px;
    background: #B8B8B8;
    border-radius: 50;
`

const RecentKeywords = styled.View`
    padding-top: 10px;
`

const RecentKeyword = styled.Text`
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
`

class SearchModal extends Component {
    state = {
        visible: false
    }

    _closeModal = () => {
        this.setState({ visible: false })
    }

    render() {
        return (
            <Modal
                animationType="none"
                visible={this.state.visible}
                onRequestClose={this._closeModal}
            >
                <Container>
                    <SearchView>
                        <SearchBox>
                            <Icon.Feather
                                name="search"
                                size={20}
                                color={Colors.supportColor}
                            />
                            <SearchInput
                                placeholder="검색"
                                placeholderTextColor={Colors.supportColor}
                            />
                        </SearchBox>
                        <SearchCancel>
                            <CancelText>취소</CancelText>
                        </SearchCancel>
                    </SearchView>
                    <SearchHelper>
                        <SHContainer>
                            <Title>최근 검색어</Title>
                            <DeleteButton>
                                <Icon.Feather
                                    name="x"
                                    size={13}
                                    color="white"
                                />
                            </DeleteButton>
                        </SHContainer>
                        <RecentKeywords>
                            <TouchableOpacity>
                                <RecentKeyword>충남대</RecentKeyword>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <RecentKeyword>서울대</RecentKeyword>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <RecentKeyword>하버드대</RecentKeyword>
                            </TouchableOpacity>
                        </RecentKeywords>
                    </SearchHelper>
                </Container>
            </Modal>
        )
    }
}

export default SearchModal
