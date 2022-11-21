import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [question, updateQuestion] = useState<string>(options[0]);
    function changeQuestion(event: React.ChangeEvent<HTMLSelectElement>) {
        updateQuestion(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="formQuestion">
                <Form.Label>Choose Question Answer Below</Form.Label>
                <Form.Select value={question} onChange={changeQuestion}>
                    {options.map((question: string) => (
                        <option key={question} value={question}>
                            {question}
                        </option>
                    ))}
                </Form.Select>
                <option>{question === expectedAnswer ? "✔️" : "❌"}</option>
            </Form.Group>
        </div>
    );
}
