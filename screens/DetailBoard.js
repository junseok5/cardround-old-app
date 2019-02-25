import React, { Component } from "react"
import { Button } from "react-native"
import styled from "styled-components"
import Colors from "../constants/Colors"

const Container = styled.View``

const BoardInfo = styled.View`
    padding-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
`

const MetaWrap = styled.View`
    margin-bottom: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Meta = styled.View``

const Name = styled.View`
    margin-bottom: 3px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const BoardName = styled.Text`
    font-size: 24px;
    font-weight: bold;
`

const WebsiteName = styled.Text`
    font-size: 18px;
`

const FollowButton = styled.View``

const Follower = styled.Text``

const WebInfo = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`

const Thumbnail = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 50;
    border-color: ${Colors.borderColor};
`

class DetailBoard extends Component {
    static navigationOptions = {}

    render() {
        return (
            <Container>
                <BoardInfo>
                    <MetaWrap>
                        <Meta>
                            <Name>
                                <BoardName>남자 티셔츠</BoardName>
                                <WebsiteName> - 쿠팡</WebsiteName>
                            </Name>
                            <Follower>팔로워 2396명</Follower>
                        </Meta>
                        <FollowButton>
                            <Button
                                title="팔로우"
                                color={Colors.mainColor}
                                onPress={() => {}}
                            />
                        </FollowButton>
                    </MetaWrap>
                    <WebInfo>
                        <Thumbnail
                            source={{
                                uri:
                                    "http://image15.coupangcdn.com/image/mobile/v3/img_fb_like.png"
                            }}
                        />
                    </WebInfo>
                </BoardInfo>
            </Container>
        )
    }
}

export default DetailBoard
