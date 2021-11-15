//import { response } from "express";
import React from "react";
//import response from 'express';

export default class ValidateUser extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
            address: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //http://cors-everywhere.herokuapp.com/

    handleSubmit = (e) => {
        alert('Form submitted!');
        fetch("http://cors-everywhere.herokuapp.com/http://104.34.230.121:3000/requestValidation", { 
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'content-type': 'application/json' }
        }).then(function(response){
            return response.text();
        }).then(data => {
            console.log(data)
            document.getElementById("para").innerHTML = data
        });
               
     /*   }).then(response => response.text())
          .then(data => {
            console.log(data)
          */ 

        e.preventDefault();
    }

    render(){
        const {address} = this.state
        return(
                <form onSubmit={this.handleSubmit}>
                        <label>Public Wallet Address</label>
                        <input
                        type='text'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        ></input>
                        <input type="submit" value="Submit" />
                        <p id="para"></p>
                </form>
                
        )
    }

}

