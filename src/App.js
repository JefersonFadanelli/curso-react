import React, { Component } from 'react';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            form:{
                email: '',
                senha: '',
                sexo: 'masculino'
            }
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.dadosForm = this.dadosForm.bind(this);
    }

    cadastrar(){
        const { email, senha } = this.state.form;
        alert( senha );
    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    render(){
        return (
            <div>      
                <h2>Novo Usuario</h2>
                <form onSubmit={this.cadastrar}>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.dadosForm}/> 
                    <br/>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={this.state.senha}
                        onChange={this.dadosForm}/> <br/>

                    <label>Sexo:</label>
                    <select name="sexo" value={this.state.sexo} onChange={this.dadosForm}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}