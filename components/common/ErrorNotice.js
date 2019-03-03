import React from "react"
import { Button } from "react-native"
import { Icon } from "expo"
import styled from "styled-components"
import Colors from "../../constants/Colors"

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

const MessageView = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
`

const Message = styled.Text`
    font-size: 16px;
    color: ${Colors.supportColor};
`

const ErrorNotice = ({ message, refetch }) => {
    return (
        <Container>
            <MessageView>
                <Icon.Entypo
                    name="emoji-sad"
                    size={45}
                    color={Colors.supportColor}
                    style={{ marginBottom: 10 }}
                />
                <Message>{message}</Message>
            </MessageView>
            <Button title="재시도" color={Colors.mainColor} onPress={refetch} />
        </Container>
    )
}

export default ErrorNotice
