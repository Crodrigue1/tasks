import { queryByTestId } from "@testing-library/react";
import { builtinModules } from "module";
import { type } from "os";
import { urlToHttpOptions } from "url";
import { isQuestion } from "./functions";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const arr = questions.filter(
        (num: Question): boolean => num.published == true
    );
    return arr;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const arr = questions.filter(
        (num: Question): boolean =>
            num.body !== "" || num.expected !== "" || num.options.length !== 0
    );
    return arr;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const arr = questions.find(
        (question: Question): boolean => question.id === id
    );
    if (arr != null) {
        return arr;
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const arr = questions.filter((num: Question): boolean => num.id != id);
    return arr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const arr: string[] = [];
    questions.map((num: Question): number => arr.push(num.name));
    return arr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let pts = 0;
    questions.map((num: Question): number => (pts += num.points));
    return pts;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let pts = 0;
    questions.map((num: Question): number =>
        num.published == true ? (pts += num.points) : 1
    );
    return pts;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const firstline = "id,name,options,points,published";
    let textbody = "";
    questions.map(
        (num: Question): string =>
            (textbody +=
                num.id.toString() +
                "," +
                num.name +
                "," +
                num.options.length.toString() +
                "," +
                num.points.toString() +
                "," +
                num.published +
                "\n")
    );
    return firstline + "\n" + textbody.slice(0, -1);
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const arr: Answer[] = questions.map(
        (num: Question): Answer => ({
            questionId: num.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return arr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const arr = questions.map(
        (num: Question): Question => ({
            ...num,
            published: true
        })
    );
    return arr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length == 0) {
        return true;
    } else {
        const starting = questions[0].type;
        const arr = questions.every(
            (num: Question): boolean => num.type == starting
        );
        return arr;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const arr = questions.map((num) => {
        if (num.id === targetId) {
            return { ...num, name: newName };
        }
        return num;
    });
    return arr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const arr = questions.map((num: Question): Question => {
        if (num.id === targetId) {
            if (newQuestionType != "multiple_choice_question") {
                return { ...num, type: newQuestionType, options: [] };
            } else {
                return { ...num, type: newQuestionType };
            }
        }
        return num;
    });
    return arr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const arr = questions.map((num: Question): Question => {
        if (num.id === targetId) {
            if (targetOptionIndex === -1) {
                return { ...num, options: [...num.options, newOption] };
            } else {
                const newarr = [...num.options];
                newarr.splice(targetOptionIndex, 1, newOption);
                return { ...num, options: newarr };
            }
        } else {
            return { ...num };
        }
    });
    return arr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const arr = [...questions];
    const ind = questions.findIndex(
        (num: Question): boolean => num.id === targetId
    );
    arr.splice(ind + 1, 0, duplicateQuestion(newId, questions[ind]));
    return arr;
}
