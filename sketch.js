class Tetromino {

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