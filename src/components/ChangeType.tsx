import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [starttype, changetype] = useState<QuestionType>(
        "short_answer_question"
    );
    function newtype(): void {
        if (starttype === "short_answer_question") {
            changetype("multiple_choice_question");
        } else {
            changetype("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={newtype}>Change Type</Button>
            {starttype === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
