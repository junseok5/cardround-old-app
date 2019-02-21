import React from "react"
import styled from "styled-components"
import { ScrollView } from "react-native"

const Section = ({ children }) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {children}
        </ScrollView>
    )
}

export default Section
