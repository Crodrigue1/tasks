import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { COLORS } from "../bad-components/ColoredBox";
const colors = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];
export function ChangeColor(): JSX.Element {
    const [color, newColor] = useState<string>("red");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        newColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <>
                    <Form.Check
                        inline
                        type="radio"
                        id="color"
                        name="color"
                        value={color}
                        label={color}
                        onChange={updateColor}
                    />
                </>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}
            </div>
        </div>
    );
}
