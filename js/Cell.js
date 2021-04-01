"use strict";

class Cell {
    constructor(x, y, state) {
        this._x = x;
        this._y = y;
        this._state = state;

        this._cell = document.createElement('div');
        this._cell.className = 'cell';

        if (this._state == 0) {
            this._cell.style.background = "white";
        } else if (this._state == 1) {
            this._cell.style.background = "black";
        }
    }

    // get xPos() {
    //     return this._x;
    // }

    // get yPos() {
    //     return this._y;
    // }

    // get state() {
    //     return this.state(this._x, this._y);
    // }

    //set state() {
    //
    //}

    update(cells) {
        console.log("cell update!");
        const filteredCells = cells.filter(c => {
            if ((this._x - c._x) <= 1 && (this._x - c._x) >= -1 && (this._y - c._y) <= 1 && (this._y - c._y) >= -1) {
                if (!(this._x == c._x && this._y == c._y)) {
                    console.log('relevant');
                    if (c.state) {
                        return true;
                    }
                }
            }
        });
        if (filteredCells.length <= 1 || filteredCells.length >= 5) {
            this._cell.style.background = "black";
        } else if (filteredCells.length == 2 || filteredCells.length == 3) {
            this._cell.style.background = "white";
            console.log("aantal goede cellen:", filteredCells.length);
        }
    }

    render() {
        console.log("Cell render");
        const container = document.getElementById('container');
        container.insertAdjacentElement('beforeend', this._cell);
    }

}

export default Cell;