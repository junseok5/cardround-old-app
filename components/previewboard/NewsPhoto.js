import React from "react"
import PhotoLayout from "../common/PhotoLayout"

const NewsPhoto = ({ data, scrollHost }) => {
    return (
        <PhotoLayout
            data={data}
            scrollHost={scrollHost}
            layoutWidth="200"
            layoutHeight="150"
            titleSize="15px"
            textAlign="left"
        />
    )
}

export default NewsPhoto
