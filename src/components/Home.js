import { render } from '@testing-library/react';
import React, {Component} from 'react';
import App from './Redirect';
import {Button} from 'reactstrap';
import { useHistory } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../img/OntheRoad_LENDING_2016_Logo_notagline (1).jpg';
//import Image from 'react-image-resizer';
import './home.css';
//var logo = require('./src/img/OTRL_2019_Logo_WithTagline.jpg');

function Home(){
    
    // Comments of what the code does in return
    
    // Button to redirect to Redirect.js
    
    // Space to add between the buttons
    
    // Button to redirect to GetBlock.js

        return(
            
            <div className="d-grid gap-2">
                <img src={logo} alt="Logo" class="center" height="100" width="100"/>
                <h2 align="center">Reputation Score Index</h2>
                
                
                <Button variant="primary" color="primary" size="lg" width="50%" href="/redirect">
                    Register
                </Button>{' '}
            
                &nbsp;
                &nbsp;
                &nbsp;
            
                <Button variant="primary" color="primary" size="lg" width="75%" href="/getblock">
                    Block Transactions
                </Button>
            </div>
        )

    
}
export default Home;
