import React from "react"
import PhotoLayout from "../common/PhotoLayout"
import { scale, verticalScale } from "react-native-size-matters"

const MovieChart = ({ data, boardId, target }) => (
    <PhotoLayout
        data={data}
        boardId={boardId}
        target={target}
        layoutWidth={scale(110)}
        layoutHeight={verticalScale(160)}
        isRank={true}
        titleSize="14px"
        firstAddedInfoSize="12px"
        numberOfLines={1}
    />
)

export default MovieChart
