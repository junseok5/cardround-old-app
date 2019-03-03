import React from "react"
import styled from "styled-components"
import PreviewBoard from "../previewboard/PreviewBoard";
import Colors from "../../constants/Colors";
import { LazyloadScrollView } from "react-native-lazyload"

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
    border-radius: 50;
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

const Follower = styled.Text``

const DetailWebsite = () => {
    return (
        <Container>
            <LazyloadScrollView
                name="website-scroll"
                showsVerticalScrollIndicator={false}
            >
                <WebsiteInfo>
                    <Thumbnail
                        source={{
                            uri:
                                "http://image15.coupangcdn.com/image/mobile/v3/img_fb_like.png"
                        }}
                    />
                    <MetaWrap>
                        <Meta>
                            <WebsiteName>쿠팡</WebsiteName>
                            <Follower>팔로워 22000명</Follower>
                        </Meta>
                    </MetaWrap>
                </WebsiteInfo>
                {data.map((previewboard, key) => (
                    <PreviewBoard
                        previewboardData={previewboard}
                        scrollHost="website-scroll"
                        key={key}
                    />
                ))}
            </LazyloadScrollView>
        </Container>
    )
}

export default DetailWebsite
