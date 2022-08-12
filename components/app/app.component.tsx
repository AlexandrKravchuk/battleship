import React, { useEffect, useState } from 'react';

import { TState, TCell, TShipInfo, TGrid, ECellState, EShipType } from '../../types';
import { Cell } from '../cell/cell.component';
import './style.css';

const LAYOUT = [
    { "ship": EShipType.Carrier, "positions": [[2, 9], [3, 9], [4, 9], [5, 9], [6, 9]] },
    { "ship": EShipType.Battleship, "positions": [[5, 2], [5, 3], [5, 4], [5, 5]] },
    { "ship": EShipType.Cruiser, "positions": [[8, 1], [8, 2], [8, 3]] },
    { "ship": EShipType.Submarine, "positions": [[3, 0], [3, 1], [3, 2]] },
    { "ship": EShipType.Destroyer, "positions": [[0, 0], [1, 0]] }
]

export const App = () => {
    const initialState: TState = {
        grid: [],
        ships: [],
    }
    const [state, setState] = useState<TState>(initialState)

    const buildEmptyGrid = (): TGrid => {
        return [...Array(10)].map((e, y) => {
            const newRow = [...Array(10)].map((e, x) => ({
                coordinates: {x,y},
                shipIndex: NaN,
                state: ECellState.New
            }));
            return newRow;
        });
    }

    const converLayoutToState = (): TState => {
        const grid = buildEmptyGrid();
        console.log(grid);
        const ships: TShipInfo[] = [];

        LAYOUT.forEach((ship, index) => {
            const points = ship.positions;
            points.forEach(point => {
                const [x, y] = point;
                grid[y][x].shipIndex = index;
            });

            ships.push({
                health: points.length,
                size: points.length,
                type: ship.ship,
            })
        });
        return { grid, ships };
    }

    useEffect(() => {
        setState(converLayoutToState());
    }, []);

    const onFire = (data: TCell) => {
        console.log(data);
    }

    const cells = (): JSX.Element[] => {
        const result: JSX.Element[] = [];
        state.grid.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                result.push(<Cell key={`cell[${rowIndex}][${columnIndex}]`} cellData={cell} onFire={onFire} />)
            })
        })
        return result;
    }

    return (
        <div className="game-container">
            <div className="game-data">
                <div className="score">score field</div>
                <div className="ships">ships container</div>
            </div>
            <div className="game-field">{cells()}</div>
        </div>
    )
}