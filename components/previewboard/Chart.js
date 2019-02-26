import React from "react"
import PhotoLayout from "../common/PhotoLayout"
import { scale, verticalScale } from "react-native-size-matters"

const Chart = ({ data, scrollHost }) => {
    return (
        <PhotoLayout
            data={data}
            scrollHost={scrollHost}
            layoutWidth={scale(110)}
            layoutHeight={verticalScale(160)}
            isRank={true}
            titleSize="14px"
            firstAddedInfoSize="12px"
            numberOfLines={1}
        />
    )
}

export default Chart
