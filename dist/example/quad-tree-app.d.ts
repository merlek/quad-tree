import { Animators } from 'canvas-tools';
import { QuadTree } from '../src/quad-tree';
export declare class QuadTreeApp extends Animators.CanvasAnimator {
    private qtree;
    private queryRange;
    constructor(containerId: string);
    setup(): QuadTree;
    draw(qt?: QuadTree, ctx?: CanvasRenderingContext2D): void;
    private drawQuadTree;
    private strokeRect;
}
//# sourceMappingURL=quad-tree-app.d.ts.map