import React, { PureComponent } from "react"
import styled from "styled-components"
import { Icon } from "expo"
import Colors from '../../constants/Colors'

const Container = styled.View`
    width: 320px;
    height: 240px;
    padding: 10px 15px;
    margin-left: 10px;
    margin-right: 10px;
    border-width: 1px;
    border-color: ${Colors.thickBorder};
    border-radius: 4px;
    background: ${Colors.textLayout};
`

const Title = styled.Text`
    height: 190px;
    font-size: 16px;
`

const FbBottom = styled.View`
    height: 20px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: space-between;
`

const FbLike = styled.View`
    flex-direction: row;
`

const ThumbsUp = styled.View`
    padding: 2px 4px;
    margin-right: 4px;
    background: ${Colors.fbLikeColor};
    border-radius: 50;
`

const FbLikeText = styled.Text`
    color: ${Colors.fbSupportText};
`

const FbComments = styled.Text`
    color: ${Colors.fbSupportText};
`

class CardBamboo extends PureComponent {
    render() {
        const { card, numberOfLines = 10, isFb = false } = this.props
        const { title, firstAddedInfo, secondAddedInfo } = card
        return (
            <Container>
                <Title numberOfLines={numberOfLines}>{title}</Title>

                {isFb && (
                    <FbBottom>
                        <FbLike>
                            <ThumbsUp>
                                <Icon.Ionicons
                                    name="md-thumbs-up"
                                    size={12}
                                    color="#fff"
                                />
                            </ThumbsUp>
                            <FbLikeText>{firstAddedInfo}</FbLikeText>
                        </FbLike>
                        <FbComments>{secondAddedInfo}</FbComments>
                    </FbBottom>
                )}
            </Container>
        )
    }
}

export default CardBamboo
