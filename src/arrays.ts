/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const list = [...numbers];
    const arr: number[] = [];
    if (list.length == 0) {
        return arr;
    } else if (list.length == 1) {
        arr.push(list[0]);
        arr.push(list[0]);
        return arr;
    } else {
        arr.push(list[0]);
        arr.push(list[list.length - 1]);
        return arr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const arr = [...numbers];
    const newarr = arr.map(
        (newarr: number): number => newarr + newarr + newarr
    );
    return newarr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arr = [...numbers];
    const newarr = arr.map((newarr: string): number => parseInt(newarr));
    const nextarr = newarr.map((num: number): number => (isNaN(num) ? 0 : num));

    return nextarr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const arr = [...amounts];
    const newarr = arr.map((strname: string): string =>
        strname[0] == "$" ? strname.slice(1, strname.length) : strname
    );

    const nextarr = newarr.map((newarr: string): number => parseInt(newarr));
    const finalarr = nextarr.map((num: number): number =>
        isNaN(num) ? 0 : num
    );
    return finalarr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const arr = [...messages];
    const newarr = arr.map((strname: string): string =>
        strname[strname.length - 1] == "!" ? strname.toUpperCase() : strname
    );
    const nextarr = newarr.filter(
        (quest: string): boolean => quest[quest.length - 1] != "?"
    );
    return nextarr;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const arr = [...words];
    const size = arr.filter((str: string): boolean => !(str.length >= 4));
    return size.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const arr = [...colors];
    if (arr.length === 0) return true;
    const newarr = arr.every(
        (type: string): boolean =>
            type === "red" || type === "green" || type === "blue"
    );
    return newarr;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const arr = [...addends];
    if (arr.length == 0) return "0=0";
    let answer = "";
    arr.map((num: number): string => (answer += num.toString() + "+"));
    let eye = 0;
    arr.map((nums: number): number => (eye += nums));
    const eyes = eye.toString() + "=";
    return eyes + answer.slice(0, answer.length - 1);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const arr = [...values];
    let nums = 0;
    const nextarr = arr.findIndex((num: number) =>
        (nums += num) ? num <= 0 : num
    );
    if (nextarr == -1) {
        arr.push(nums);
    } else {
        let final = Math.abs(arr[nextarr]);
        arr.splice(nextarr + 1, 0, nums + final);
    }
    return arr;
}
