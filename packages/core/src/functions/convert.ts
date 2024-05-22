export function rgbToHex(red: number, green: number, blue: number): string {
 const clamp = (value: number) => Math.min(255, Math.max(0, Math.round(value)));

 const toHex = (value: number) => {
  const hex = value.toString(16).toUpperCase();
  return hex.length === 1 ? "0" + hex : hex;
 };

 const redHex = toHex(clamp(red));
 const greenHex = toHex(clamp(green));
 const blueHex = toHex(clamp(blue));

 return `#${redHex}${greenHex}${blueHex}`;
}

export function hexToRgb(
 hex: string
): { red: number; green: number; blue: number } | null {
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

/**
 * Converte uma string para um número.
 * @param str - A string a ser convertida.
 * @returns O número convertido ou NaN se a conversão falhar.
 */
export function stringToNumber(str: string): number {
 const num = parseFloat(str);
 return isNaN(num) ? NaN : num;
}

/**
 * Converte um número para uma string.
 * @param num - O número a ser convertido.
 * @returns A string resultante da conversão.
 */
export function numberToString(num: number): string {
 return num.toString();
}

/**
 * Converte uma string para um objeto Date.
 * @param str - A string a ser convertida no formato ISO ou outro formato reconhecido pelo construtor Date.
 * @returns O objeto Date ou null se a conversão falhar.
 */
export function stringToDate(str: string): Date | null {
 const date = new Date(str);
 return isNaN(date.getTime()) ? null : date;
}

/**
 * Converte um objeto Date para uma string no formato ISO.
 * @param date - O objeto Date a ser convertido.
 * @returns A string no formato ISO.
 */
export function dateToString(date: Date): string {
 return date.toISOString();
}

/**
 * Converte um valor booleano para uma string ("true" ou "false").
 * @param bool - O valor booleano a ser convertido.
 * @returns A string resultante da conversão.
 */
export function booleanToString(bool: boolean): string {
 return bool.toString();
}

/**
 * Converte uma string para um valor booleano.
 * Aceita "true", "false", "1" e "0" (case-insensitive).
 * @param str - A string a ser convertida.
 * @returns O valor booleano resultante da conversão ou null se a string não puder ser convertida.
 */
export function stringToBoolean(str: string): boolean | null {
 const lowerStr = str.toLowerCase();
 if (lowerStr === "true" || lowerStr === "1") return true;
 if (lowerStr === "false" || lowerStr === "0") return false;
 return null;
}

/**
 * Converte um objeto JSON para uma string.
 * @param obj - O objeto JSON a ser convertido.
 * @returns A string JSON resultante da conversão.
 */
export function jsonToString(obj: object): string {
 return JSON.stringify(obj);
}

/**
 * Converte uma string JSON para um objeto.
 * @param str - A string JSON a ser convertida.
 * @returns O objeto JSON resultante da conversão ou null se a conversão falhar.
 */
export function stringToJson(str: string): object | null {
 try {
  return JSON.parse(str);
 } catch {
  return null;
 }
}

/**
 * Converte um array para uma string, com os elementos separados por um delimitador.
 * @param arr - O array a ser convertido.
 * @param delimiter - O delimitador usado para separar os elementos na string.
 * @returns A string resultante da conversão.
 */
export function arrayToString(arr: any[], delimiter: string = ","): string {
 return arr.join(delimiter);
}

/**
 * Converte uma string para um array, separando os elementos por um delimitador.
 * @param str - A string a ser convertida.
 * @param delimiter - O delimitador usado para separar os elementos na string.
 * @returns O array resultante da conversão.
 */
export function stringToArray(str: string, delimiter: string = ","): string[] {
 return str.split(delimiter);
}
