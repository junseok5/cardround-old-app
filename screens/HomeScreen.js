import React from "react"
import styled from "styled-components"
import PreviewBoard from "../components/previewboard/PreviewBoard"
import { LazyloadScrollView } from "react-native-lazyload"
import SearchModal from "../components/common/SearchModal";

const Container = styled.View`
    padding-top: 40px;
    padding-bottom: 10px;
`

const HContainer = styled.View`
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`

const PageTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
`

const data = [
    {
        _id: "1",
        name: "학사공지",
        link: "http://computer.cnu.ac.kr/index.php?mid=notice",
        layoutType: "OLD_BOARD",
        follower: "423",
        cards: [
            {
                code: "1",
                title: "[★★★ 실전코딩(3월4일(월) 12시 수업 안내 ★★★]",
                firstAddedInfo: "58",
                publishedDate: "2019.02.22"
            },
            {
                code: "2",
                title: "[★★★ 2019학년도 1학기 보충 강의 일정 안내 ★★★]",
                firstAddedInfo: "99",
                publishedDate: "2019.02.21"
            },
            {
                code: "3",
                title:
                    "[졸업논문] (2019.2.8.(금) 현재) 2019 졸업프로젝트 선발 확정 팀 명단 확인 (2019.2.15.(금) 18시까지)",
                firstAddedInfo: "460",
                publishedDate: "2019.02.11"
            },
            {
                code: "4",
                title:
                    "[졸업논문] 추가기간-2019 전기 졸업논문을 위한 졸업프로젝트 신청서 제출 안내 2.15.(금) 18시까지)",
                firstAddedInfo: "297",
                publishedDate: "2019.02.11"
            }
        ],
        websiteThumbnail:
            "http://computer.cnu.ac.kr/files/attach/images/104/bfccd06afb74a34248b41527fbc82012.png",
        websiteName: "충남대 컴퓨터융합학부"
    },
    {
        _id: "2",
        name: "무비차트",
        link: "http://www.cgv.co.kr/movies/",
        layoutType: "CHART",
        follower: "18812",
        cards: [
            {
                code: "1",
                thumbnail:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81616/81616_185.jpg",
                title: "사바하",
                firstAddedInfo: "예매율 27.4%",
                secondAddedInfo: "No.1"
            },
            {
                code: "2",
                thumbnail: "http://contents.cgv.co.kr/Upload/Movie/38970/p.gif",
                title: "해리포터와 비밀의 방",
                firstAddedInfo: "예매율 16.8%",
                secondAddedInfo: "No.2"
            },
            {
                code: "3",
                thumbnail:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81581/81581_185.jpg",
                title: "증인",
                firstAddedInfo: "예매율 13.8%",
                secondAddedInfo: "No.3"
            },
            {
                code: "4",
                thumbnail:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81552/81552_185.jpg",
                title: "극한직업",
                firstAddedInfo: "예매율 12.0%",
                secondAddedInfo: "No.4"
            },
            {
                code: "5",
                thumbnail:
                    "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81585/81585_185.jpg",
                title: "신데렐라 - 마법 반지의 비밀",
                firstAddedInfo: "예매율 4.0%",
                secondAddedInfo: "No.5"
            }
        ],
        websiteThumbnail: "http://img.cgv.co.kr/R2014/images/title/h1_cgv.png",
        websiteName: "CGV"
    },
    {
        _id: "3",
        name: "속보",
        link: "http://news.jtbc.joins.com/section/list.aspx?scode=",
        layoutType: "NEWS_PHOTO",
        follower: "34223",
        cards: [
            {
                code: "1",
                thumbnail:
                    "http://photo.jtbc.joins.com/news/2019/02/23/20190223000413008.jpg.tn350.jpg",
                title: '"갤럭시S10 사전예약 사은품 선정으로 온라인 시장 관심"'
            },
            {
                code: "2",
                thumbnail:
                    "http://photo.jtbc.joins.com/news/2019/02/22/20190222210012870.jpg.tn350.jpg",
                title:
                    "[핸드볼리그] '송지은 7골' 인천시청, 경남 제압하고 4위 등극"
            },
            {
                code: "3",
                thumbnail:
                    "http://photo.jtbc.joins.com/news/2019/02/22/20190222210012870.jpg.tn350.jpg",
                title:
                    "[핸드볼리그] '송지은 7골' 인천시청, 경남 제압하고 4위 등극"
            },
            {
                code: "4",
                thumbnail:
                    "http://photo.jtbc.joins.com/news/2019/02/22/201902222048072321_LC.jpg.tn350.jpg",
                title: "소득격차 키우는 '빈곤 노인 증가'…지원금도 '사각지대'"
            }
        ],
        websiteThumbnail:
            "https://yt3.ggpht.com/a-/AAuE7mD7R8VKzwDqZb9MQylLs5c0RLriDTKawjoPqQ=s288-mo-c-c0xffffffff-rj-k-no",
        websiteName: "JTBC News"
    },
    {
        _id: "4",
        name: "셔츠/블라우스",
        link: "https://store.musinsa.com/app/items/lists/001002",
        layoutType: "SHOP_PHOTO",
        follower: "51422",
        cards: [
            {
                code: "1",
                thumbnail:
                    "http://image.musinsa.com/images/goods_img/20180917/859956/859956_1_125.jpg",
                title: "다이아몬드 레이라",
                firstAddedInfo: "48000원"
            },
            {
                code: "2",
                thumbnail:
                    "http://image.musinsa.com/images/goods_img/20180810/826451/826451_6_125.jpg",
                title: "다이아몬드 레이라",
                firstAddedInfo: "46000원"
            },
            {
                code: "3",
                thumbnail:
                    "http://image.musinsa.com/images/goods_img/20180201/707695/707695_1_125.jpg",
                title: "로맨틱크라운",
                firstAddedInfo: "64000원"
            },
            {
                code: "4",
                thumbnail:
                    "http://image.musinsa.com/images/goods_img/20180917/859949/859949_1_125.jpg",
                title: "다이아몬드 레이라",
                firstAddedInfo: "48000원"
            }
        ],
        websiteThumbnail:
            "http://image.musinsa.com/mfile_s01/fb/share_musinsa.png",
        websiteName: "무신사 스토어"
    }
]

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <Container>
                <SearchModal />
                {/* <LazyloadScrollView
                    name="home-scroll"
                    showsHorizontalScrollIndicator={false}
                >
                    <HContainer>
                        <PageTitle>팔로우 보드</PageTitle>
                    </HContainer>
                    {data.map((previewboard, key) => (
                        <PreviewBoard previewboardData={previewboard} key={key} />
                    ))}
                </LazyloadScrollView> */}
            </Container>
        )
    }
}
