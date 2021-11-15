import React from "react";

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

    handleSubmit = (e) => {
        alert('Form submitted!');
        fetch("http://104.34.230.121:3000/requestValidation", { 
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: { 'content-type': 'application/json' }
        }).then(function(response){
            console.log(response)
            return response;
        });

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
                </form>
        )
    }

}

