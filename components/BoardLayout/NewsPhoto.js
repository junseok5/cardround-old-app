import React from "react"
import PhotoLayout from "./PhotoLayout"

const testItem = [
    {
        code: "1",
        photoUrl:
            "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg",
        layoutWidth: "200px",
        layoutHeight: "150px",
        title: "문재앙, 언제까지 나라 말아먹나"
    },
    {
        code: "2",
        photoUrl:
            "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg",
        layoutWidth: "200px",
        layoutHeight: "150px",
        title: "문재앙, 언제까지 나라 말아먹나"
    },
    {
        code: "3",
        photoUrl:
            "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg",
        layoutWidth: "200px",
        layoutHeight: "150px",
        title: "문재앙, 언제까지 나라 말아먹나"
    },
    {
        code: "4",
        photoUrl:
            "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg",
        layoutWidth: "200px",
        layoutHeight: "150px",
        title: "문재앙, 언제까지 나라 말아먹나"
    },
    {
        code: "5",
        photoUrl:
            "http://fs.jtbc.joins.com/news/hotissue/newsinissue/img/2019/02/15/201902151850146349.jpg",
        layoutWidth: "200px",
        layoutHeight: "150px",
        title: "문재앙, 언제까지 나라 말아먹나"
    }
]

const NewsPhoto = () => {
    return <PhotoLayout data={testItem} />
}

export default NewsPhoto
