export default class Levels {
    level_width; //Altezza e larghezza dell livello (in tiles)
    level_height;
    tile_width; //Dimensione di ogni tile
    tile_height;
    prato; //Mappa dei diversi livelli di tiles
    mare;
    ostacoli;
    tileMapImage //L'immagine da cui recuperare tutti i tile
    tileMapImgHeight; //Le dimensioni della mappa da cui recupero i tile
    tileMapImageWidth;
    constructor(level_width, level_height, tile_width, tile_height, water, path, obstacles, tileMapsrc, tileMapImgHeight, tileMapImageWidth) {
        this.level_width = level_width;
        this.level_height = level_height;
        this.tile_width = tile_width;
        this.tile_height = tile_height;
        this.prato = prato;
        this.mare = mare;
        this.ostacoli = ostacoli;
        this.tileMapImage = new Image(this.width, this.height);
        this.tileMapImage.src = tileMapsrc;
        this.tileMapImgHeight = tileMapImgHeight;
        this.tileMapImageWidth = tileMapImageWidth;
    }

    draw(canvasContext) {
        //Disegno l'acqua
        for (let i = 0; i < this.mare.length; i++) {
            //Ottengo le coordinate sulla canvas
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = this.mare[i];
            
            //Ottengo le coordinate sulla tilemap
            let sx = ((tile  % (this.tileMapImageWidth/32))-1) * 32; //Devo fare -1 perchè il primo tile è il n°1
            let sy = Math.floor(tile / (this.tileMapImgHeight/32)) * 32;


            if (this.mare[i] != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
            }
        }
    }
}

