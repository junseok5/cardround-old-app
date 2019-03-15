import React from "react"
import PhotoLayout from "../common/PhotoLayout"
import { scale, verticalScale } from "react-native-size-matters"

const NewsPhoto = ({ data, boardId, target }) => {
    return (
        <PhotoLayout
            data={data}
            boardId={boardId}
            target={target}
            layoutWidth={scale(200)}
            layoutHeight={verticalScale(150)}
            titleSize="15px"
            textAlign="left"
        />
    )
}

export default NewsPhoto
