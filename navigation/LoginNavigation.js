import { createStackNavigator, createAppContainer } from "react-navigation"
import LoginScreen from "../screens/LoginScreen"

const LoginNavigation = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(LoginNavigation)
