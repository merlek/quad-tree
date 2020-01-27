export class Point {
  constructor(public x: number, public y: number) {}
}
export class Rect {
  constructor(
    public center: Point,
    public width: number,
    public height: number
  ) {}
  public contains = (pos: Point) =>
    pos.x >= this.center.x - this.width / 2 &&
    pos.x <= this.center.x + this.width / 2 &&
    pos.y >= this.center.y - this.height / 2 &&
    pos.y <= this.center.y + this.height / 2;
  public intersects = (range: Rect) =>
    !(
      range.center.x - range.width / 2 > this.center.x + this.width / 2 ||
      range.center.x + range.width / 2 < this.center.x - this.width / 2 ||
      range.center.y - range.height / 2 > this.center.y + this.height / 2 ||
      range.center.y + range.height / 2 < this.center.y - this.height / 2
    );
}
