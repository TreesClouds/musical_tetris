class Tetromino {
    constructor(type) {
        this.solid = false;
        this.active = false;
        this.outlinesPlaced = false;
        this.location = [3, -2]
        this.rotation = 0;
        if (type === undefined) {
            type = Math.floor(Math.random() * 7);
        }
        this.tilePlacement = Tetromino.getCase(type);
        switch (type) {
            // O
            case 0: this.color = "yellow";
                break;
            // I
            case 1: this.color = "lightblue";
                break;
            // Z
            case 2: this.color = "red";
                break;
            // S
            case 3: this.color = "green";
                break;
            // T
            case 4: this.color = "purple";
                break;
            // L
            case 5: this.color = "orange";
                break;
            // J
            case 6: this.color = "darkblue";
                break;

            default:    this.color = "red";
                break;
        }
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
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let p = getPosition(i, j);
            fill(board[i][j]);
            rect(p[0], p[1], 30, 30);
        }
    }
}
function setBoard() {
    board = new Array(10);
    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(20);
        board[i].fill("gray");
    }
    for (let i = 0; i < tetrominoes.length; i++) {
        let t = tetrominoes[i];
        t.location = [t.location[0], t.location[1]+1];
        let loc = t.location
        for (let x = 0; x < t.tilePlacement[0].length; x++) {
            for (let y = 0; y < t.tilePlacement[0][0].length; y++) {
                if (t.tilePlacement[0][x][y] === 1) {
                    board[x+loc[0]][y+loc[1]] = t.color;
                }
            }
        }
    }
}

// Global Variables
let board;
let tileWidth;
let gameTime;
let xOffset;
let yOffset;
let tetrominoes;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

    tileWidth = 30;
    gameTime = 0;
    tetrominoes = [];
    xOffset = width / 2 - tileWidth * 5;
    yOffset = height / 2 - tileWidth * 10;
}

function draw() {
    background(0);
    // rect(xOffset, yOffset, 300, 600)
    fill("white");

    frameRate(30);
    if (gameTime % 10 === 0) {
        setBoard();
    }
    placeTiles();
    gameTime++;

    if (gameTime % 60 === 0) {
        let t = new Tetromino();
        let r = Math.floor(Math.random()*8 + 1)
        t.location = [r, t.location[1]]
        tetrominoes.push(t);
        // console.log(board)
    }
}
