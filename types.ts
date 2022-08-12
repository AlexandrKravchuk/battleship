export enum ECellState {
    New = 1,
    Miss = 2,
    Hit = 3
}

export enum EShipType {
    Carrier = 'carrier',
    Battleship = 'battleship',
    Cruiser = 'cruiser',
    Destroyer = 'destroyer',
    Submarine = 'submarine',
}

export type TPoint = {
    x: number,
    y: number,
}
export type TCell = {
    coordinates: TPoint,
    state: ECellState,
    shipIndex: number,
}

export type TShipInfo = {
    size: number,
    health: number,
    type: EShipType,
}

export type TGrid = Array<Array<TCell>>;

export type TState = {
    grid: TGrid,
    ships: TShipInfo[],
}