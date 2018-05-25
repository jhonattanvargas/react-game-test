import React, {Component} from 'react'
import Move from '../../Move'

class Home extends Component{

    constructor(){
        super();
        this.state = {
            moves : []
        }
    }

    componentWillMount(){
        fetch('https://pokerola.herokuapp.com/api/move',{method:'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }})
          .then(res => res.json())
          .then(data => {
            //console.log(data.moves)
            this.setState({moves:data.moves})
          })
            .catch(err =>{
                console.log(err)
            })
    }

    render(){
        //console.log(this.state.moves)
        document.getElementById('title').innerHTML = 'Home'
        return(
            <div className="Home">
                <h1>Home Page</h1>
                <Move moves={this.state.moves} />
            </div>
        )
    }
}

export default Home