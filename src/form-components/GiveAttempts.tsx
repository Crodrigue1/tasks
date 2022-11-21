import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, updateAttempts] = useState<number>(3);
    const [requestattempts, updateRequest] = useState<number>(0);
    const isNan = 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts: {attempts}
            <Form.Group controlId="formAttempts">
                <Form.Control
                    value={requestattempts}
                    type="number"
                    onChange={(
                        event: React.ChangeEvent<
                            | HTMLTextAreaElement
                            | HTMLInputElement
                            | HTMLSelectElement
                        >
                    ) => updateRequest(parseInt(event.target.value) || isNan)}
                />
            </Form.Group>
            <Button
                onClick={() => updateAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use Attempt
            </Button>
            <Button onClick={() => updateAttempts(attempts + requestattempts)}>
                Gain
            </Button>
        </div>
    );
}
