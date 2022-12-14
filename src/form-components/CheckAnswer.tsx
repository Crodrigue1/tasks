import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, input] = useState<string>("");

    function updateAnswer(
        event: React.ChangeEvent<
            HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
        >
    ) {
        input(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formAnswer">
                <Form.Label>Check Answer Below</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
                <option>{answer === expectedAnswer ? "✔️" : "❌"}</option>
            </Form.Group>
        </div>
    );
}
