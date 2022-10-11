import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>Header for App</h1>
            <header className="App-header">
                COS420 with React Hooks and TypeScript, Collin Rodrigue
            </header>
            <div>
                <Button onClick={() => console.log("Hello World")}>
                    Log Hello World
                </Button>
            </div>
            <p>
                <ul>
                    <li>Dogs</li>
                    <li>Cats</li>
                    <li>Fish</li>
                </ul>
            </p>
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <h2 className="App-rectangle">Column 1,</h2>
                        </Col>

                        <Col>
                            <h3 className="App-rectangle">Column 2</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
