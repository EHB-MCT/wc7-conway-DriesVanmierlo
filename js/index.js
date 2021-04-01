"use strict";

import Game from './Game.js';

function init() {
    const game = new Game();
    game.update();
    game.render();

    document.getElementById('step').addEventListener('click', function () {
        game.update();
        game.render();
    });
}

init();