import { ALPHA_NUM, BEFORE } from "../constants/const.js";

export default class DashBoard {
  constructor() {
    this.init();
  }

  init() {
    this.alphaTable = {};

    for (let i = 0; i < ALPHA_NUM; i++)
      this.alphaTable[String.fromCharCode(i + "a".charCodeAt(0))] = BEFORE;
  }
}
