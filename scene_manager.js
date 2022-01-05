class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.camera = this;
        this.x = 0;

        this.loadLevel();
    };

    // add the entities for animation (basic)
    loadLevel() {
        this.game.addEntity(new Gunner(this.game, 0, 0));
    };
}