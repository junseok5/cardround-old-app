import React from 'react'
import Layout from '../../constants/Layout'
import { verticalScale } from "react-native-size-matters"
import DetailPhotoLayout from "../common/DetailPhotoLayout"

const { width } = Layout.window
const layoutWidth = (width / 2) - 10

const DetailShopPhoto = ({ data, scrollHost }) => {
    return (
        <DetailPhotoLayout
            data={data}
            scrollHost={scrollHost}
            layoutWidth={layoutWidth}
            layoutHeight={verticalScale(150)}
            firstAddedInfoWeight="bold"
        />
    )
}

export default DetailShopPhoto