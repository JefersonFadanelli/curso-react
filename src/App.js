import React, { Component } from 'react';
import Feed from './components/Feed'

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
          feed:[
              {id: 1, username: 'Jeferson', curtidas:333, comentarios:3},
              {id: 2, username: 'Ariel', curtidas:105, comentarios:3},
              {id: 3, username: 'Fadanelli', curtidas:1020, comentarios:3},
              {id: 4, username: 'Lucas', curtidas:10, comentarios:10},
              {id: 5, username: 'Adelar', curtidas:2, comentarios:3},
          ]
        };
    }

    render(){
        return (
            <div>      
                
                {this.state.feed.map((item) => {
                    return(
                        <Feed id={item.id} username={item.username} 
                        curtidas={item.curtidas} comentarios = {item.comentarios}/>
                    );
                })}

            </div>
        );
    }
}