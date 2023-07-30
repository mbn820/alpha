export class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload(): void {
    this.load.baseURL = "src/assets/";
    this.load.image('player', 'sprites/characters/player.png');
  }

  create(): void {
    this.add.image(300, 300, 'player');
  }
}
