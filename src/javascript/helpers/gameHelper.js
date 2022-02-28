import { EXIST, FIT, WRONG } from "../constants/const.js";
import { words } from "../constants/word.js";

export const generateWord = () =>
  words[Math.floor(Math.random() * words.length)];

export const validateWord = (word) => {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  const characters = word.split("");
  let consonantCount = 0;

  for (let i = 0; i < characters.length; i++) {
    if (!vowels.includes(characters[i])) consonantCount++;
    else consonantCount = 0;

    if (3 < consonantCount) return false;
  }
  return true;
};

export const compareWord = (word, target) =>
  word.split("").map((ch, idx) => {
    if (ch === target[idx]) return FIT;
    else if (target.split("").includes(ch)) return EXIST;
    else return WRONG;
  });
