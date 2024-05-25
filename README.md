# meteor-utils

```shell
npm install meteor-utils
```

### Validation

```javascript
import { 
  isEmail,
  isUrl,
  isNumeric,
  isPhoneNumber,
  isRegexColor,
  isRgbColor,
  isGreaterThan,
  isLessThan,
  isEqual,
  isPasswordStrong
} from "meteor-utils";
```

```javascript
// isEmail Usage
console.log(isEmail('test@example.com')); // true
console.log(isEmail('invalid-email')); // false

// isUrl Usage
console.log(isUrl('https://example.com')); // true
console.log(isUrl('invalid-url')); // false

// isNumeric Usage
console.log(isNumeric('12345')); // true
console.log(isNumeric('123a45')); // false

// isPhoneNumber Usage
console.log(isPhoneNumber('(123) 456-7890')); // true
console.log(isPhoneNumber('invalid-phone-number')); // false

// isRegexColor Usage
console.log(isRegexColor('#AABBCC')); // true
console.log(isRegexColor('AABBCC')); // false

// isRgbColor Usage
console.log(isRgbColor('rgb(255, 255, 255)')); // true
console.log(isRgbColor('rgb(255, 255, 256)')); // false

// isGreaterThan Usage
console.log(isGreaterThan(10, 5)); // true
console.log(isGreaterThan(5, 10)); // false

// isLessThan Usage
console.log(isLessThan(5, 10)); // true
console.log(isLessThan(10, 5)); // false

//isEqual Usage
console.log(isEqual(5, 5)); // true
console.log(isEqual(5, '5')); // false

//isPasswordStrong Usage

// At least 8 characters long
// Contains at least one uppercase letterContains at least one lowercase letter
// Contains at least one digit
// Contains at least one special character

console.log(isPasswordStrong('Str0ng!Pass')); // true
console.log(isPasswordStrong('weakpass')); // false
```

# meteor-color

```sheel
npm install meteor-color
```

```javascript
import meteor from "meteor-color";
```

### Usage
```javascript
// Functions
meteor.warn("This is warn!") // Warning
meteor.error("This is error!") // Error
meteor.success("This is success") // Success
meteor.info("This is info") // Info

// Text Formatation
console.log("Bold Message".bold) // Bold Message
console.log("Underline Message".underline) // Underline Messsage

// Colors
console.log("Hello World".black) // Black
console.log("Hello World".red) // Red
console.log("Hello World".green) // Green
console.log("Hello World".yellow) // Yellow
console.log("Hello World".blue) // Blue
console.log("Hello World".magenta) // Magenta
console.log("Hello World".cyan) // Cyan
console.log("Hello World".White) // White

// Background Colors
console.log("Hello World".bgBlack) // Background Black
console.log("Hello World".bgRed) // Background Red
console.log("Hello World".bgGreen) // Background Green
console.log("Hello World".bgBlue) // Background Blue
console.log("Hello World".bgMagenta) // Background Magenta
console.log("Hello World".bgCyan) // Background Cyan
console.log("Hello World".bgWhite) // Background White
```