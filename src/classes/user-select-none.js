export default new class {
  constructor() {
    this.defaultUserSelect = 'auto';
    this.defaultMozUserSelect = 'auto';
    this.defaultMsUserSelect = 'auto';
    this.defaultWebkitUserSelect = 'auto';
  }

  enable() {
    this.defaultUserSelect = document.body.style.userSelect;
    this.defaultMozUserSelect = document.body.style.mozUserSelect;
    this.defaultMsUserSelect = document.body.style.msUserSelect;
    this.defaultWebkitUserSelect = document.body.style.webkitUserSelect;
    document.body.style.userSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
  }

  disable() {
    document.body.style.userSelect = this.defaultUserSelect;
    document.body.style.mozUserSelect = this.defaultMozUserSelect;
    document.body.style.msUserSelect = this.defaultMsUserSelect;
    document.body.style.webkitUserSelect = this.defaultWebkitUserSelect;
  }
}();
