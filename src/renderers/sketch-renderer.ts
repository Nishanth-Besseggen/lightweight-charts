import { LineStyle, LineWidth } from './draw-line';

export interface SketchStyle {
	lineStyle: LineStyle;
	lineWidth: LineWidth;
	color: string;
	visible: boolean;
}

export interface SketchData {
    line: SketchStyle,
	startX: number;
	startY: number;
    endX: number;
    endY: number;
}


// export class SketchRenderer extends BitmapCoordinatesPaneRenderer {
// 	private readonly _data: SketchData | null;

// 	public constructor(data: SketchData | null) {
// 		super();
// 		this._data = data;
// 	}

// 	protected override _drawImpl({ context: ctx, bitmapSize, horizontalPixelRatio, verticalPixelRatio }: BitmapCoordinatesRenderingScope): void {
// 		if (this._data === null) {
// 			return;
// 		}

// 		const lineVisible = this._data.line.visible;

// 		if (!lineVisible) {
// 			return;
// 		}

// 		const sx = Math.round(this._data.startX * horizontalPixelRatio);
// 		const sy = Math.round(this._data.startY * verticalPixelRatio);
//         const ex = Math.round(this._data.endX * horizontalPixelRatio);
// 		const ey = Math.round(this._data.endY * verticalPixelRatio);


// 		ctx.lineCap = 'round';

//         // if(lineVisible && sx>=0 && sx<)

// 		// if (vertLinesVisible && x >= 0) {
// 		// 	ctx.lineWidth = Math.floor(this._data.vertLine.lineWidth * horizontalPixelRatio);
// 		// 	ctx.strokeStyle = this._data.vertLine.color;
// 		// 	ctx.fillStyle = this._data.vertLine.color;
// 		// 	setLineStyle(ctx, this._data.vertLine.lineStyle);
// 		// 	drawVerticalLine(ctx, x, 0, bitmapSize.height);
// 		// }

// 		// if (horzLinesVisible && y >= 0) {
// 		// 	ctx.lineWidth = Math.floor(this._data.horzLine.lineWidth * verticalPixelRatio);
// 		// 	ctx.strokeStyle = this._data.horzLine.color;
// 		// 	ctx.fillStyle = this._data.horzLine.color;
// 		// 	setLineStyle(ctx, this._data.horzLine.lineStyle);
// 		// 	drawHorizontalLine(ctx, y, 0, bitmapSize.width);
// 		// }
// 	}
// }
