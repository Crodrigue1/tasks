import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>heading</h1>
            <header className="App-header">
                COS420,There is a header, Collin Rodrigue,
            </header>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
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
            <div>
                <img src="public\coast.jpg" alt="Coast" />
            </div>
            </div>
                </header>
                <hr></hr>
                <Counter></Counter>
                <hr />
                <RevealAnswer></RevealAnswer>
                <hr />
                <StartAttempt></StartAttempt>
                <hr />
                <TwoDice></TwoDice>
                <hr />
                <ChangeType></ChangeType>
                <hr />
                <CycleHoliday></CycleHoliday>
            </div>
    );
}

export default App;
