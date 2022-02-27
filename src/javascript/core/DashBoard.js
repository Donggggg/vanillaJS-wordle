import { ALPHA_NUM, BEFORE, EXIST, FIT, WRONG } from "../constants/const.js";
import { $ } from "../helpers/domHelper.js";

export default class DashBoard {
  constructor() {
    this.init();
  }

  init() {
    this.alphaTable = {};

    for (let i = 0; i < ALPHA_NUM; i++)
      this.alphaTable[String.fromCharCode(i + "a".charCodeAt(0))] = BEFORE;
  }

  setResult(result, word) {
    result.forEach((state, idx) => {
      this.alphaTable[word[idx]] = state;
      if (state === FIT || state === EXIST)
        $(`[data-key="${word[idx]}"]`).classList.add(FIT);
      else $(`[data-key="${word[idx]}"]`).classList.add(WRONG);
    });
  }
}
