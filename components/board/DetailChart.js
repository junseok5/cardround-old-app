import React from 'react'
import Layout from '../../constants/Layout';
import { verticalScale } from "react-native-size-matters"
import DetailPhotoLayout from '../common/DetailPhotoLayout';

const { width } = Layout.window
const layoutWidth = (width / 3) - 10

const DetailChart = ({ scrollHost, data }) => {
    return (
        <DetailPhotoLayout
            data={data}
            scrollHost={scrollHost}
            layoutWidth={layoutWidth}
            layoutHeight={verticalScale(160)}
            isRank={true}
            titleSize="14px"
            firstAddedInfoSize="12px"
            numberOfLines={1}
        />
    )
}

export default DetailChart