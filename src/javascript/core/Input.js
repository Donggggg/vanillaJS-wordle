import { FINISHED, MAX_TILE_NUM, ONGOING } from "../constants/const.js";
import { $$ } from "../helpers/domHelper.js";
import { isAlpha } from "../helpers/stringHelper.js";

export default class Input {
  constructor(index, validate) {
    this.init(index);
    this.validate = validate;
  }

  init(index) {
    this.state = ONGOING;
    this.current = 0;
    this.alphas = [...Array.from(Array(MAX_TILE_NUM))].map((_) => " ");
    this.row = $$(".game-board-row")[index];
    this.tiles = $$(".game-board-tile", this.row);
  }

  handleKeyDown(key) {
    if (key === "Backspace") this.removeTile();
    else if (key === "Enter" && this.current === MAX_TILE_NUM)
      this.validate(this.alphas.join(""));
    else if (this.current < MAX_TILE_NUM && isAlpha(key)) this.setTile(key);
  }

  setTile(key) {
    this.alphas[this.current] = key;
    this.tiles[this.current].innerText = key;
    this.tiles[this.current].classList.add("fill");
    this.current++;
  }

  removeTile() {
    const removeIndex = this.current - 1;

    if (removeIndex < 0) return;

    this.alphas[removeIndex] = " ";
    this.tiles[removeIndex].innerText = " ";
    this.current = removeIndex;
  }

  setResult(result) {
    this.state = FINISHED;
    result.forEach((state, idx) => {
      this.tiles[idx].classList.remove("fill");
      this.tiles[idx].classList.add(state);
    });
  }
}
