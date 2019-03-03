import React, { Component } from "react"
import { Icon } from "expo"
import Colors from "../constants/Colors"
import DetailWebsiteContainer from "../containers/DetailWebsiteContainer"

class DetailWebsiteScreen extends Component {
    static navigationOptions = {
        headerRight: (
            <Icon.Feather
                name="external-link"
                size={25}
                color={Colors.supportColor}
                style={{ marginRight: 10 }}
            />
        )
    }

    constructor(props) {
        super(props)
        const {
            navigation: {
                state: {
                    params: { websiteData }
                }
            }
        } = props
    }

    render() {
        return <DetailWebsiteContainer websiteData={websiteData} />
    }
}

export default DetailWebsiteScreen
