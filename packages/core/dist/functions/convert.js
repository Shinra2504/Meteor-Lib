"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToArray = exports.arrayToString = exports.stringToJson = exports.jsonToString = exports.stringToBoolean = exports.booleanToString = exports.dateToString = exports.stringToDate = exports.numberToString = exports.stringToNumber = exports.hexToRgb = exports.rgbToHex = void 0;
function rgbToHex(red, green, blue) {
    const clamp = (value) => Math.min(255, Math.max(0, Math.round(value)));
    const toHex = (value) => {
        const hex = value.toString(16).toUpperCase();
        return hex.length === 1 ? "0" + hex : hex;
    };
    const redHex = toHex(clamp(red));
    const greenHex = toHex(clamp(green));
    const blueHex = toHex(clamp(blue));
    return `#${redHex}${greenHex}${blueHex}`;
}
exports.rgbToHex = rgbToHex;
function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
        return null;
    }
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map(char => char + char)
            .join("");
    }
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return { red, green, blue };
}
exports.hexToRgb = hexToRgb;
/**
 * Converte uma string para um número.
 * @param str - A string a ser convertida.
 * @returns O número convertido ou NaN se a conversão falhar.
 */
function stringToNumber(str) {
    const num = parseFloat(str);
    return isNaN(num) ? NaN : num;
}
exports.stringToNumber = stringToNumber;
/**
 * Converte um número para uma string.
 * @param num - O número a ser convertido.
 * @returns A string resultante da conversão.
 */
function numberToString(num) {
    return num.toString();
}
exports.numberToString = numberToString;
/**
 * Converte uma string para um objeto Date.
 * @param str - A string a ser convertida no formato ISO ou outro formato reconhecido pelo construtor Date.
 * @returns O objeto Date ou null se a conversão falhar.
 */
function stringToDate(str) {
    const date = new Date(str);
    return isNaN(date.getTime()) ? null : date;
}
exports.stringToDate = stringToDate;
/**
 * Converte um objeto Date para uma string no formato ISO.
 * @param date - O objeto Date a ser convertido.
 * @returns A string no formato ISO.
 */
function dateToString(date) {
    return date.toISOString();
}
exports.dateToString = dateToString;
/**
 * Converte um valor booleano para uma string ("true" ou "false").
 * @param bool - O valor booleano a ser convertido.
 * @returns A string resultante da conversão.
 */
function booleanToString(bool) {
    return bool.toString();
}
exports.booleanToString = booleanToString;
/**
 * Converte uma string para um valor booleano.
 * Aceita "true", "false", "1" e "0" (case-insensitive).
 * @param str - A string a ser convertida.
 * @returns O valor booleano resultante da conversão ou null se a string não puder ser convertida.
 */
function stringToBoolean(str) {
    const lowerStr = str.toLowerCase();
    if (lowerStr === "true" || lowerStr === "1")
        return true;
    if (lowerStr === "false" || lowerStr === "0")
        return false;
    return null;
}
exports.stringToBoolean = stringToBoolean;
/**
 * Converte um objeto JSON para uma string.
 * @param obj - O objeto JSON a ser convertido.
 * @returns A string JSON resultante da conversão.
 */
function jsonToString(obj) {
    return JSON.stringify(obj);
}
exports.jsonToString = jsonToString;
/**
 * Converte uma string JSON para um objeto.
 * @param str - A string JSON a ser convertida.
 * @returns O objeto JSON resultante da conversão ou null se a conversão falhar.
 */
function stringToJson(str) {
    try {
        return JSON.parse(str);
    }
    catch (_a) {
        return null;
    }
}
exports.stringToJson = stringToJson;
/**
 * Converte um array para uma string, com os elementos separados por um delimitador.
 * @param arr - O array a ser convertido.
 * @param delimiter - O delimitador usado para separar os elementos na string.
 * @returns A string resultante da conversão.
 */
function arrayToString(arr, delimiter = ",") {
    return arr.join(delimiter);
}
exports.arrayToString = arrayToString;
/**
 * Converte uma string para um array, separando os elementos por um delimitador.
 * @param str - A string a ser convertida.
 * @param delimiter - O delimitador usado para separar os elementos na string.
 * @returns O array resultante da conversão.
 */
function stringToArray(str, delimiter = ",") {
    return str.split(delimiter);
}
exports.stringToArray = stringToArray;
