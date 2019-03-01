import { Facebook } from "expo"
import { FB_APP_ID } from "../constants/Base"

export const facebookLogin = async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            FB_APP_ID,
            {
                permissions: ["email", "public_profile"]
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

// export const googleLogin = async () => {
//     try {
//         const clientId = GOOGLE_CLIENT_ID
//         const { type, accessToken, user } = await Google.logInAsync({
//             androidClientId: clientId,
//             androidStandaloneAppClientId: clientId,
//             scopes: ["profile", "email"]
//         })

//         if (type === "success") {
//             console.log(user, accessToken)
//         }
//     } catch (error) {
//         console.log(error.message)
//         return null
//     }
// }
