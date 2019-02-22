import React from "react"
import PhotoLayout from "./PhotoLayout"

const testItem = [
    {
        code: "1",
        photoUrl: "http://contents.cgv.co.kr/Upload/Movie/38970/p.gif",
        layoutWidth: "110px",
        layoutHeight: "160px",
        isRank: true,
        title: "해리포터와 비밀의 방"
    },
    {
        code: "2",
        photoUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81552/81552_185.jpg",
        layoutWidth: "110px",
        layoutHeight: "160px",
        isRank: true,
        title: "극한직업"
    },
    {
        code: "3",
        photoUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81567/81567_185.jpg",
        layoutWidth: "110px",
        layoutHeight: "160px",
        isRank: true,
        title: "알리타 - 배틀 엔젤"
    },
    {
        code: "4",
        photoUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81616/81616_185.jpg",
        layoutWidth: "110px",
        layoutHeight: "160px",
        isRank: true,
        title: "사바하"
    },
    {
        code: "5",
        photoUrl: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000080/80882/80882_185.jpg",
        layoutWidth: "110px",
        layoutHeight: "160px",
        isRank: true,
        title: "드래곤 길들이기 3"
    }
]

const Chart = () => {
    return <PhotoLayout data={testItem} />
}

export default Chart
