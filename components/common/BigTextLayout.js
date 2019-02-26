import React, { PureComponent } from "react"
import { View } from "react-native"
// import { ScrollView } from "react-native"
import Layout from "../../constants/Layout"
import Swiper from "react-native-swiper"
import CardBamboo from "../card/CardBamboo"

const { width } = Layout.window
const layoutWidth = width

class BigTextLayout extends PureComponent {
    render() {
        const { horizontal = true, numberOfLines, isFb } = this.props
        return (
            <View>
                <Swiper
                    showsPagination={false}
                    loop={false}
                    style={{ width: layoutWidth, height: 250 }}
                >
                    {this.props.data.map(card => (
                        <CardBamboo
                            card={card}
                            key={card.code}
                            layoutWidth={layoutWidth - 20}
                            horizontal={horizontal}
                            numberOfLines={numberOfLines}
                            isFb={isFb}
                        />
                    ))}
                </Swiper>
                {/* <ScrollView
                    horizontal={horizontal}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    {this.props.data.map(card => (
                        <CardBamboo
                            card={card}
                            key={card.code}
                            layoutWidth={layoutWidth}
                            horizontal={horizontal}
                            numberOfLines={numberOfLines}
                            isFb={isFb}
                        />
                    ))}
                </ScrollView> */}
            </View>
        )
    }
}

export default BigTextLayout
