import React from "react";

export default class GetBlock extends React.Component {

	state = {
		loading: true,
		user: null
	};

	// ComponentDidMount is used to
	// execute the code
	async componentDidMount() {
		const response = await fetch("https://cors-everywhere.herokuapp.com/http://104.34.230.121:3000/block/height/0", { mode: 'cors' });
    const data = await response.json();
    this.setState({user: data, loading: false});
	}

	render() {
    if(this.state.loading){
      return <div>Loading...</div>;
    }

    if(!this.state.user){
      return <div>No user</div>;
    }

    return(
      <div>
        <div>Hash : {this.state.user.hash}</div>
        <div>Height : {this.state.user.height}</div>
        <div>Body : {this.state.user.body}</div>
        <div>Time : {this.state.user.time}</div>
        <div>Previous Block Hash : {this.state.user.previousBlockHash}</div>
      </div>
    );
  }


  





}

