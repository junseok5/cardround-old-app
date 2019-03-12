import React from "react"
import PhotoLayout from "../common/PhotoLayout"
import { scale, verticalScale } from "react-native-size-matters"

const NewsPhoto = ({ data }) => {
    return (
        <PhotoLayout
            data={data}
            layoutWidth={scale(200)}
            layoutHeight={verticalScale(150)}
            titleSize="15px"
            textAlign="left"
        />
    )
}

export default NewsPhoto
