import React, {Component} from 'react'
import NewWorld from './NewWorld'
import Worlds from './Worlds'

class World extends Component{

    constructor(){
        super()

        this.state = {
            worlds:[]
        }
        
        this.getWorlds = this.getWorlds.bind(this)
    }

    componentWillMount(){
        this.getWorlds()
    }

    getWorlds(){
        fetch('http://localhost:3000/api/world',{method:'GET' , headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('token')}`
            }})
            .then(res => res.json())
            .then(data => {
              //console.log(data.moves)
              this.setState({worlds:data.worlds})
            })
              .catch(err =>{
                  console.log(err)
              })
    }

    render(){
        document.getElementById('title').innerHTML = 'Manage World'
        return(
            <div className="World">
                <h1>New World</h1>
                <div className="container">
                    <div className=" row justify-content-md-center">
                        <div className="col-md-6">
                            <NewWorld getWorlds={this.getWorlds}/>
                        </div>
                    </div>
                    <div className=" row justify-content-md-center">
                    <div className="col-md-6">
                        <Worlds worlds={this.state.worlds}/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default World