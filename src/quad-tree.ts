import { Rect, Point } from './data-structures';

export class QuadTree {
  static capacity = 4;
  public points: Point[] = [];
  public children: QuadTree[] = [];
  constructor(public bound: Rect) {}
  public insert(point: Point): boolean {
    if (!this.bound.contains(point)) {
      return false;
    }

    if (this.points.length < QuadTree.capacity) {
      this.points.push(point);
      return true;
    } else {
      if (!this.divided) {
        this.subdivide();
      }

      return this.children.reduce<boolean>(
        (inserted, child) => inserted || child.insert(point),
        false
      );
    }
  }
  get divided() {
    return this.children.length > 0;
  }
  private subdivide(): void {
    const x = this.bound.center.x;
    const y = this.bound.center.y;
    const w = this.bound.width / 2;
    const h = this.bound.height / 2;

    this.children.push(
      new QuadTree(new Rect(new Point(x + w / 2, y + h / 2), w, h))
    );
    this.children.push(
      new QuadTree(new Rect(new Point(x + w / 2, y - h / 2), w, h))
    );
    this.children.push(
      new QuadTree(new Rect(new Point(x - w / 2, y - h / 2), w, h))
    );
    this.children.push(
      new QuadTree(new Rect(new Point(x - w / 2, y + h / 2), w, h))
    );
  }
  public query(range: Rect, found: Point[] = []): Point[] {
    if (this.bound.intersects(range)) {
      found.push(...this.points.filter(range.contains));

      if (this.divided) {
        this.children.forEach(child => {
          found.push(...child.query(range));
        });
      }
    }

    return found;
  }
}
