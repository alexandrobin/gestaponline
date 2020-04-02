import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import axios from "axios"

class CreateSession extends React.Component {
    state = {
        name : "",
        pseudo : "",
    }

    updateForm = (e) => {
        let {name, pseudo} = this.state
        if (e.target.id === "name"){
            name = e.target.value
        } else if (e.target.id === "pseudo"){
            pseudo = e.target.value
        }
        console.log({name,pseudo})
        this.setState({name,pseudo})
        
    }
    
    createsession = () => {
        let {name,pseudo} = this.state
        console.log({name,pseudo})
        axios.post('http://localhost:5000/createsession',{
            name:this.state.name,
            pseudo:this.state.pseudo,
        })
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(error){
            console.error('Error: ', error)
        })
    }

    render (){
        return(
        <div style={{margin:"2rem"}}>
            <h2>Start your party</h2>
            <label for="name">Party name</label>
            <input 
                onChange={this.updateForm} 
                value={this.state.name}
                type="text" id="name" name="name" 
                
            >
            </input>
            <br/>
            <label for="pseudo">Your nickname</label>
            <input 
                onChange={this.updateForm} 
                value={this.state.pseudo}
            type="text" id="pseudo" name="pseudo">
            </input>
            <br/>
            <button onClick={this.createsession} value="Create a party">Create a party</button>
        </div>

        )}
}

{/* Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
} */}

export default CreateSession
