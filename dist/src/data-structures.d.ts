export declare class Point {
    x: number;
    y: number;
    constructor(x: number, y: number);
}
export declare class Rect {
    center: Point;
    width: number;
    height: number;
    constructor(center: Point, width: number, height: number);
    contains: (pos: Point) => boolean;
}
//# sourceMappingURL=data-structures.d.ts.map