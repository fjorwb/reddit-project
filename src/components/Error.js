import React, {Component} from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
            message: 'Something went wrong!'
        }
    }

    componentDidCatch(error, info) {
        this.state({
            hasError: true})
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

export default ErrorHandler