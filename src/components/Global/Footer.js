//Dependencies
import React , {Component} from 'react'
import PropTypes from 'prop-types'

//Assest
import './css/Footer.css'

class Footer extends Component{

    static propTypes = {
        copyright: PropTypes.string
    }

    render(){
        const {copyright = "&copy; React 2017"} = this.props
        return(
            <div className="footer">
                <div className="container"></div>
                <span className="text-muted"><p dangerouslySetInnerHTML={{ __html:copyright }} /></span>                
            </div>
        )
    }
}

export default Footer