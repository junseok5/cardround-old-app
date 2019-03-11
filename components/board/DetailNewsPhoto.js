import React from "react"
import Layout from "../../constants/Layout"
import { verticalScale } from "react-native-size-matters"
import DetailPhotoLayout from "../common/DetailPhotoLayout"

const { width } = Layout.window
const layoutWidth = width - 10

const DetailNewsPhoto = ({ data }) => {
    return (
        <DetailPhotoLayout
            data={data}
            layoutWidth={layoutWidth}
            layoutHeight={verticalScale(200)}
            titleSize="18px"
            textAlign="left"
        />
    )
}

export default DetailNewsPhoto
