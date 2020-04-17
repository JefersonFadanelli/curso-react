import React, { Component } from 'react';

import './estilos.css';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            numero: 0,
            botao: 'Começar'
        };
        
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    comecar(){
        let state = this.state;
        
        if(this.timer == null){
            this.timer = setInterval(()=>{
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);

            state.botao = 'Pausar';
        }else{
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'Começar';
        }

        this.setState(state);
    }

    limpar(){
        clearInterval(this.timer);
        this.timer = null;

        let state = this.state;
        state.numero = 0;
        state.botao = 'Começar';
        this.setState(state);
    }

    render(){
        return (
            <div className="container">      
                <img src={require('./assets/cronometro.png')} className="img" />
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.comecar}>{this.state.botao}</a>
                    <a className="botao" onClick={this.limpar}>Zerar</a>
                </div>
            </div>
        );
    }
}