import React from "react";
import PropTypes from 'prop-types'; 

export class Header extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>
                    The great RGB Color Game
                    <div id="rgb">{this.props.color}</div>
                </h1>
            </div>
        )
    }
}

Header.propTypes = {
    color: PropTypes.string, 
}

Header.defaultProps = {
    color: "rgb(255, 125, 75)"
}

export default Header; 