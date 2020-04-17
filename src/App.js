import React, { Component } from 'react';

import Membro from './Components/Membro';

export default class App extends Component {

    render(){
        return (
            <div>
                <Membro nome="Jef"/>
            </div>
        );
    }
}