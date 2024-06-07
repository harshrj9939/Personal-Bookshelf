import React from 'react';
import Home from './components/Home'; // Import the Home component
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1>Welcome to My App</h1>
        </header>
        <main>
            <Home />
        </main>
    </div>
);

export default App;
