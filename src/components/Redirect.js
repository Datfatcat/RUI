import { useCallback, useState } from 'react';
import './redirect.css';
//import {parse} from 'himalaya';
//import jsonData from './data.json';

function App() {
  const [step, setStep] = useState(false);
  const [address, setAddress] = useState('');

 // const [employerName, setEmployerName] = useState("");
  const [message, setMessage] = useState('');
  const [signature, setMessageSigned] = useState('');
  const [star, setCliAddress] = useState('');


  const handleChange = useCallback(
    (e) => {
      setAddress(e.target.value);
    },
    [setAddress]
  );

  const handleSubmit = useCallback(
    (e) => {
      var temp;
      
      alert('Form submitted!');
      console.log(address)
      fetch("https://cors-everywhere.herokuapp.com/http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/requestValidation", { 
          method: 'POST',
          //body: JSON.parse(temp),
          body: JSON.stringify({address}),
          headers: { 'content-type': 'application/json' },
          mode: 'cors'
      }).then(function(response){
        console.log(response)
        console.log(address)
          return response.text()
      }).then(data => {
          console.log(data)
          temp = data.replace(/['"]+/g, '')
          console.log(temp)
          setMessage(temp)
      });


      e.preventDefault();
      if(!step){
        console.log("value = ", address)
        if (!address) {
          alert("can not be empty")
          return;
        }
        setStep(true);
      }
    },
    [address, step]
  );

  //https://cors-everywhere.herokuapp.com/

  const handleSubmitConfirm = useCallback(
    (e) => {

      console.log({address,message,signature,star});
      var obj = {};
      obj.address = address;
      obj.message = message;
      obj.signature = signature;
      obj.star = star;
      console.log(signature);
      console.log(JSON.stringify(obj));
      alert('Final Step Completed!');
      fetch("https://cors-everywhere.herokuapp.com/http://104.34.230.121:3000/submitStar", { 
          method: 'POST',
          body: JSON.stringify(obj),
          headers: { 'content-type': 'application/json' },
          mode: 'cors'
      }).then(function(response){
        console.log(response)
        console.log(address)
          return response.text()
      }).then(data => {
          console.log(data)
          console.log(JSON.stringify(obj))
          //document.getElementById("para").innerHTML = data

      });


      e.preventDefault();
     /* if(!step){
        console.log("value = ", address)
        if (!address) {
          alert("can not be empty")
          return;
        }
        setStep(true);
      }else{
        console.log("address = ", address)
        console.log("message = ", message)
        console.log("signature = ", signature)
        console.log("star = ", star)
      }*/
    },
    [address, message, signature, star, step]
  );

  const doSendAddress = (address) => {
    console.log(address);
    // console.log(
    //   'doSendInformation function need to be implemented to send information the server'
    // );
  };

  return (
    <div className="App">
      {
        !step && (
          <form onSubmit={handleSubmit} className="info-form">
            <div className="formRow">
              <input
                type="text"
                placeholder="Public wallet address"
                value={address}
                onChange={handleChange}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        )
      }

      {
        step && (
          <form onSubmit={handleSubmitConfirm} className="info-form">
            <div className="formRow">
              <label>Your Public Wallet Address</label>
              <input
                type="text"
                placeholder="Your Public Wallet Address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className="formRow">
            <label>Your Message</label>
              <input
                type="text"
                placeholder="Message"
                value={message}
               /* onChange={(e) => {
                  setMessage({[e.target.name]: e.target.value});
                }}*/
              />
            </div>
            <div className="formRow">
            <label>Your Signed Message</label>
              <input
                type="text"
                placeholder="Message Signature"
                value={signature}
                onChange={(e) => {
                  setMessageSigned(e.target.value);
                }}
              />
            </div>
            <div className="formRow">
            <label>Your Employee's Public Wallet Address</label>
              <input
                type="text"
                placeholder="Employee Wallet Address"
                value={star}
                onChange={(e) => {
                  setCliAddress(e.target.value);
                }}
              />
            </div>
            
            <input type="submit" value="Submit" />
          </form>
        )
      }

    </div>
  );
}

export default App;
