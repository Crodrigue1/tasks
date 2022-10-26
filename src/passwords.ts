export function passLength(password: string): boolean {
    if (password.length >= 16) {
        return true;
    }
    return false;
}
export function passNum(password: string): boolean {
    if (!/[0-9]/.test(password)) {
        return false;
    }
    return true;
}
export function passSpc(password: string): boolean {
    if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
        return false;
    }
    return true;
}
export function hasLetters(password: string): boolean {
    if (/^[A-Z]/.test(password)) {
        return true;
    }
    return false;
}
export function startsNum(password: string): boolean {
    const start = password[0];
    if (!/[0123456789]/.test(start)) {
        return false;
    }
    return true;
}

export function startsSpec(password: string): boolean {
    const start = password[0];
    if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(start)) {
        return false;
    }
    return true;
}
//////////////////////////////////////////////////////////////////
export function passLengthinv(password: string): boolean {
    if (password.length <= 16) {
        return false;
    }
    return true;
}
export function passNuminv(password: string): boolean {
    if (/[0-9]/.test(password)) {
        return true;
    }
    return false;
}
export function passSpcinv(password: string): boolean {
    if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
        return true;
    }
    return false;
}
export function hasLettersinv(password: string): boolean {
    if (!/^[A-Z]/.test(password)) {
        return false;
    }
    return true;
}
export function startsNuminv(password: string): boolean {
    const start = password[0];
    if (/[0123456789]/.test(start)) {
        return true;
    }
    return false;
}

export function startsSpecinv(password: string): boolean {
    const start = password[0];
    if (/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(start)) {
        return true;
    }
    return false;
}
