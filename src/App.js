import React from 'react';
import './App.css';
import PhaserGame from './PhaserGame';

function App() {
    return (
        <div className="container">
            <div className="button-container top">
                <button onClick={() => PhaserGame.moveBall('top-left')}>Top 1</button>
                <button onClick={() => PhaserGame.moveBall('top-right')}>Top 2</button>
            </div>
            <div className="content">
                <div className="button-container left">
                    <button onClick={() => PhaserGame.moveBall('left-top')}>Left 1</button>
                    <button onClick={() => PhaserGame.moveBall('left-bottom')}>Left 2</button>
                </div>
                <PhaserGame />
                <div className="button-container right">
                    <button onClick={() => PhaserGame.moveBall('right-top')}>Right 1</button>
                    <button onClick={() => PhaserGame.moveBall('right-bottom')}>Right 2</button>
                </div>
            </div>
            <div className="button-container bottom">
                <button onClick={() => PhaserGame.moveBall('bottom-left')}>Bottom 1</button>
                <button onClick={() => PhaserGame.moveBall('bottom-right')}>Bottom 2</button>
            </div>
        </div>
    );
}

export default App;
