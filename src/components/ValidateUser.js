//import { response } from "express";
import React from "react";
import { Link, Redirect, BrowserRouter } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
//import GetBlock from "./GetBlock";
//import response from 'express';

export default class ValidateUser extends React.Component {

    constructor(props){
        //const history = useHistory();
        //let history = useHistory();
        super(props)
    
        this.state = {
            address: '',
            //messSign: '',
            message: '',
            signature: '',
            star: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    

    //http://cors-everywhere.herokuapp.com/

    handleSubmit = (e) => {
        alert('Registration submitted!');
        fetch("http://104.34.230.121:3000/requestValidation", { 
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'content-type': 'application/json' },
            redirect:'follow'
        }).then(function(response){
            return response.text()
            //response.redirect(300,'/GetBlock')
            //window.location.href = '/GetBlock'
        }).then(data => {
            console.log(data)
           document.getElementById("para").innerHTML = data  
        });
            //<Link to='/getblock'>Give opinion on a user.</Link>
               
     /*   }).then(response => response.text())
          .then(data => {
            console.log(data)
          */ 
           // console.log(use);
           //this.props.history.push('/getblock'); 
        
        e.preventDefault();
    }

    handleSubmitConfirm = (e) => {
        alert('Opinion submitted!');
        console.log(JSON.stringify(this.state))
        fetch("http://104.34.230.121:3000/submitStar", { 
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'content-type': 'application/json' },
            redirect:'follow'
        }).then(function(response){
            return response.text()
        }).then(data => {
            console.log(data)
           document.getElementById("para").innerHTML = data  
        });
        e.preventDefault();
    }

    render(){
        const {address, message, signature, star} = this.state
        return(
            <Fragment>
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

                <Link to='/getblock'>Give opinion on a user.</Link>

                <form onSubmit={this.handleSubmitConfirm}>
                        <label>Address</label>
                        <input
                        type='text'
                        name='address'
                        value={address}
                        onChange={this.handleChange}
                        ></input>
                        <br />

                        <label>Message</label>
                        <input
                        type='text'
                        name='message'
                        value={message}
                        onChange={this.handleChange}
                        ></input>
                        <br />

                        <label>Signature</label>
                        <input
                        type='text'
                        name='signature'
                        value={signature}
                        onChange={this.handleChange}
                        ></input>
                        <br />
                        
                        <label>Star</label>
                        <input
                        type='text'
                        name='star'
                        value={star}
                        onChange={this.handleChange}
                        ></input>
                        <br />

                        <input type="submit" value="Submit" />
                        <p id="para"></p>
                </form>
            </Fragment>
        )
        
    }

}

