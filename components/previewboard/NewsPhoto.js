import React from "react"
import PhotoLayout from "../common/PhotoLayout"

const NewsPhoto = ({ data }) => {
    return (
        <PhotoLayout
            data={data}
            layoutWidth="200"
            layoutHeight="150"
            titleSize="15px"
            textAlign="left"
        />
    )
}

export default NewsPhoto
