import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sobre extends Component {

    constructor(props){
        super(props);

        this.state = {

        };
        
    }

    render(){
        return (
            <div>      
                <h2>Sobre</h2><br/>
                <Link to="/"> Voltar para Home </Link>
            </div>
        );
    }
}