import userSelectNone from './../../../src/classes/user-select-none';

describe("UserSelectNone::class", () => {
  const defaultUserSelect = userSelectNone.defaultUserSelect;
  const defaultMozUserSelect = userSelectNone.defaultMozUserSelect;
  const defaultMsUserSelect = userSelectNone.defaultMsUserSelect;
  const defaultWebkitUserSelect = userSelectNone.defaultWebkitUserSelect;

  beforeEach(() => {
    userSelectNone.defaultUserSelect = defaultUserSelect;
    userSelectNone.defaultMozUserSelect = defaultMozUserSelect;
    userSelectNone.defaultMsUserSelect = defaultMsUserSelect;
    userSelectNone.defaultWebkitUserSelect = defaultWebkitUserSelect;
  });

  afterEach(() => {});

  it('sets the correct default data.', () => {
    expect(userSelectNone.defaultUserSelect).toEqual('auto');
    expect(userSelectNone.defaultMozUserSelect).toEqual('auto');
    expect(userSelectNone.defaultMsUserSelect).toEqual('auto');
    expect(userSelectNone.defaultWebkitUserSelect).toEqual('auto');
  });

  it('userSelect mus be none if enable and return to the original if disable.', () => {
    const defaultVal = 'aaa';
    document.body.style.userSelect = defaultVal;
    document.body.style.mozUserSelect = defaultVal;
    document.body.style.msUserSelect = defaultVal;
    document.body.style.webkitUserSelect = defaultVal;

    userSelectNone.enable();
    expect(document.body.style.userSelect).toEqual('none');
    expect(document.body.style.mozUserSelect).toEqual('none');
    expect(document.body.style.msUserSelect).toEqual('none');
    expect(document.body.style.webkitUserSelect).toEqual('none');

    userSelectNone.disable();
    expect(document.body.style.userSelect).toEqual(defaultVal);
    expect(document.body.style.mozUserSelect).toEqual(defaultVal);
    expect(document.body.style.msUserSelect).toEqual(defaultVal);
    expect(document.body.style.webkitUserSelect).toEqual(defaultVal);
  });
});
