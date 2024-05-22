"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = exports.rgbToHex = void 0;
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
