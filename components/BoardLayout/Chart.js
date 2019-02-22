import React from "react"
import PhotoLayout from "./PhotoLayout"

const Chart = ({ data }) => {
    return (
        <PhotoLayout
            data={data}
            layoutWidth="110"
            layoutHeight="160"
            isRank={true}
            firstAddedInfoSize="12px"
        />
    )
}

export default Chart
