import { MAX_TILE_NUM, ONGOING } from "../constants/const.js";
import { $$ } from "../helpers/domHelper.js";
import { isAlpha } from "../helpers/stringHelper.js";

export default class Input {
  constructor(index) {
    this.init(index);
  }

  init(index) {
    this.state = ONGOING;
    this.current = 0;
    this.alphas = [...Array.from(Array(MAX_TILE_NUM))].map((_) => " ");
    this.row = $$(".game-board-row")[index];
    this.tiles = $$(".game-board-tile", this.row);
  }

  handleKeyDown(key) {
    if (key === "Backspace") {
      this.removeTile();
      return;
    }

    if (MAX_TILE_NUM <= this.current || !isAlpha(key)) return;

    this.setTile(key);
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
}
