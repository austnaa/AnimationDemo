class Gunner {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/Gunner_Green_Run.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 48, 48, 6, 0.2, 0, false, true);
    };

    update() {
        // no changes? 
    };

    drawMinimap(ctx, mmX, mmY) {
        // ctx.fillStyle = "Brown";
        // ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, this.w / PARAMS.BITWIDTH, PARAMS.SCALE * 2);
    };

    draw(ctx) {

        // ctx.drawImage(this.spritesheet, 0, 0, PARAMS.BITWIDTH * 6 * PARAMS.SCALE, PARAMS.BITWIDTH * PARAMS.SCALE);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};