import React, { Component } from 'react';

import Header from './components/Header';
import Routes from './routes';

import './estilos.css';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {

        };
        
    }

    render(){
        return (
            <div>      
                <Routes/>
            </div>
        );
    }
}