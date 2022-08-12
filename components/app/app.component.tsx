import React from 'react';

import './style.css';

export const App = () => {

    return (
        <div className="game-container">
            <div className="game-data">
                <div className="score">score field</div>
                <div className="ships">ships container</div>
            </div>
            <div className="game-field">game</div>
        </div>
    )
}