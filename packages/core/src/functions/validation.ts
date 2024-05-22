export function isEmail(email: string): boolean {
 return new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(
  email
 );
}

export function isUrl(url: string): boolean {
 return new RegExp(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/).test(url);
}

export function isNumeric(text: string): boolean {
 return new RegExp(/^\d+$/).test(text);
}

export function isPhoneNumber(text: string): boolean {
 return new RegExp(/^\(?\d{2,3}\)? ?\d{4,5}-?\d{4}$/).test(text);
}

export function isRegexColor(text: string): boolean {
 return /^#[0-9A-Fa-f]{6}$/i.test(text);
}

export function isRgbColor(text: string): boolean {
 return /^rgb\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/i.test(text);
}

export function isGreaterThan(number: number, threshold: number): boolean {
 return number > threshold;
}

export function isLessThan(number: number, threshold: number): boolean {
 return number < threshold;
}

export function isEqual(value1: any, value2: any): boolean {
 return value1 === value2;
}

export function isPasswordStrong(password: string): boolean {
 const minLength = 8;
 const hasUpperCase = /[A-Z]/.test(password);
 const hasLowerCase = /[a-z]/.test(password);
 const hasDigit = /\d/.test(password);
 const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

 return (
  password.length >= minLength &&
  hasUpperCase &&
  hasLowerCase &&
  hasDigit &&
  hasSpecialChar
 );
}