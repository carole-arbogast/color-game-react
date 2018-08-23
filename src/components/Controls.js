import React from "react";
import PropTypes from 'prop-types'; 

export class Controls extends React.Component {

    render(){
        const{isEasy, onPlayAgainClick, infoText} = this.props;
        const easyClassName = isEasy ? "active"  : ""; 
        const hardClassName = isEasy ? "" : "active"; 

        return (
            <div className="info">
                <div className="container">
                    <div className="navbar">

                        <button id="restart" onClick={onPlayAgainClick} >PLAY AGAIN</button>

                        <span id="message">{infoText}</span>

                        <button onClick={() => {this.props.onChangeDifficulty(true)}} className={easyClassName}>EASY</button>
                        <button onClick={() => {this.props.onChangeDifficulty(false)}} className={hardClassName}>HARD</button>
                    </div>
                </div>
            </div>            
        )
    }
}

Controls.propTypes = {
    isEasy: PropTypes.bool, 
    onChangeDifficulty: PropTypes.func,
    infoText: PropTypes.string
}

Controls.defaultProps = {
    isEasy: false, 
    onChangeDifficulty: (isEasy) => {},
    infoText: ""
}

export default Controls; 