import { Circle, Animators, Mouse } from 'canvas-tools';
import { randomInt } from 'utility-functions';
import { Point, Rect } from '../src/data-structures';
import { QuadTree } from '../src/quad-tree';

 const width = 400;
 const height = 400;
 const querySize = 100;

export class QuadTreeApp extends Animators.CanvasAnimator {
  private qtree = new QuadTree(
    new Rect(new Point(width / 2, height / 2), width, height)
  );
  private queryRange = new Rect(new Point(width / 2, height / 2), querySize, querySize);
  constructor(containerId: string) {
    super(Animators.createCanvasElement(containerId, width, height));
  }
  public setup(): QuadTree {
    console.log(this.qtree);

    for (let i = 0; i < 1000; i++) {
      this.qtree.insert(new Point(randomInt(0)(width), randomInt(0)(height)));
    }

    const getMousePos = Mouse.getMousePos(this.canvas);
    this.canvas.addEventListener('mousemove', e => {
      const pos = getMousePos(e);
      this.queryRange = new Rect(new Point(pos.x, pos.y), querySize, querySize);
    });

    return this.qtree;
  }
  public draw(
    qt: QuadTree = this.qtree,
    ctx: CanvasRenderingContext2D = this.ctx
  ) {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';

    this.drawQuadTree(ctx, qt);

    ctx.strokeStyle = 'green';
    this.strokeRect(ctx, this.queryRange);

    this.qtree.query(this.queryRange).forEach(p =>
      Circle.draw(ctx, {
        center: p,
        radius: 2,
        fillStyle: 'rgb(100,255,100)'
      })
    );
  }
  private drawQuadTree(ctx: CanvasRenderingContext2D, qt: QuadTree) {
    this.strokeRect(ctx, qt.bound);

    qt.points.forEach(p =>
      Circle.draw(ctx, {
        center: p,
        radius: 1,
        fillStyle: 'rgb(255,255,255)'
      })
    );

    if (qt.divided) {
      qt.children.forEach(child => this.drawQuadTree(ctx, child));
    }
  }
  private strokeRect(ctx: CanvasRenderingContext2D, rect: Rect) {
    ctx.strokeRect(
      rect.center.x - rect.width / 2,
      rect.center.y - rect.height / 2,
      rect.width,
      rect.height
    );
  }
}

(window as any).QuadTreeApp = QuadTreeApp;
