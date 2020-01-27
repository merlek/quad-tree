import { IPoint } from './point';
import { IRect, Rect } from './rect';
export declare class QuadTree {
    static capacity: number;
    readonly points: IPoint[];
    readonly children: QuadTree[];
    readonly bound: Readonly<Rect>;
    constructor({ center, width, height }: IRect);
    insert(point: IPoint): boolean;
    get divided(): boolean;
    private subdivide;
    query(range: IRect, found?: IPoint[]): IPoint[];
}
//# sourceMappingURL=quad-tree.d.ts.map