import { IPoint, Point } from './point';
export interface IRect {
    center: IPoint;
    width: number;
    height: number;
}
export declare class Rect implements IRect {
    center: Point;
    width: number;
    height: number;
    contains: (p: IPoint) => boolean;
    intersects: (r2: IRect) => boolean;
    static contains: (r: IRect) => (p: IPoint) => boolean;
    static intersects: (r1: IRect) => (r2: IRect) => boolean;
    constructor(center: Point, width: number, height: number);
}
//# sourceMappingURL=rect.d.ts.map