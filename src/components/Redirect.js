import { useCallback, useState } from 'react';
import './redirect.css';


function App() {
  
  //variables used to help redirect to a "new page"
  const [step, setStep] = useState(false);
  const [address, setAddress] = useState('');
  
  // variaables used to store user input from front end and send it to API
 // const [employerName, setEmployerName] = useState("");
  const [message, setMessage] = useState('');
  const [signature, setMessageSigned] = useState('');
  const [star, setCliAddress] = useState('');

  // used to store the info when the user inputs their public wallet address
  const handleChange = useCallback(
    (e) => {
      setAddress(e.target.value);
    },
    [setAddress]
  );

  // submit user public wallet address as a POST request to the API
  const handleSubmit = useCallback(
    (e) => {
      var temp;
      
      alert('Form submitted!');
      console.log(address)
      // The herokuapp allows us to POST onto the API due to how RUI is hosted on https and blockchain is http.
      // This leads to a mixed error content error.
      fetch("https://cors-everywhere.herokuapp.com/http://ec2-54-151-16-73.us-west-1.compute.amazonaws.com:8888/requestValidation", { 
          method: 'POST',
          //body: JSON.parse(temp),
          body: JSON.stringify({address}),
          headers: { 'content-type': 'application/json' },
          mode: 'cors'
      }).then(function(response){
        //console.log(response)
        //console.log(address)
          return response.text()
      }).then(data => {
          //console.log(data)
        // response from API is sent back as: "text...."
        // we need to set the message as: text....
        // so following line does that and removes the quotes so that the message sent will be automically pasted into the front-end field without quotes
          temp = data.replace(/['"]+/g, '')
         // console.log(temp)
          setMessage(temp)
      });

      // allows the fields to stay after submission
      // technically won't work since we want to go to "new page" but does work on handleSubmitConfirm function
      e.preventDefault();
      
      /* The following allows us to switch from the page with public wallet address to "new page" that has the fields for the user to input
       things like the loan applicant's wallet address
      */
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

  // When the user submits on the "new page"
  const handleSubmitConfirm = useCallback(
    (e) => {

      // Since stringify can only accept one parameter, the fields are put into an array so that the blockchain can accept the values that the user inputted
      console.log({address,message,signature,star});
      var obj = {};
      obj.address = address;
      obj.message = message;
      obj.signature = signature;
      obj.star = star;
     // console.log(signature);
      //console.log(JSON.stringify(obj));
      alert('Final Step Completed!');
      fetch("https://cors-everywhere.herokuapp.com/http://104.34.230.121:3000/submitStar", { 
          method: 'POST',
          body: JSON.stringify(obj),
          headers: { 'content-type': 'application/json' },
          mode: 'cors'
      }).then(function(response){
        //console.log(response)
        //console.log(address)
          return response.text()
      }).then(data => {
          console.log(data)
         // console.log(JSON.stringify(obj))
          //document.getElementById("para").innerHTML = data

      });


      e.preventDefault();

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
      // Step is FASLE so it allows the single field page to stay up
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
        // step is TRUE so that multi-field page is up
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
