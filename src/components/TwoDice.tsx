import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [rightDie, numRight] = useState<number>(1);
    const [leftDie, numLeft] = useState<number>(2);

    function rollRight(): void {
        numRight(d6());
    }
    function rollLeft(): void {
        numLeft(d6());
    }
    return (
        <div>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <span data-testid="left-die">{leftDie}</span>
                <Button onClick={rollRight}>Roll Right</Button>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <div>
                {rightDie === leftDie && rightDie !== 1 && <div>You Win</div>}
                {rightDie === leftDie && rightDie == 1 && <div>You Lose</div>}
            </div>
        </div>
    );
}
