"use strict";

import Cell from './Cell.js';

class Game {
    constructor() {
        this._cells = [];
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                //console.log(i, j);
                const stateVar = Math.floor(Math.random() * 2);
                const cell = new Cell(i, j, stateVar);
                this._cells.push(cell);
            }
        }
    }

    update() {
        this._cells[84].update(this._cells);

        // this._cells.forEach(c => {
        //     c.update(this._cells);
        //     
        // });
    }

    render() {
        this._cells.forEach(c => {
            c.render();
        });
    }
}

export default Game;