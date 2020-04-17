import React, { Component } from 'react';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: '',
            sexo: 'Masculino'
        };

        this.trocarEmail = this.trocarEmail.bind(this);
        this.atualizarSexo = this.atualizarSexo.bind(this);
    }

    trocarEmail(e){
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    atualizarSexo(e){
        this.setState({sexo: e.target.value});
    }

    render(){
        return (
            <div>      
                
                <h2>Formulario</h2>
                Email:
                <input type="email" name="email" value={this.state.email}
                    onChange={this.trocarEmail}/> 
                <br/>
                Senha:
                <input type="password" name="senha" value={this.state.senha}
                    onChange={(e)=> this.setState({senha: e.target.value})}/> <br/>

                Sexo:
                <select name="sexo" value={this.state.sexo} onChange={this.atualizarSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>

            </div>
        );
    }
}