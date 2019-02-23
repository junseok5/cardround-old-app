import React, { Component } from "react"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { LazyloadImage } from "react-native-lazyload"

const Container = styled.View`
    padding-top: 5px;
    padding-bottom: 5px;
    flex-direction: row;
    align-items: center;
`

const Thumbnail = styled.View`
    width: 70px;
    height: 70px;
    background: ${Colors.thumbnail};
    border-radius: 4;
`

const MetaInfo = styled.View`
    padding-left: 15px;
`

const Name = styled.Text`
    font-size: 18px;
`

const Follower = styled.Text`
    color: ${Colors.supportColor};
`

class Website extends Component {
    render() {
        const { websiteData } = this.props
        return (
            <Container>
                <Thumbnail>
                    <LazyloadImage
                        host="website-scroll"
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 4
                        }}
                        source={{ uri: websiteData.thumbnail }}
                    />
                </Thumbnail>
                <MetaInfo>
                    <Name>{websiteData.name}</Name>
                    <Follower>팔로워 {websiteData.follower}명</Follower>
                </MetaInfo>
            </Container>
        )
    }
}

export default Website
