import React, { PureComponent } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { withNavigation } from "react-navigation"
import styled from "styled-components"
import Colors from "../../constants/Colors"
import { moderateScale } from "react-native-size-matters"

const Container = styled.View`
    padding-top: ${moderateScale(8)};
    padding-bottom: ${moderateScale(8)};
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.thickBorder};
`

const Title = styled.Text`
    flex: 7;
    padding-right: ${moderateScale(5)};
    padding-left: ${moderateScale(10)};
    font-size: 15px;
`

const FirstAddedInfo = styled.Text`
    padding-right: ${moderateScale(5)};
    flex: 1;
    text-align: center;
    color: #747474;
`

const PublishedDate = styled.Text`
    padding-right: ${moderateScale(10)};
    flex: 1.5;
    text-align: center;
    color: #747474;
`

class CardText extends PureComponent {
    render() {
        const { card, numberOfLines = 2, navigation } = this.props
        const { title, publishedDate, firstAddedInfo } = card
        return (
            <TouchableWithoutFeedback
                onPress={() =>
                    navigation.navigate({
                        routeName: "DetailCard",
                        params: {
                            title: card.title,
                            link: card.link
                        }
                    })
                }
            >
                <Container>
                    <Title numberOfLines={numberOfLines}>{title}</Title>

                    {publishedDate && (
                        <PublishedDate>{publishedDate}</PublishedDate>
                    )}

                    {firstAddedInfo && (
                        <FirstAddedInfo>{firstAddedInfo}</FirstAddedInfo>
                    )}
                </Container>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation(CardText)
