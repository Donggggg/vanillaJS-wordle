import { $$ } from "../helpers/domHelper.js";

export default class Keyboard {
  constructor(handleClickKeyboard) {
    this.init();
    this.setEvent(handleClickKeyboard);
  }

  init() {
    this.keys = $$("button");
  }

  setEvent(handleClickKeyboard) {
    this.keys.forEach((key) => {
      key.addEventListener(
        "click",
        handleClickKeyboard.bind(this, { key: key.dataset.key })
      );
    });
  }
}
