import React from "react";
import PropTypes from 'prop-types'; 

export class Squares extends React.Component {
    render(){
        return(
            <div className="squares">

                {this.props.squares.map ((val, index) => {
                    const style = {
                        background: val.color,
                    }
                    return <div onClick={() => {this.props.onClickSquare(index)}} className={val.squareClassName} key={index} style={style}/>
                }) }
            </div>            
        )
    }
}

Squares.propTypes = {
    squares: PropTypes.array, 
    onClickSquare: PropTypes.func, 
}

Squares.defaultProps = {
    squares: [],
    onClickSquare: (index) => {}
}

export default Squares; 