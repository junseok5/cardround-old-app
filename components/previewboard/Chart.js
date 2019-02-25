import React from "react"
import PhotoLayout from "../common/PhotoLayout"

const Chart = ({ data, scrollHost }) => {
    return (
        <PhotoLayout
            data={data}
            scrollHost={scrollHost}
            layoutWidth="110"
            layoutHeight="160"
            isRank={true}
            titleSize="14px"
            firstAddedInfoSize="12px"
            numberOfLines={1}
        />
    )
}

export default Chart
