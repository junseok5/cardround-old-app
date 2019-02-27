import React, { Component } from "react"
import { WebView } from "react-native"
import styled from "styled-components"
import { Icon } from "expo"
import Colors from "../constants/Colors"

class DetailCardScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title"),
            headerRight: (
                <Icon.FontAwesome
                    name="share"
                    size={20}
                    color={Colors.supportColor}
                    style={{ marginRight: 10 }}
                />
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
            />
        )
    }
}

export default DetailCardScreen
