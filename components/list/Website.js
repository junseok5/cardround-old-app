import React from "react"
import { Image, TouchableWithoutFeedback } from "react-native"
import { withNavigation } from "react-navigation"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import DefaultWebsiteThumbnail from "../common/DefaultWebsiteThumbnail"

const Container = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    align-items: center;
`

const Thumbnail = styled.View`
    width: 64px;
    height: 64px;
    /* border-radius: 4;
    border-width: 0.5px;
    border-color: ${Colors.thickBorder}; */
`

const MetaInfo = styled.View`
    padding-left: 15px;
`

const Name = styled.Text`
    font-size: 17px;
`

const Follower = styled.Text`
    color: ${Colors.supportColor};
    font-size: 13px;
`

const Website = ({ data, navigation }) => (
    <TouchableWithoutFeedback
        onPress={() =>
            navigation.navigate({
                routeName: "DetailWebsite",
                params: {
                    website: data
                }
            })
        }
    >
        <Container>
            <Thumbnail>
                {data.thumbnail ? (
                    <Image
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: 4,
                            resizeMode: "contain"
                        }}
                        source={{ uri: data.thumbnail }}
                    />
                ) : (
                    <DefaultWebsiteThumbnail websiteName={data.name} />
                )}
            </Thumbnail>
            <MetaInfo>
                <Name>{data.name}</Name>
                <Follower>팔로워 {data.follower}명</Follower>
            </MetaInfo>
        </Container>
    </TouchableWithoutFeedback>
)

export default withNavigation(Website)
