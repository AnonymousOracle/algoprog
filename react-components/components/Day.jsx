import React, { Component } from "react";
import "./css/Day.css";

class Day extends Component {
    state = {
        activity: 0
    }
    
    getDayClass = (act) => {
        let dayClass = "day-";
        let intensityIndicator;

        if (act === 0) {
            intensityIndicator = "no-activity";
        } else if ((act > 0) & (act < 5)) {
            intensityIndicator = "low-activity";
        } else {
            intensityIndicator = "high-activity";   
        }
        return (dayClass + intensityIndicator);
    }

    showDailyActivity = () => {
        
    }

    render() {
        return (
            <div
                className = {this.getDayClass(this.state.activity)}
                //onMouseOver = {}
                >
                    Some text here
            </div>
        )
    }
}

export default Day;
