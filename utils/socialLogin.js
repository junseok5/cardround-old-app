import { Facebook } from "expo"
import { FB_APP_ID } from "../constants/Base";

export const facebookLogin = async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            FB_APP_ID,
            {
                permissions: ["email", "public_profile", "user_friends"]
            }
        )

        if (type === "success") {
            return token
        } else {
            return null
        }
    } catch (error) {
        console.log(error.message)
        return null
    }
}
