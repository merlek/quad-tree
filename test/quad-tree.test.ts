import { Point, Rect } from '../src/data-structures';
import { QuadTree } from '../src/quad-tree';
import { randomInt } from 'utility-functions';

// const precision = 9;

describe('quad-tree', () => {
  const size = 1000;
  const qtree = new QuadTree(
    new Rect(new Point(size / 2, size / 2), size, size)
  );

  afterAll(function() {});

  it('quad-tree can insert and query', () => {
    for (let i = 0; i < size; i++) {
      qtree.insert(new Point(randomInt(0)(size), randomInt(0)(size)));
    }

    const point = new Point(randomInt(0)(size), randomInt(0)(size));
    qtree.insert(point);

    const found = qtree.query(new Rect(point, 10, 10));

    expect(found.includes(point)).toBeTrue();
  });
});
