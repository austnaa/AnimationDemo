class Gunner {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y});

        this.spritesheet = ASSET_MANAGER.getAsset("./assets/Gunner.png");
        // this.animation = new Animator(this.spritesheet, 0, 0, 48, 48, 5, 0.1, 0, false, true);

        // either idle, running, jumping, or dying
        // either looking left or right
        

        this.animations = [];
        for (let i = 0; i < 4; i++) { // idle: 0, running: 1, jumping: 2, dying: 3
            this.animations.push([]);
            for (let j = 0; j < 2; j++) { // left: 0, right: 1
                this.animations.push([]);                
            }
        }

        

        // idle
        this.animations[0][0] = new Animator(this.spritesheet, 0, 0, 48, 48, 5, 0.2, 0, false, true);
        this.animations[0][1] = new Animator(this.spritesheet, 0, 48, 48, 48, 6, 0.2, 0, false, true);

        // run

        // jump

        // die





    };

    update() {
        // no changes 
    };

    drawMinimap(ctx, mmX, mmY) {
        // ctx.fillStyle = "Red";
        // ctx.fillRect(mmX + this.x / PARAMS.BITWIDTH, mmY + this.y / PARAMS.BITWIDTH, this.w / PARAMS.BITWIDTH, PARAMS.SCALE * 2);
    };

    draw(ctx) {

        // ctx.drawImage(this.spritesheet, 0, 0, PARAMS.BITWIDTH * 6 * PARAMS.SCALE, PARAMS.BITWIDTH * PARAMS.SCALE);
        
        
        // this.animation.drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);


        // idle
        this.animations[0][0].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y, PARAMS.SCALE);
        this.animations[0][1].drawFrame(this.game.clockTick, ctx, this.x - this.game.camera.x, this.y + (PARAMS.BITWIDTH * PARAMS.SCALE), PARAMS.SCALE);

        // run

        // jump

        // die




        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
};