import React from "react"
import ProfileContainer from "../containers/ProfileContainer"

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: "프로필"
    }

    render() {
        return <ProfileContainer />
    }
}

export default ProfileScreen
