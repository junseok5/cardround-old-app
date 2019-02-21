import React from "react"
import PhotoLayout from "./PhotoLayout";

const Chart = () => {
    return (
        <PhotoLayout
            photoUrl="http://contents.cgv.co.kr/Upload/Movie/38970/p.gif"
            layoutWidth="110px"
            layoutHeight="160px"
            isRank={true}
            title="해리포터와 비밀의 방"
        />
    )
}

export default Chart
