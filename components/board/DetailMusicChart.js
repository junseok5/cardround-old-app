import React from "react"
import Layout from "../../constants/Layout"
import { verticalScale } from "react-native-size-matters"
import DetailPhotoLayout from "../common/DetailPhotoLayout"

const { width } = Layout.window
const layoutWidth = width / 3 - 10

const DetailMusicChart = ({ data }) => {
    return (
        <DetailPhotoLayout
            data={data}
            layoutWidth={layoutWidth}
            layoutHeight={verticalScale(120)}
            isRank={true}
            titleSize="14px"
            firstAddedInfoSize="12px"
            numberOfLines={1}
        />
    )
}

export default DetailMusicChart
