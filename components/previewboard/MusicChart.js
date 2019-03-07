import React from "react"
import PhotoLayout from "../common/PhotoLayout"
import { scale, verticalScale } from "react-native-size-matters"

const MusicChart = ({ data }) => (
    <PhotoLayout
        data={data}
        layoutWidth={scale(100)}
        layoutHeight={verticalScale(100)}
        isRank={true}
        titleSize="14px"
        firstAddedInfoSize="12px"
        numberOfLines={1}
    />
)

export default MusicChart
