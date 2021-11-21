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
/*
    const history = useHistory();
    const routeReg=()=>{
        let path = '/redirect';
        history.push(path);
    }

    const routeBlock=()=>{
        let path = '/getblock';
        history.push(path);
    }
*/
/*
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9/16);
    const imageWidth = dimensions.width;
    */
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