import React from "react"
import styled from "styled-components"
import { ScrollView } from "react-native"

const Section = ({ horizontal, children }) => {
    return (
        <ScrollView
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
        >
            {children}
        </ScrollView>
    )
}

export default Section
