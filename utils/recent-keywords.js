import { AsyncStorage } from "react-native"
import { SearchActions } from "../store/actionCreator"

export const readRecentKeywords = target => {
    const recentKeywords = AsyncStorage[target]

    if (recentKeywords) {
        const name = target === "webRecentKeywords" ? "website" : "board"
        SearchActions.changeRecentKeywords({
            name,
            value: recentKeywords
        })
    }
}

export const writeRecentKeywords = ({ target, keyword }) => {
    let patchData = [keyword]
    let recentKeywords = AsyncStorage[target] || []

    if (recentKeywords.length > 0) {
        const exists = recentKeywords.indexOf(keyword)

        if (exists >= 0) {
            recentKeywords.splice(index, 1)
        } else if (recentKeywords.length >= 4) {
            recentKeywords.pop()
        }

        patchData = patchData.concat(recentKeywords)
    }

    AsyncStorage[target] = patchData
    SearchActions.changeRecentKeywords({ name: target, value: patchData })
}

export const clearRecentKeyowrds = target => {
    AsyncStorage[target] = []
    SearchActions.changeRecentKeywords({ name: target, value: [] })
}
