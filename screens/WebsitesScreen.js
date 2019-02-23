import React, { Component } from "react"
import styled from "styled-components"
import Search from "../components/search/Search"
import SearchModal from "../components/search/SearchModal"
import Menu from "../components/menu/Menu"
import { LazyloadScrollView } from "react-native-lazyload"
import Website from "../components/website/Website"

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
        thumbnail:
            "http://www.snu.ac.kr/images/common/layout/logo.gif",
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
        thumbnail:
            "http://www.snu.ac.kr/images/common/layout/logo.gif",
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
        thumbnail:
            "http://www.snu.ac.kr/images/common/layout/logo.gif",
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
        thumbnail:
            "http://www.snu.ac.kr/images/common/layout/logo.gif",
        name: "서울대",
        follower: 73650
    }
]

const Container = styled.View`
    padding: 35px 15px 15px 15px;
    margin-bottom: 80px;
`

class WebsitesScreen extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <Search />
                <SearchModal />
                <Menu />
                <LazyloadScrollView
                    name="website-scroll"
                    showsVerticalScrollIndicator={false}
                >
                    {data.map(website => (
                        <Website websiteData={website} key={website._id} />
                    ))}
                </LazyloadScrollView>
            </Container>
        )
    }
}

export default WebsitesScreen
