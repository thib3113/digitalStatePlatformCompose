import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        environment:"dev"
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to DigitalState docker-compose generator</h1>
                </header>
                <p className="App-intro">
                    Step 1 : Select your services
                </p>
                <p>
                    Step 2 : Select your environment
                    <select ></select>
                </p>
            </div>
        );
    }
}

export default App;
