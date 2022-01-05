const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

// sprite sheets

// ASSET_MANAGER.queueDownload("./assets/Gunner_Green_Idle.png");
// ASSET_MANAGER.queueDownload("./assets/Gunner_Green_Run.png");
// ASSET_MANAGER.queueDownload("./assets/Gunner_Green_Jump.png");
// ASSET_MANAGER.queueDownload("./assets/Gunner_Green_Death.png");
ASSET_MANAGER.queueDownload("./assets/Gunner.png");
ASSET_MANAGER.queueDownload("./assets/Shadow.png");
ASSET_MANAGER.queueDownload("./assets/MuzzleFlash.png");

ASSET_MANAGER.downloadAll(() => {
	var gameEngine = new GameEngine();

	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;
	PARAMS.CANVAS_HEIGHT = canvas.height;

	gameEngine.init(ctx);
		
	new SceneManager(gameEngine);

	gameEngine.start();
});


