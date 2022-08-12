import React from 'react';

import {TShipInfo} from '../../types';

type TShipsListProps = {
    shipsData: TShipInfo[]
}

export const ShipsList = ({shipsData}: TShipsListProps) => {
    const ships: JSX.Element[] = [];
    shipsData.forEach(ship => {
        ships.push(<div>
            {ship.type} - {ship.health}/{ship.size}
        </div>)
    })
    return (<div>{ships}</div>)
}