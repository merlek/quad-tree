import { Circle } from 'canvas-tools';
import { randomInt } from 'utility-functions';
import { Point, Rect } from '../src/data-structures';
import { QuadTree } from '../src/quad-tree';

export const width = 400;
export const height = 400;

export class QuadTreeApp {
  private qtree: QuadTree;
  private ctx: CanvasRenderingContext2D;
  private animationFrameId?: number;
  constructor(containerId: string, private canvas: HTMLCanvasElement) {
    if (!this.canvas) {
      this.canvas = <HTMLCanvasElement>document.createElement('canvas');
      this.canvas.width = width;
      this.canvas.height = height;
      this.canvas.style.cssText = 'width: 100%;';

      const container = document.getElementById(containerId);
      if (container?.innerHTML) {
        container.innerHTML = '';
      }
      container?.append(this.canvas);
    }
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.qtree = this.setupQuadTree();
    this.draw();
    window.requestAnimationFrame(this.update(0));
  }
  private setupQuadTree(): QuadTree {
    const qtree = new QuadTree(new Rect(new Point(200, 200), 400, 400));
    console.log(qtree);

    for (let i = 0; i < 100; i++) {
      qtree.insert(new Point(randomInt(0)(width), randomInt(0)(height)));
    }

    return qtree;
  }
  private update = (t1: DOMHighResTimeStamp) => (t2: DOMHighResTimeStamp) => {
    if (t2 - t1 > 1000 / 30) {
      this.draw();
      this.animationFrameId = window.requestAnimationFrame(this.update(t2));
    } else {
      this.animationFrameId = window.requestAnimationFrame(this.update(t1));
    }
  };
  private drawQuadTree(ctx: CanvasRenderingContext2D, qt: QuadTree) {
    ctx.strokeRect(
      qt.bound.center.x - qt.bound.width / 2,
      qt.bound.center.y - qt.bound.height / 2,
      qt.bound.width,
      qt.bound.height
    );

    qt.points.forEach(p =>
      Circle.draw(ctx, {
        center: p,
        radius: 2,
        fillStyle: 'rgb(255,100,100)'
      })
    );

    if (qt.divided) {
      qt.children.forEach(child => this.drawQuadTree(ctx, child));
    }
  }
  private draw = (
    ctx: CanvasRenderingContext2D = this.ctx,
    qt: QuadTree = this.qtree
  ) => {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';

    this.drawQuadTree(ctx, qt);
  };
  destroy(): void {
    if (this.animationFrameId) {
      window.cancelAnimationFrame(this.animationFrameId);
    }
  }
}

(window as any).QuadTreeApp = QuadTreeApp;
