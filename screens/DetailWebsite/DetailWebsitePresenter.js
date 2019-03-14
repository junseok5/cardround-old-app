import React from "react"
import { FlatList, ScrollView } from "react-native"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import Loading from "../../components/common/Loading"
import BoardContainer from "../../containers/BoardContainer"

const Container = styled.View``

const WebsiteInfo = styled.View`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
`

const Thumbnail = styled.Image`
    width: 80px;
    height: 80px;
    border-width: 0.5px;
    border-radius: 4;
    border-color: ${Colors.thickBorder};
`

const MetaWrap = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Meta = styled.View`
    padding-left: 20px;
`

const WebsiteName = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

const DetailWebsitePresenter = ({
    loading,
    website,
    boards,
    keyExtractor,
    onEndReached,
    onRefresh
}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <WebsiteInfo>
                    <Thumbnail
                        source={{
                            uri: website.thumbnail
                        }}
                        resizeMode="contain"
                    />
                    <MetaWrap>
                        <Meta>
                            <WebsiteName>{website.name}</WebsiteName>
                        </Meta>
                    </MetaWrap>
                </WebsiteInfo>
                {loading ? (
                    <Loading />
                ) : (
                    <FlatList
                        data={boards}
                        keyExtractor={keyExtractor}
                        renderItem={({ item, index }) => (
                            <BoardContainer
                                data={item}
                                target="website"
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
                )}
            </Container>
        </ScrollView>
    )
}

export default DetailWebsitePresenter
