import React, { Component } from "react"
import styled from "styled-components"
import { Icon } from "expo"
import Colors from "../constants/Colors"
import PreviewBoard from "../components/previewboard/PreviewBoard"
import { LazyloadScrollView } from "react-native-lazyload"

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
    },
    {
        _id: "5",
        name: "페이스북",
        link: "https://www.facebook.com/ChungNamNationalBamboo/",
        layoutType: "BAMBOO",
        follower: "22000",
        cards: [
            {
                code: "1",
                title:
                    "#충남대숲 81663번째 제보\n2019. 02. 19. 오후 01:39:21\n<불만볶음면>\n**학과 ***회장님 회장하기전부터 말 많던데 올해 **학과 참 걱정되네요. 졸업생 선배분들 대우도 만만치않다던데 졸업식 언제하는지 몇시에하는지 말도 안해주섰다면서요????? ***회장님은 왜 회장 하신거예요...? 졸업생 분들은 이제 학교 떠나니까 신경 안써도되는사람으로 생각하는것인지.. 학부생인 저도 모르는데 졸업생 선배분들은 어떻게 알고가요ㅋㅋㅋㅋㅋㅋ 앞으로의 학교행사에도 이러실건가요?? 다음 행사인 **새터도 신경좀 써주세욬ㅋㅋㅋㅋ",
                firstAddedInfo: "119명",
                secondAddedInfo: "댓글 17개"
            },
            {
                code: "2",
                title:
                    "##충남대숲 81662번째 제보\n2019. 02. 20. 오전 03:20:53\n<공론화될_수_있는_문제>\n**대학 신입생 학생회비 관련 제보합니다.\n이번 **대학 신입생이 내야할 학생회비에 새터 참가 비용이 포함되어있는데,...\n더 보기",
                firstAddedInfo: "36명",
                secondAddedInfo: "댓글 37개"
            },
            {
                code: "3",
                title:
                    "#충남대숲 81661번째 제보\n2019. 02. 18. 오후 10:55:39\n<홍보가_기가_막혀>\n안녕하세요! 제 8기 하이트 진로 서포터즈입니다 ! 이번에 저희 하이티스트와 함께할 여러분들을 찾고있습니다 ! 학기중에 시간 많이 빼앗기지 않고 할 수 있는 활동입니다! 많이 참여해주세요!\n-모집인원 : 00명...\n더 보기",
                firstAddedInfo: "1명",
                secondAddedInfo: "댓글 2개"
            }
        ],
        websiteThumbnail:
            "https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-1/p50x50/16174449_1369479566438381_4274256798739574460_n.jpg?_nc_cat=104&_nc_ht=scontent-icn1-1.xx&oh=471002cf07b472e4a86a0b8f316b7a6e&oe=5CEFE454",
        websiteName: "충남대 대나무숲"
    }
]

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

class DetailWebsite extends Component {
    static navigationOptions = {
        headerRight: (
            <Icon.Feather
                name="external-link"
                size={25}
                color={Colors.supportColor}
                style={{ marginRight: 10 }}
            />
        )
    }

    render() {
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
}

export default DetailWebsite
