import React, { Component } from "react"
import { WebView, TouchableOpacity } from "react-native"
import { Icon } from "expo"
import Colors from "../../constants/Colors"

class DetailCardContainer extends Component {
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

export default DetailCardContainer
