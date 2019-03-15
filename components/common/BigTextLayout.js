import React, { PureComponent } from "react"
import { View } from "react-native"
import Layout from "../../constants/Layout"
import Swiper from "react-native-swiper"
import CardBamboo from "../card/CardBamboo"

const { width } = Layout.window
const layoutWidth = width

class BigTextLayout extends PureComponent {
    render() {
        const {
            data,
            boardId,
            target,
            horizontal = true,
            numberOfLines,
            isFb
        } = this.props
        return (
            <View>
                <Swiper
                    showsPagination={false}
                    loop={false}
                    style={{ width: layoutWidth, height: 250 }}
                >
                    {data.map(card => (
                        <CardBamboo
                            boardId={boardId}
                            target={target}
                            card={card}
                            key={card.code}
                            layoutWidth={layoutWidth - 20}
                            horizontal={horizontal}
                            numberOfLines={numberOfLines}
                            isFb={isFb}
                        />
                    ))}
                </Swiper>
            </View>
        )
    }
}

export default BigTextLayout
