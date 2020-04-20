import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

export default class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            filmes: []
        };
        
        this.loadFilmes = this.loadFilmes.bind(this);
    }

    componentDidMount(){
        this.loadFilmes();
    }

    loadFilmes(){
        fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
        .then((resposta) => resposta.json() )
        .then( (json) => {
            this.setState({filmes: json});
        } );
    }

    render(){
        return (
            <div className="app">      
                <div className="container">
                    <div className="lista-filmes">
                        { this.state.filmes.map((filme) => {
                            return(
                                    <article key={filme.id} className="filme">
                                        <strong>{filme.nome}</strong>
                                        <img src={filme.foto} alt="capa"/>
                                        <Link to={`/filme/${filme.id}`}> Acessar </Link>
                                    </article>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
        );
    }
}