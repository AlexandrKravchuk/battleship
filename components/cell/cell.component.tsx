import React, { useEffect, useState } from 'react';

import { TState, TCell, TShipInfo, TGrid, ECellState, EShipType } from '../../types';

import './style.css';

type TCellProps = {
    cellData: TCell,
    onFire: (data: TCell) => void
}

export const Cell = ({cellData, onFire}: TCellProps) => {
    const classMap = {
        [ECellState.New]: 'new',
        [ECellState.Hit]: 'hit',
        [ECellState.Miss]: 'miss',
    }
    const cellClass = (): string => {
        return classMap[cellData.state];
    }
    return (<div className={`cell ${cellClass()}`} onClick={() => onFire(cellData)}></div>)
}