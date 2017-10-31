import React, { Component } from 'react';
import Navigation from '../components/Navigation';

class App extends Component {
    render() {
        return (
			<div id="app" className="container">
                <h1>Monster Manager</h1>
                <Navigation />
            </div>
        );
    }
}

export default App;