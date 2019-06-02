import React from "react";

class HoveringWindow extends React.Component {
    getDescription = (userActivity) => {
        if (userActivity === 0) {
            return `${this.props.userName} have not sent any solutions this day`;
        } else {
            return `${this.props.userName} sent ${userActivity} solutions today`;
        }
    }

    render() {
        return (
        <div className = "frame-default">
            <div className = "description">
                {this.getDescription(this.props.userActivity)}
            </div>
        </div>
        );
    }
}

export default HoveringWindow;
