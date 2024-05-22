export * from "./functions/validation";
export * from "./functions/convert";import {
  rgbToHex,
  hexToRgb,
  stringToNumber,
  numberToString,
  stringToDate,
  dateToString,
  booleanToString,
  stringToBoolean,
  jsonToString,
  stringToJson,
  arrayToString,
  stringToArray
} from './functions/convert'; // Corrigindo o caminho de importação

console.log("Testando rgbToHex:");
console.log(rgbToHex(255, 255, 255)); // #FFFFFF
console.log(rgbToHex(0, 0, 0)); // #000000
console.log(rgbToHex(255, 0, 0)); // #FF0000
console.log(rgbToHex(0, 255, 0)); // #00FF00
console.log(rgbToHex(0, 0, 255)); // #0000FF
console.log(rgbToHex(300, -10, 128)); // #FF0080 (clamping)

console.log("\nTestando hexToRgb:");
console.log(hexToRgb("#FFFFFF")); // { red: 255, green: 255, blue: 255 }
console.log(hexToRgb("#000000")); // { red: 0, green: 0, blue: 0 }
console.log(hexToRgb("#FF0000")); // { red: 255, green: 0, blue: 0 }
console.log(hexToRgb("#00FF00")); // { red: 0, green: 255, blue: 0 }
console.log(hexToRgb("#0000FF")); // { red: 0, green: 0, blue: 255 }
console.log(hexToRgb("#GGGGGG")); // null (invalid hex)

console.log("\nTestando stringToNumber:");
console.log(stringToNumber("123.45")); // 123.45
console.log(stringToNumber("abc")); // NaN
console.log(stringToNumber("")); // NaN

console.log("\nTestando numberToString:");
console.log(numberToString(123.45)); // "123.45"
console.log(numberToString(0)); // "0"

console.log("\nTestando stringToDate:");
console.log(stringToDate("2024-05-22")); // Date object
console.log(stringToDate("22-05-2024")); // null (invalid date format)
console.log(stringToDate("invalid date")); // null

console.log("\nTestando dateToString:");
console.log(dateToString(new Date("2024-05-22"))); // "2024-05-22T00:00:00.000Z"
console.log(dateToString(new Date())); // "current date and time"

console.log("\nTestando booleanToString:");
console.log(booleanToString(true)); // "true"
console.log(booleanToString(false)); // "false"

console.log("\nTestando stringToBoolean:");
console.log(stringToBoolean("true")); // true
console.log(stringToBoolean("false")); // false
console.log(stringToBoolean("1")); // true
console.log(stringToBoolean("0")); // false
console.log(stringToBoolean("invalid")); // null

console.log("\nTestando jsonToString:");
console.log(jsonToString({ a: 1, b: "text" })); // '{"a":1,"b":"text"}'
console.log(jsonToString([1, 2, 3])); // '[1,2,3]'

console.log("\nTestando stringToJson:");
console.log(stringToJson('{"a":1,"b":"text"}')); // { a: 1, b: "text" }
console.log(stringToJson('[1,2,3]')); // [1, 2, 3]
console.log(stringToJson('invalid')); // null

console.log("\nTestando arrayToString:");
console.log(arrayToString([1, 2, 3])); // "1,2,3"
console.log(arrayToString(["a", "b", "c"], ";")); // "a;b;c"

console.log("\nTestando stringToArray:");
console.log(stringToArray("1,2,3")); // ["1", "2", "3"]
console.log(stringToArray("a;b;c", ";")); // ["a", "b", "c"]
