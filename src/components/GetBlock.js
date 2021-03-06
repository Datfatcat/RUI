import React, { Fragment } from "react";
import {decode} from 'hex-encode-decode';
//import { View, StyleSheet, Text } from 'react-native';
import './getblock.css';


export default class GetBlock extends React.Component {

	state = {
		loading: true,
		user: null
	};

//http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/block/height/3
//http://104.34.230.121:3000/block/heights

	// ComponentDidMount is used to
	// execute the code
	async componentDidMount() {
		// fetch block transactions from the following link
		const response = await fetch("https://cors-everywhere.herokuapp.com/http://104.34.230.121:3000/block/heights", { mode: 'cors' });
		//take the response from the API
		const data = await response.json();
			// set the response as data
		this.setState({user: data, loading: false});
		console.log(response);
		console.log(data);
	}
	
	
    render() {
      
      if(this.state.loading){
        return <div>Loading...</div>;
      }
  
      if(!this.state.user){
        return <div>No user</div>;
      }
	    
	/*
		<!-- map function allows iteration of the whole block based on a unique ID -->
		<!-- FOR EACH BLOCK -->
	      		<!-- print out the hash, body, time, and previous block hash -->
	      		<!-- Redundant to add subheading for block heigt, so it is used to indicate which block instead  -->
		<!-- decode body from HEX to TEXT -->
			<!-- https://www.npmjs.com/package/hex-encode-decode -->
		<!-- Time format is HH:MM:SS -->
			<!-- https://stackoverflow.com/questions/1322732/convert-seconds-to-hh-mm-ss-with-javascript -->
	
	*/


      return (
        <div>
          <h1>Reputation Score Full Blockchain</h1>
          &nbsp;
          {this.state.user.map(block => (
            <div key={block.uuid}>
              <h4>Block {block.height}</h4>
              <h6 align="left">Hash</h6>
                <div align="left">{block.hash}</div>
                <br/>
              <h6 align="left">Body:</h6>
                <div align="left">{decode(block.body)}</div>
                <br/>
              <h6 align="left">Time:</h6>
                <div align="left">{new Date(block.time * 1000).toISOString().substr(11, 8)}</div>
                <br/>
              <h6 align="left">Previous Block Hash:</h6>
                <div align="left">{block.previousBlockHash}</div>
                <br/>
                <hr></hr>
              &nbsp;
            </div>
          ))}
        </div>
      );
      
    }
    
}
