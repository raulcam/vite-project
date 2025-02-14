import React from "react";

class ErrorBoundary extends React.Component {

    constructor() {
        super();

        this.state = {
            errorInfo: null
        };
    }

    componentDidCatch(_,errorInfo) {
        this.setState({
            errorInfo
        });
    }

    handleClick = () => {
        this.props.history.push("/");
    }

    render() {

        if (this.state.errorInfo) {
            return (
                <>
                Algo fallo
                {JSON.stringify(this.state.errorInfo)}
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
