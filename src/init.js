(function() {
    const mygame = new myGame({
        element: document.querySelector('.game-container')
    });
    mygame.init();

    document.addEventListener('keydown', function(event) {
        mygame.handleKeyDown(event);
    });

    /* RUN GAMELOOP */
    mygame.createGameLoop();
})();