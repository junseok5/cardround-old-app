import React, { Component } from "react"
import styled from "styled-components"
import { TouchableWithoutFeedback } from "react-native"
import Search from "../components/search/Search"
import SearchModal from "../components/modal/SearchModal"
import Menu from "../components/menu/Menu"
import { LazyloadScrollView } from "react-native-lazyload"
import Website from "../components/website/Website"
import WebRequestModal from "../components/modal/WebRequestModal"
import Colors from "../constants/Colors"
import { Icon } from "expo"

const data = [
    {
        _id: "1",
        thumbnail:
            "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
        name: "네이버",
        follower: 81152
    },
    {
        _id: "2",
        thumbnail:
            "http://computer.cnu.ac.kr/files/attach/images/15005/dded82bfbb1de1763f4f03aa1604d2ad.png",
        name: "충남대 컴퓨터융합학부",
        follower: 432
    },
    {
        _id: "3",
        thumbnail: "http://www.snu.ac.kr/images/common/layout/logo.gif",
        name: "서울대",
        follower: 73650
    },
    {
        _id: "4",
        thumbnail:
            "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
        name: "네이버",
        follower: 81152
    },
    {
        _id: "5",
        thumbnail:
            "http://computer.cnu.ac.kr/files/attach/images/15005/dded82bfbb1de1763f4f03aa1604d2ad.png",
        name: "충남대 컴퓨터융합학부",
        follower: 432
    },
    {
        _id: "6",
        thumbnail: "http://www.snu.ac.kr/images/common/layout/logo.gif",
        name: "서울대",
        follower: 73650
    },
    {
        _id: "7",
        thumbnail:
            "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
        name: "네이버",
        follower: 81152
    },
    {
        _id: "8",
        thumbnail:
            "http://computer.cnu.ac.kr/files/attach/images/15005/dded82bfbb1de1763f4f03aa1604d2ad.png",
        name: "충남대 컴퓨터융합학부",
        follower: 432
    },
    {
        _id: "9",
        thumbnail: "http://www.snu.ac.kr/images/common/layout/logo.gif",
        name: "서울대",
        follower: 73650
    },
    {
        _id: "10",
        thumbnail:
            "https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png",
        name: "네이버",
        follower: 81152
    },
    {
        _id: "11",
        thumbnail:
            "http://computer.cnu.ac.kr/files/attach/images/15005/dded82bfbb1de1763f4f03aa1604d2ad.png",
        name: "충남대 컴퓨터융합학부",
        follower: 432
    },
    {
        _id: "12",
        thumbnail: "http://www.snu.ac.kr/images/common/layout/logo.gif",
        name: "서울대",
        follower: 73650
    }
]

const Container = styled.View`
    padding-top: 35px;
    margin-bottom: 80px;
`

const Header = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.borderColor};
`

const Main = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    /* margin-bottom: 100px; */
`

const WebsiteRequest = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: ${Colors.buttonBackground};
    border-radius: 4;
`

const WRText = styled.Text`
    font-weight: bold;
    font-size: 17px;
    color: ${Colors.supportColor};
`

const menuArr = ["최신", "대학", "영화", "음악", "커뮤니티", "블로그", "쇼핑"]

class WebsitesScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Header>
                    <Search />
                    <SearchModal />
                    <Menu data={menuArr} />
                </Header>
                <Main>
                    <WebRequestModal />
                    <LazyloadScrollView
                        name="website-scroll"
                        showsVerticalScrollIndicator={false}
                    >
                        <TouchableWithoutFeedback>
                            <WebsiteRequest>
                                <Icon.Feather
                                    name="edit"
                                    size={20}
                                    style={{ marginRight: 3 }}
                                    color={Colors.supportColor}
                                />
                                <WRText>웹사이트 요청하기</WRText>
                            </WebsiteRequest>
                        </TouchableWithoutFeedback>
                        {data.map(website => (
                            <Website websiteData={website} key={website._id} />
                        ))}
                    </LazyloadScrollView>
                </Main>
            </Container>
        )
    }
}

export default WebsitesScreen
