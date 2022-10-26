import {
    passLength,
    passSpc,
    passNum,
    startsNum,
    startsSpec,
    hasLetters,
    passLengthinv,
    passSpcinv,
    passNuminv,
    startsNuminv,
    startsSpecinv,
    hasLettersinv
} from "./passwords";

describe("Testing the dogcare password partitions", () => {
    test("Testing the passLength function", () => {
        expect(passLength("13214151")).toBe(false);
        expect(passLength("asd12315s41")).toBe(false);
        expect(passLength("1321415113231231")).toBe(true);
    });
    test("Testing the startNum function", () => {
        expect(startsNum("13214151")).toBe(true);
        expect(startsNum("asd12315s41")).toBe(false);
    });
    test("Testing the includesNum function", () => {
        expect(passNum("13214151")).toBe(true);
        expect(passNum("asdrdsae")).toBe(false);
    });
    test("Testing the startsSpec function", () => {
        expect(startsSpec("@3214151")).toBe(true);
        expect(startsSpec("asdrdsae")).toBe(false);
    });
    test("Testing the passSpc function", () => {
        expect(passSpc("3214@151")).toBe(true);
        expect(passSpc("asdrdsae")).toBe(false);
    });
    test("Testing the hasLetters function", () => {
        expect(hasLetters("@3214151")).toBe(false);
        expect(hasLetters("ADAdasd")).toBe(true);
    });
    test("Testing the passLengthinv function", () => {
        expect(passLengthinv("13214151")).toBe(false);
        expect(passLengthinv("asd12315s41")).toBe(false);
        expect(passLengthinv("13214151132312311")).toBe(true);
    });
    test("Testing the startNuminv function", () => {
        expect(startsNuminv("13214151")).toBe(true);
        expect(startsNuminv("asd12315s41")).toBe(false);
    });
    test("Testing the includesNuminv function", () => {
        expect(passNuminv("13214151")).toBe(true);
        expect(passNuminv("asdrdsae")).toBe(false);
    });
    test("Testing the startsSpec function", () => {
        expect(startsSpecinv("@3214151")).toBe(true);
        expect(startsSpecinv("asdrdsae")).toBe(false);
    });
    test("Testing the passSpcinv function", () => {
        expect(passSpcinv("3214@151")).toBe(true);
        expect(passSpcinv("asdrdsae")).toBe(false);
    });
    test("Testing the hasLetters function", () => {
        expect(hasLettersinv("@3214151")).toBe(false);
        expect(hasLettersinv("ADAdasd")).toBe(true);
    });
});
