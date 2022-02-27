import { EXIST, FIT, WRONG } from "../constants/const.js";

export const compareWord = (word, target) =>
  word.split("").map((ch, idx) => {
    if (ch === target[idx]) return FIT;
    else if (target.split("").includes(ch)) return EXIST;
    else return WRONG;
  });
