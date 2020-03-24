import Position from './../../../src/classes/position';

describe("Position::class", () => {
  let position;

  beforeEach(() => {
    position = new Position();
  });

  afterEach(() => {});

  it('sets the correct default data.', () => {
    expect(position.prevY).toEqual(0);
    expect(position.prevX).toEqual(0);
    expect(position.isDragging).toEqual(false);
  });

  it('get int if set string.', () => {
    position.prevY = '10px';
    position.prevX = '20px';
    expect(position.prevY).toEqual(10);
    expect(position.prevX).toEqual(20);
  });

  it('get bool if set something other than bool.', () => {
    position.isDragging = 'false';
    expect(position.isDragging).toEqual(true);
  });
});
