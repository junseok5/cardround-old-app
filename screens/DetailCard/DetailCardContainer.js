import React, { Component } from "react"
import { Clipboard, WebView, TouchableOpacity } from "react-native"
import { Icon } from "expo"
import Colors from "../../constants/Colors"

class DetailCardContainer extends Component {
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam("title")
        const link = navigation.getParam("link")
        const shareLink = async link => {
            await Clipboard.setString(link)
        }

        return {
            title,
            headerRight: (
                <TouchableOpacity onPress={() => shareLink(link)}>
                    <Icon.FontAwesome
                        name="share"
                        size={20}
                        color={Colors.supportColor}
                        style={{ marginRight: 15 }}
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
