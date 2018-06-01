//Dependencies
import React, {Component} from 'react'
import PropTypes from 'prop-types'

//Assest
import './css/Content.css'

class Content extends Component{
    static propTypes = {
        body: PropTypes.object.isRequired
    }

    render(){
        //console.log('props Content')
        //console.log(this.props)
        const {body} = this.props
        //body.props.children.push(this.props.user)
        return(
            <div className="container mt-5">
                {body}
            </div>
        )
    } 
}

export default Content