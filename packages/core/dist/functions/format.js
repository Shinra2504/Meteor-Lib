"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.captalize = void 0;
function captalize(word, allWords = false) {
    return allWords
        ? word
            .split(" ")
            .map(word => captalize(word))
            .join(" ")
        : word[0].toUpperCase() + word.slice(1).toLowerCase();
}
exports.captalize = captalize;
