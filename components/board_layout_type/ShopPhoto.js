import React from "react"
import PhotoLayout from "../common/PhotoLayout"

const ShopPhoto = ({ data, boardId, target }) => {
    return (
        <PhotoLayout
            data={data}
            boardId={boardId}
            target={target}
            titleSize="13px"
            firstAddedInfoWeight="bold"
        />
    )
}

export default ShopPhoto
