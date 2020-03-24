export default class {
  constructor() {
    this._prevY = 0;
    this._prevX = 0;
    this._isDragging = false;
  }

  set prevY(val) {
    this._prevY = parseInt(val, 10);
  }

  set prevX(val) {
    this._prevX = parseInt(val, 10);
  }

  set isDragging(val) {
    this._isDragging = !!val;
  }

  get prevY() {
    return this._prevY;
  }

  get prevX() {
    return this._prevX;
  }

  get isDragging() {
    return this._isDragging;
  }
};
