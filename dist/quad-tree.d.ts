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
    query(range: Rect, found?: Point[]): Point[];
}
//# sourceMappingURL=quad-tree.d.ts.map