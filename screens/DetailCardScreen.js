import React, { Component } from "react"
import { WebView, Share, TouchableOpacity } from "react-native"
import styled from "styled-components"
import { Icon } from "expo"
import Colors from "../constants/Colors"

class DetailCardScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title"),
            headerRight: (
                <TouchableOpacity>
                    <Icon.FontAwesome
                        name="share"
                        size={20}
                        color={Colors.supportColor}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
            )
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <WebView
                source={{
                    uri: this.props.navigation.state.params.link
                }}
                startInLoadingState={true}
            />
        )
    }
}

export default DetailCardScreen
