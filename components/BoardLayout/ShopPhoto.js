import React from "react"
import PhotoLayout from "./PhotoLayout"

const testItem = [
    {
        code: "1",
        photoUrl:
            "http://image.musinsa.com/mfile_s01/_shopstaff/list.staff_5c6ca3779c0bd.png",
        title: "페이탈리즘 Relax wide crop fit",
        titleSize: "13px",
        firstAddedInfo: "96000원",
        firstAddedInfoWeight: "bold"
    },
    {
        code: "2",
        photoUrl:
            "http://image.musinsa.com/mfile_s01/_shopstaff/list.staff_5c6ca3779c0bd.png",
        title: "페이탈리즘 Relax wide crop fit",
        titleSize: "13px",
        firstAddedInfo: "96000원",
        firstAddedInfoWeight: "bold"
    },
    {
        code: "3",
        photoUrl:
            "http://image.musinsa.com/mfile_s01/_shopstaff/list.staff_5c6ca3779c0bd.png",
        title: "페이탈리즘 Relax wide crop fit",
        titleSize: "13px",
        firstAddedInfo: "96000원",
        firstAddedInfoWeight: "bold"
    },
    {
        code: "4",
        photoUrl:
            "http://image.musinsa.com/mfile_s01/_shopstaff/list.staff_5c6ca3779c0bd.png",
        title: "페이탈리즘 Relax wide crop fit",
        titleSize: "13px",
        firstAddedInfo: "96000원",
        firstAddedInfoWeight: "bold"
    }
]

const ShopPhoto = () => {
    return <PhotoLayout data={testItem} />
}

export default ShopPhoto
