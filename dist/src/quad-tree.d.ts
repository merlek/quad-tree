import { Rect, Point } from './data-structures';
export declare class QuadTree {
    bound: Rect;
    static capacity: number;
    points: Point[];
    children: QuadTree[];
    constructor(bound: Rect);
    insert(point: Point): boolean;
    get divided(): boolean;
    private subdivide;
}
//# sourceMappingURL=quad-tree.d.ts.map