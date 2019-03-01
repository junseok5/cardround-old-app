import React from "react"
import styled from "styled-components"
import { Button } from "react-native"
import { Icon } from "expo"
import Colors from "../../constants/Colors"

const Container = styled.View``

const Message = styled.Text``

const Reload = ({ message, reload }) => {
    return (
        <Container>
            <Icon.AntDesign name="frowno" size={30} />
            <Message>{message}</Message>
            <Button
                title="다시 시도"
                color={Colors.mainColor}
                onPress={reload}
            />
        </Container>
    )
}

export default Reload
