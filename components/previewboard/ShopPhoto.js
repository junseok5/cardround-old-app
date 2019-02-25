import React from "react"
import PhotoLayout from "../common/PhotoLayout"

const ShopPhoto = ({ data, scrollHost }) => {
    return (
        <PhotoLayout
            data={data}
            scrollHost={scrollHost}
            titleSize="13px"
            firstAddedInfoWeight="bold"
        />
    )
}

export default ShopPhoto
