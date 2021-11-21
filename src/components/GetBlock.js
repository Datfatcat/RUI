import React, { Fragment } from "react";
import {decode} from 'hex-encode-decode';
//import { View, StyleSheet, Text } from 'react-native';
import './getblock.css';


export default class GetBlock extends React.Component {

	state = {
		loading: true,
		user: null
	};

	// ComponentDidMount is used to
	// execute the code
	async componentDidMount() {
		const response = await fetch("https://cors-everywhere.herokuapp.com/http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/block/height/3", { mode: 'cors' });
    const data = await response.json();
    this.setState({user: data, loading: false});
    console.log(decode(this.state.user.body));
	}
   
    render() {
      if(this.state.loading){
        return <div>Loading...</div>;
      }
  
      if(!this.state.user){
        return <div>No user</div>;
      }

      return (

        <div>
            <h1>Transactions of the Block</h1>
            <br/>
              <h2>Hash</h2>
                <p>{this.state.user.hash}</p>
                <br/>
              <h2>Height</h2>
                <p>{this.state.user.height}</p>
                <br/>
              <h2>Body</h2>
                <p>{decode(this.state.user.body)}</p>
                <br/>
              <h2>Time</h2>
               <p>{this.state.user.time}</p>
               <br/>
              <h2>Previous Block Hash</h2>
               <p>{this.state.user.previousBlockHash}</p>

        </div>

      );
    }
}
