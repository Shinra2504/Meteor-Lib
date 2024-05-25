interface String {
 bold: string;
 underline: string;
 black: string;
 red: string;
 green: string;
 yellow: string;
 blue: string;
 magenta: string;
 cyan: string;
 white: string;
 bgBlack: string;
 bgRed: string;
 bgGreen: string;
 bgYellow: string;
 bgBlue: string;
 bgMagenta: string;
 bgCyan: string;
 bgWhite: string;
}

class meteor {
 private static RESET = "\x1b[0m";
 private static styles = {
  bold: "\x1b[1m",
  underline: "\x1b[4m",
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  bgBlack: "\x1b[40m",
  bgRed: "\x1b[41m",
  bgGreen: "\x1b[42m",
  bgYellow: "\x1b[43m",
  bgBlue: "\x1b[44m",
  bgMagenta: "\x1b[45m",
  bgCyan: "\x1b[46m",
  bgWhite: "\x1b[47m"
 };
 private static icons = {
  info: "ℹ",
  warning: "⚠",
  error: "✖",
  success: "✔"
 };

static addStyleToStringPrototype(styleName: string, styleCode: string) {
 Object.defineProperty(String.prototype, styleName, {
  get: function () {
   return `${styleCode}${this}${meteor.RESET}`;
  },
  enumerable: false
 });
}

 static info(text: string): string {
  console.log(`${meteor.icons.info.blue} ${text.blue}`);
 }

 static warn(text: string): string {
  console.log(`${meteor.icons.warning.yellow} ${` WARN `.bgYellow} ${text.yellow}`);
 }

 static error(text: string): string {
  console.log(`${meteor.icons.error.red} ${` ERROR `.bgRed} ${text.red}`);
 }

 static success(text: string): string {
  console.log(`${meteor.icons.success.green} ${text.green}`);
 }
}

meteor.addStyleToStringPrototype("bold", meteor.styles.bold);
meteor.addStyleToStringPrototype("underline", meteor.styles.underline);
meteor.addStyleToStringPrototype("black", meteor.styles.black);
meteor.addStyleToStringPrototype("red", meteor.styles.red);
meteor.addStyleToStringPrototype("green", meteor.styles.green);
meteor.addStyleToStringPrototype("yellow", meteor.styles.yellow);
meteor.addStyleToStringPrototype("blue", meteor.styles.blue);
meteor.addStyleToStringPrototype("magenta", meteor.styles.magenta);
meteor.addStyleToStringPrototype("cyan", meteor.styles.cyan);
meteor.addStyleToStringPrototype("white", meteor.styles.white);
meteor.addStyleToStringPrototype("bgBlack", meteor.styles.bgBlack);
meteor.addStyleToStringPrototype("bgRed", meteor.styles.bgRed);
meteor.addStyleToStringPrototype("bgGreen", meteor.styles.bgGreen);
meteor.addStyleToStringPrototype("bgYellow", meteor.styles.bgYellow);
meteor.addStyleToStringPrototype("bgBlue", meteor.styles.bgBlue);
meteor.addStyleToStringPrototype("bgMagenta", meteor.styles.bgMagenta);
meteor.addStyleToStringPrototype("bgCyan", meteor.styles.bgCyan);
meteor.addStyleToStringPrototype("bgWhite", meteor.styles.bgWhite);

export default meteor;