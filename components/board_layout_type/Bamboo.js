import React from "react"
import BigTextLayout from "../common/BigTextLayout"

const Bamboo = ({ data, boardId, target }) => {
    return (
        <BigTextLayout
            data={data}
            boardId={boardId}
            target={target}
            isFb={true}
        />
    )
}

export default Bamboo
