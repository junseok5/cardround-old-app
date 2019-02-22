import React from "react"
import styled from "styled-components"

const Image = styled.Image`
    width: ${props => props.layoutWidth};
    height: ${props => props.layoutHeight};
`

const LoadingView = styled.View`
    width: ${props => props.layoutWidth};
    height: ${props => props.layoutHeight};
    background: #ccc;
`

class LazyloadImage extends React.Component {
    state = {
        loading: true
    }

    _onLoad = () => {
        this.setState({
            loading: false
        })
    }

    render() {
        const { loading } = this.state
        const { layoutWidth, layoutHeight } = this.props

        return loading ? (
            <LoadingView
                layoutWidth={layoutWidth}
                layoutHeight={layoutHeight}
            />
        ) : (
            <Image
                onLoad={this._onLoad}
                layoutWidth={layoutWidth}
                layoutHeight={layoutHeight}
                {...props}
            />
        )
    }
}
