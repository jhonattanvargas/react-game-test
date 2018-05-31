import React, {Component} from 'react'

class NewWorld extends Component{

    constructor(){
        super()

        this.addWorld = this.addWorld.bind(this)
    }

    addWorld(e){
        e.preventDefault()

        var form = {
            displayName: document.getElementById('displayName').value,
            levelMin: document.getElementById('levelMin').value,
            levelMax: document.getElementById('levelMax').value
        }

        fetch('http://localhost:3000/api/world',{method:'POST', headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'authorization' : `Bearer ${localStorage.getItem('token')}`
            }, body:JSON.stringify(form)})
            .then(res => {
                if(res.status === 200){
                    res.json().then( data => {
                        console.log(data)
                        this.props.getWorlds()
                    })
                }else{
                    res.json().then( data => {
                        console.log(data.message)
                    }) 
                }
            })
            .catch(err => console.log(err))
    }

    render(){
        document.getElementById('title').innerHTML = 'New World'
        return(
            <form className="card">
                <div className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="DisplayName" id="displayName" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Level Min" id="levelMin" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Level Max" id="levelMax" className="form-control" />
                    </div>
                    <button type="submit" onClick={this.addWorld} className="btn btn-primary btn-block" name="button">Add</button>
                </div>
            </form>
        )
    }
}

export default NewWorld