import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Move extends Component{

    static propTypes = {
        moves: PropTypes.array.isRequired
    }

    render(){

        const {moves} = this.props
        console.log(moves)
        return(
            <ul>
                {
                    moves.map( (x,i) => <li key={i}>{x.name}</li>)
                }
            </ul>
        )
    }
}

export default Move