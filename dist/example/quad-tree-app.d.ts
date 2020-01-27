export declare const width = 400;
export declare const height = 400;
export declare class QuadTreeApp {
    private canvas;
    private qtree;
    private ctx;
    private animationFrameId?;
    constructor(containerId: string, canvas: HTMLCanvasElement);
    private setupQuadTree;
    private update;
    private drawQuadTree;
    private draw;
    destroy(): void;
}
//# sourceMappingURL=quad-tree-app.d.ts.map