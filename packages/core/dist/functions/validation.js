"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateValid = exports.isPasswordStrong = exports.isEqual = exports.isLessThan = exports.isGreaterThan = exports.isRgbColor = exports.isRegexColor = exports.isPhoneNumber = exports.isNumeric = exports.isUrl = exports.isEmail = void 0;
function isEmail(email) {
    return new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email);
}
exports.isEmail = isEmail;
function isUrl(url) {
    return new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).test(url);
}
exports.isUrl = isUrl;
function isNumeric(text) {
    return new RegExp(/^\d+$/).test(text);
}
exports.isNumeric = isNumeric;
function isPhoneNumber(text) {
    return new RegExp(/^\(?\d{2,3}\)? ?\d{4,5}-?\d{4}$/).test(text);
}
exports.isPhoneNumber = isPhoneNumber;
function isRegexColor(text) {
    return /^#[0-9A-Fa-f]{6}$/i.test(text);
}
exports.isRegexColor = isRegexColor;
function isRgbColor(text) {
    return /^rgb\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/i.test(text);
}
exports.isRgbColor = isRgbColor;
function isGreaterThan(number, threshold) {
    return number > threshold;
}
exports.isGreaterThan = isGreaterThan;
function isLessThan(number, threshold) {
    return number < threshold;
}
exports.isLessThan = isLessThan;
function isEqual(value1, value2) {
    return value1 === value2;
}
exports.isEqual = isEqual;
function isPasswordStrong(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    return (password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        hasSpecialChar);
}
exports.isPasswordStrong = isPasswordStrong;
function isDateValid(dateString) {
    const regex = /^(\d{4}-\d{2}-\d{2}|\d{2}-\d{2}-\d{4})$/;
    if (!regex.test(dateString))
        return false;
    const [year, month, day] = dateString.split(/[-]/).map(Number);
    const date = new Date(year, month - 1, day);
    return (date.getFullYear() === year &&
        date.getMonth() + 1 === month &&
        date.getDate() === day);
}
exports.isDateValid = isDateValid;
