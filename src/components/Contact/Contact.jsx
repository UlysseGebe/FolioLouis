import React from 'react';

class Contact extends React.Component {
    componentDidMount() {
        document.title = "Folio Louis - Contact";
    }
    componentWillUnmount() {
        document.title = ""
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default Contact