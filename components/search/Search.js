import React from "react"
import { Icon } from "expo"
import {
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import Loading from "../common/Loading"

const { width } = Dimensions.get("window")

const Container = styled.View`
    flex-direction: column;
    padding: 35px 15px 15px 15px;
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
    background: #b8b8b8;
    border-radius: 50;
`

const Keywords = styled.View`
    padding-top: 10px;
`

const Keyword = styled.Text`
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 1px;
`

const Search = ({
    form,
    recentKeywords,
    loading,
    preview,
    error,
    closeScreen,
    onChangeForm,
    onSearch,
    clearRecentKeywords,
    onClickKeyword
}) => (
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
                    value={form}
                    onChangeText={onChangeForm}
                    onSubmitEditing={onSearch}
                    autoFocus
                />
            </SearchBox>
            <TouchableWithoutFeedback onPress={closeScreen}>
                <SearchCancel>
                    <CancelText>취소</CancelText>
                </SearchCancel>
            </TouchableWithoutFeedback>
        </SearchView>

        {!form ? (
            <SearchHelper>
                <SHContainer>
                    <Title>최근 검색어</Title>
                    <TouchableWithoutFeedback onPress={clearRecentKeywords}>
                        <DeleteButton>
                            <Icon.Feather name="x" size={13} color="white" />
                        </DeleteButton>
                    </TouchableWithoutFeedback>
                </SHContainer>
                <Keywords>
                    {recentKeywords.length > 0 &&
                        recentKeywords.map((recentKeyword, key) => (
                            <TouchableOpacity
                                key={key}
                                onPress={() => onClickKeyword(recentKeyword)}
                            >
                                <Keyword>{recentKeyword}</Keyword>
                            </TouchableOpacity>
                        ))}
                </Keywords>
            </SearchHelper>
        ) : (
            <SearchHelper>
                <Keywords>
                    {loading ? (
                        <Loading />
                    ) : (
                        !error &&
                        preview.map((keyword, key) => (
                            <TouchableOpacity
                                key={key}
                                onPress={() => onClickKeyword(keyword.name)}
                            >
                                <Keyword>{keyword.name}</Keyword>
                            </TouchableOpacity>
                        ))
                    )}
                </Keywords>
            </SearchHelper>
        )}
    </Container>
)

export default Search
