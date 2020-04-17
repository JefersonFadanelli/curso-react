import React, { Component } from 'react';

export default class Membro extends Component {

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(nome){
        this.setState({nome: nome})
    }

    render(){
        return (
            <div>
                <h1>Hey Brother {this.state.nome}</h1>
                <button onClick={() => { this.entrar('Ariel')} }> Entrar como Ariel </button>
                <button onClick={ () => this.setState({nome: ''}) }> Sair </button>
            </div>
        );
    }
}