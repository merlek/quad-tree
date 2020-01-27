export interface IPoint {
  x: number;
  y: number;
}
export class Point implements IPoint {
  constructor(public x: number, public y: number) {}
}
export interface IRect {
  center: IPoint;
  width: number;
  height: number;
}
export class Rect implements IRect {
  public contains = Rect.contains(this);
  public intersects = Rect.intersects(this);
  static contains = (r: IRect) => (p: IPoint) =>
    p.x >= r.center.x - r.width / 2 &&
    p.x <= r.center.x + r.width / 2 &&
    p.y >= r.center.y - r.height / 2 &&
    p.y <= r.center.y + r.height / 2;
  static intersects = (r1: IRect) => (r2: IRect) =>
    !(
      r1.center.x - r1.width / 2 > r2.center.x + r2.width / 2 ||
      r1.center.x + r1.width / 2 < r2.center.x - r2.width / 2 ||
      r1.center.y - r1.height / 2 > r2.center.y + r2.height / 2 ||
      r1.center.y + r1.height / 2 < r2.center.y - r2.height / 2
    );
  constructor(
    public center: Point,
    public width: number,
    public height: number
  ) {}
}
