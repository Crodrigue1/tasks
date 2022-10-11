import React from "react";
import { Button } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Header for App</h1>
            <header className="App-header">
                COS420 with React Hooks and TypeScript, Collin Rodrigue
            </header>
            <p>
                <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Fish</li>
                </ul>
            </p>
        </div>
    );
}

export default App;
