import {
  CORRECT,
  FINISHED,
  MAX_CHANCE_NUM,
  ONGOING,
} from "../constants/const.js";
import DashBoard from "./DashBoard.js";
import Input from "./Input.js";
import { compareWord } from "../helpers/gameHelper.js";

export default class Game {
  constructor() {
    this.init();
    this.setEvent();
  }

  init() {
    this.state = ONGOING;
    this.answerWord = "world";
    this.current = 0;
    this.chanceCount = MAX_CHANCE_NUM;
    this.dashboard = new DashBoard();
    this.inputs = [new Input(this.current, this.validateAnswer.bind(this))];
  }

  setEvent() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    if (this.state !== ONGOING) return;
    this.inputs[this.current].handleKeyDown(e.key);
  }

  validateAnswer(word) {
    if (word === this.answerWord) {
      this.state = CORRECT;
      this.finish();
    }
    this.setResult(word);
  }

  finish() {}

  setResult(word) {
    if (MAX_CHANCE_NUM <= this.current + 1) {
      this.state = FINISHED;
      this.finish();
    }

    this.inputs[this.current].setResult(compareWord(word, this.answerWord));

    this.inputs.push(new Input(++this.current, this.validateAnswer.bind(this)));
  }
}
