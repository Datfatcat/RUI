import axios from "axios";
import React from "react";
import './App.css';

const client = axios.create({
  baseURL: "http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/block/height/0",
  withCredentials: false,
  headers: {'Access-Control-Allow-Headers' : 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin': '*'}
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client.get('/0').then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.hash}</h1>
      <h1>{post.height}</h1>
      <h1>{post.body}</h1>
      <h1>{post.time}</h1>
      <h1>{post.previousBlockHash}</h1>
    </div>
  );
}

//export default App;
