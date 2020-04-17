import React, { Component } from 'react';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
          show: false  
        };

        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }

    sair(){
        this.setState({show: false});
    }

    entrar(){
        this.setState({show: true});
    }

    render(){
        return (
            <div>

                { this.state.show ?
                    <div> 
                        <h1>bem vindo ao sistema</h1>
                        <button onClick={this.sair}> Sair </button>
                    </div>
                    :
                    <div> 
                        <h1>Acesse o sistema </h1>
                        <button onClick={this.entrar}> Acessar </button>
                    </div>
                }
                
            </div>
        );
    }
}