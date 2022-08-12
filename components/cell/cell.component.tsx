import React, { useEffect, useState } from 'react';

import { TState, TCell, TShipInfo, TGrid, ECellState, EShipType } from '../../types';

import './style.css';

export const Cell = ({cellData, onFire}) => {
    return (<div className='cell' onClick={() => onFire(cellData)}>{cellData.shipIndex}</div>)
}