import React, {Component} from 'react';

export class ErrorHandler extends Component {
    state = {
        hasError: false,
        message: 'Something went wrong!'
    }

    static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
            message: error.message
        })
    }

    render() {
        if(this.state.hasError) {
            console.log(this.hasError)
            return(
                <h1>{this.state.message}</h1>
            )
        }
        return this.props.children
    }
}
