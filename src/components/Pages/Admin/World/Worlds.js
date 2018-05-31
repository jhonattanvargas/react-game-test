import React, {Component} from 'react'
import moment  from 'moment-timezone'
import { Link } from 'react-router-dom'

class Worlds extends Component{

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level Min</th>
                        <th>Level Max</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.worlds.map( (w,key) => 
                            <tr key={key}>
                                <td><Link to={`/worlduser/${w._id}`}>{w.displayName}</Link></td>
                                <td>{w.levelMin}</td>
                                <td>{w.levelMax}</td>
                                <td>{moment.tz(w.created, 'America/Santiago').format('DD/MM/YYYY, h:mm:ss a')}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        )
    }
}

export default Worlds