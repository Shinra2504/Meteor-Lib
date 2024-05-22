export function captalize(word: string, allWords: boolean = false): string {
 return allWords
  ? word
     .split(" ")
     .map(word => captalize(word))
     .join(" ")
  : word[0].toUpperCase() + word.slice(1).toLowerCase();
}
