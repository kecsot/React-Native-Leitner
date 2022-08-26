export const textValidator = {
    isTextLengthMoreThan,
    isEmailValid
};

function isTextLengthMoreThan(text, length) {
    return text.trim().length > length;
}

function isEmailValid(email) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(email) !== false;
}