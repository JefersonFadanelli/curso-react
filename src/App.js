import React, { Component } from 'react';


import './estilos.css';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            textoFrase: ''
        };

        this.frases = [ 'Frase 1', 'Frase 2', 'Frase 3'];

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[numeroAleatorio];
        this.setState(state);
    }

    render(){
        return (
            <div className="container">      
                <img src={require('./assets/biscoito.jpg')} className="img"/>
                <Botao acaoBtn={this.quebraBiscoito}/>
                <h3 className="frase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
        <div>
            <button onClick={this.props.acaoBtn}>Abrir Biscoito</button>
        </div>
        );
    }
}