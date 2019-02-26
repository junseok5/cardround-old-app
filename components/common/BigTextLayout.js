import React, { PureComponent } from "react"
import { View } from 'react-native'
import { ScrollView } from "react-native"
import CardBamboo from "../card/CardBamboo"
import { scale } from "react-native-size-matters"

class BigTextLayout extends PureComponent {
    render() {
        const {
            layoutWidth = scale(300),
            horizontal = true,
            numberOfLines,
            isFb
        } = this.props
        return (
            <View>
                <ScrollView
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
                </ScrollView>
            </View>
        )
    }
}

export default BigTextLayout
