import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, changeAttempts] = useState<number>(4);
    const [progress, changeProgress] = useState<boolean>(false);

    function endQuiz(): void {
        changeProgress(false);
    }
    function addAttempt(): void {
        changeAttempts(attempts + 1);
    }
    function subAttempt(): void {
        changeAttempts(attempts - 1);
        changeProgress(true);
    }
    return (
        <div>
            <div>
                <Button
                    onClick={subAttempt}
                    disabled={attempts === 0 || progress}
                >
                    Start Quiz
                </Button>
                <Button onClick={endQuiz} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button onClick={addAttempt} disabled={progress}>
                    Mulligan
                </Button>
            </div>
            <div>
                Remaining Attempts: <span>{attempts}</span>
            </div>
        </div>
    );
}
