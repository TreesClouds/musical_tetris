class Tetromino {
    constructor(type) {
        this.solid = false;
        this.active = false;
        this.outlinesPlaced = false;
        this.rotation = 0;
        if (type === undefined) {
            type = Math.floor(Math.random() * 7);
        }
        this.tilePlacement = Tetromino.getCase(type);
    }
    
    rotate(left) {
        if (left) {
            this.rotation++;
            if (this.rotation === this.tilePlacement.length) {
                this.rotation = 0;
            }
        } else {
            this.rotation--;
            if (this.rotation === -1) {
                this.rotation = this.tilePlacement.length-1;
            }
        }
        
    }
    
    static getCase(type) {
        switch (type) {
            case 0:
                return [
                    [[0, 1, 1], [0, 1, 1], [0, 0, 0]]
                ];
            case 1:
                return [
                    [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0,]],
                    [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
                    [[0, 0, 0, 0], [0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0]],
                    [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
                ];
            case 2:
                return [
                    [[1, 1, 0], [0, 1, 1], [0, 0, 0]],
                    [[0, 0, 1], [0, 1, 1], [0, 1, 0]],
                    [[0, 0, 0], [1, 1, 0], [0, 1, 1]],
                    [[0, 1, 0], [1, 1, 0], [1, 0, 0]]
                ];
            case 3:
                return [
                    [[0, 1, 1], [1, 1, 0], [0, 0, 0]],
                    [[0, 1, 0], [0, 1, 1], [0, 0, 1]],
                    [[0, 0, 0], [0, 1, 1], [1, 1, 0]],
                    [[1, 0, 0], [1, 1, 0], [0, 1, 0]]
                ];
            case 4:
                return [
                    [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
                    [[0, 1, 0], [0, 1, 1], [0, 1, 0]],
                    [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
                    [[0, 1, 0], [1, 1, 0], [0, 1, 0]]
                ];
            case 5:
                return [
                    [[0, 0, 1], [1, 1, 1], [0, 0, 0]],
                    [[0, 1, 0], [0, 1, 0], [0, 1, 1]],
                    [[0, 0, 0], [1, 1, 1], [1, 0, 0]],
                    [[1, 1, 0], [0, 1, 0], [0, 1, 0]],
                ];
            case 6:
                return [
                    [[1, 0, 0], [1, 1, 1], [0, 0, 0]],
                    [[0, 1, 1], [0, 1, 0], [0, 1, 0]],
                    [[0, 0, 0], [1, 1, 1], [0, 0, 1]],
                    [[0, 1, 0], [0, 1, 0], [1, 1, 0]],
                ];
        }
    }
}

function getPosition(gameX, gameY) {
    return [(gameX*30)+xOffset, (gameY*30)+yOffset]
}

function placeTiles() {

}

// Global Variables
let board;
let tileWidth;
let xOffset;
let yOffset;
let tetrominoes;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    tileWidth = 30;
    xOffset = width / 2 - tileWidth * 5;
    yOffset = height / 2 - tileWidth * 10;

    board = new Array(20);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(10);
        board[i].fill(false);
    }

}

function draw() {
    background(0);
    rect(xOffset, yOffset, 300, 600)
    console.log([width, height]);
    fill("white")
    placeTiles()
}
