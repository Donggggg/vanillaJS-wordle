import {
  CORRECT,
  FINISHED,
  MAX_CHANCE_NUM,
  ONGOING,
} from "../constants/const.js";
import DashBoard from "./DashBoard.js";
import Input from "./Input.js";
import { compareWord } from "../helpers/gameHelper.js";
import Keyboard from "./Keyboard.js";

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
    this.keyboard = new Keyboard(this.handleKeyDown.bind(this));
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
    } else this.setResult(word);
  }

  finish() {
    if (this.state === CORRECT) {
      alert("정답!");
    } else if (this.state === FINISHED) {
      alert(`기회가 모두 소진되었습니다. 정답은 ${this.answerWord}입니다.`);
    }
  }

  setResult(word) {
    if (MAX_CHANCE_NUM <= this.current + 1) {
      this.state = FINISHED;
      this.finish();
    }

    const result = compareWord(word, this.answerWord);
    this.dashboard.setResult(result, word);
    this.inputs[this.current].setResult(result);
    this.inputs.push(new Input(++this.current, this.validateAnswer.bind(this)));
  }
}
