import React, { Component } from 'react';

import TodoItems from '../TodoItems';

export default class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            tarefa: '',
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let state = this.state;
        
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            this.setState({ items: [...state.items, newItem]});
        }


        e.preventDefault();
        this.setState({ tarefa: ''});
    }

    deleteItem(key){
        let filtro = this.state.items.filter( (item) => {
            return( item.key !== key );
        });

        this.setState({items: filtro});
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeHolder="Nova tarefa..." 
                        value={this.state.tarefa} onChange={(e)=> this.setState({tarefa: e.target.value})}
                        ref={ (event) => this._tarefaInput = event } 
                    />
                    <button type="submit"> Add </button>
                </form>

                <TodoItems lista={this.state.items} delete={this.deleteItem}/>

            </div>
        );
    }
}