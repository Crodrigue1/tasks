import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, updateName] = useState<string>("Your Name");
    const [editmode, updateMode] = useState<boolean>(false);
    const [student, updateStudent] = useState<boolean>(true);

    function changeStatus(event: React.ChangeEvent<HTMLInputElement>) {
        updateStudent(event.target.checked);
    }
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        updateName(event.target.value);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {name} {student ? "is a student" : "is not a student"}
            </div>
            <Form.Check
                type="switch"
                label="Switch Edit Mode"
                checked={editmode}
                onChange={() => updateMode(!editmode)}
            />
            <div>
                {editmode && (
                    <Form.Check
                        type="switch"
                        id="Student"
                        label="Are you a Student?"
                        checked={student}
                        onChange={changeStatus}
                    />
                )}
            </div>
            <div>
                {editmode && (
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Enter Name Below</Form.Label>
                        <Form.Control value={name} onChange={changeName} />
                    </Form.Group>
                )}
            </div>
        </div>
    );
}
