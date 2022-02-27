import { MAX_CHANCE_NUM } from "../constants/const.js";
import DashBoard from "./DashBoard.js";
import Input from "./Input.js";

export default class Game {
  constructor() {
    this.init();
    this.setEvent();
  }

  init() {
    this.answerWord = "world";
    this.current = 0;
    this.chanceCount = MAX_CHANCE_NUM;
    this.dashboard = new DashBoard();
    this.inputs = [new Input(this.current)];
  }

  setEvent() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(e) {
    this.inputs[this.current].handleKeyDown(e.key);
  }

  validateAnswer() {
    // 정답인지 아닌지 검사하는 함수
  }
}
