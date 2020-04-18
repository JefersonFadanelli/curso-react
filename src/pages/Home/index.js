import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {

        };
        
    }

    render(){
        return (
            <div>      
                <h2>Home</h2><br/>
                <Link to="/sobre"> Ir para Sobre </Link>
            </div>
        );
    }
}