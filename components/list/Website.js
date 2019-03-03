import React, { Component } from "react"
import { Image, TouchableWithoutFeedback } from "react-native"
import { withNavigation } from "react-navigation"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    align-items: center;
`

const Thumbnail = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 4;
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

class Website extends Component {
    render() {
        const { websiteData } = this.props
        return (
            <TouchableWithoutFeedback
                onPress={() =>
                    this.props.navigation.navigate({
                        routeName: "DetailWebsite",
                        params: {
                            websiteData
                        }
                    })
                }
            >
                <Container>
                    <Thumbnail>
                        <Image
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: 4,
                                resizeMode: "contain"
                            }}
                            source={{ uri: websiteData.thumbnail }}
                        />
                    </Thumbnail>
                    <MetaInfo>
                        <Name>{websiteData.name}</Name>
                        <Follower>팔로워 {websiteData.follower}명</Follower>
                    </MetaInfo>
                </Container>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(Website)