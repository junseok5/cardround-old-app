import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import styled from "styled-components"
import { Modal } from "react-native"
import Colors from "../../constants/Colors"

const Container = styled.View`
    background: rgba(0, 0, 0, 0.5);
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ModalContainer = styled.View`
    width: 300px;
    height: 200px;
    padding-top: 15px;
    border-radius: 4;
    background: #fff;
    flex-direction: column;
`

const Title = styled.Text`
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.mainColor};
    flex: 1;
`

const InputWrap = styled.View`
    margin-left: 15px;
    margin-right: 15px;
    flex: 1.5;
`

const Input = styled.TextInput`
    /* padding-bottom: 5px; */
    /* border-bottom-width: 2px;
    border-bottom-color: ${Colors.mainColor}; */
    font-size: 16px;
`

const Buttons = styled.View`
    border-top-width: 1px;
    border-top-color: ${Colors.borderColor};
    flex: 1.5;
    flex-direction: row;
    align-items: center;
`

const Button = styled.View`
    width: 150px;
    flex-direction: row;
    justify-content: center;
`

const CancelText = styled.Text`
    color: ${Colors.supportColor};
    font-weight: bold;
    font-size: 16px;
`

const SubmitText = styled.Text`
    color: ${Colors.mainColor};
    font-weight: bold;
    font-size: 16px;
`

class WebRequestModal extends Component {
    state = {
        visible: false
    }

    _closeModal = () => {
        this.setState({
            visible: false
        })
    }

    _toggleModal = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType="fade"
                visible={this.state.visible}
                onRequestClose={this._closeModal}
            >
                <Container>
                    <ModalContainer>
                        <Title>웹사이트 요청</Title>
                        <InputWrap>
                            <Input
                                placeholder="요청하실 웹사이트에 대해 알려주세요."
                                multiline={true}
                                autoFocus
                            />
                        </InputWrap>
                        <Buttons>
                            <TouchableOpacity onPress={this._closeModal}>
                                <Button>
                                    <CancelText>취소</CancelText>
                                </Button>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this._closeModal}>
                                <Button>
                                    <SubmitText>확인</SubmitText>
                                </Button>
                            </TouchableOpacity>
                        </Buttons>
                    </ModalContainer>
                </Container>
            </Modal>
        )
    }
}

export default WebRequestModal
