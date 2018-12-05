const reader = require('../file-reader');

reader.fileReader('input.txt', dayThreePartOne);

let squaresInUse = [];
let overlap = [];

function dayThreePartOne(input) {

    input.forEach(e => {
        let data = e.split(' ');
        let coords = data[2].slice(0, -1).split(',');
        let size = data[3].split('x')

        addSquare(coords, size);
    });

    // console.log([].concat.apply([], overlap).length);
    // console.log([].concat.apply([], overlap).filter(s => s).length);

    //Part 2
    dayThreePartTwo(input);
}

function addSquare(coords, size) {
    let coordsX = parseInt(coords[0]);
    let coordsY = parseInt(coords[1]);
    let width = parseInt(size[0]) + coordsX;
    let height = parseInt(size[1]) + coordsY;

    for (let i = coordsX; i < width; i++) {
        for (let j = coordsY; j < height; j++) {

            if (squaresInUse[i] === undefined) squaresInUse[i] = [];

            if (squaresInUse[i][j]) {
                if (overlap[i] === undefined) overlap[i] = [];
                overlap[i][j] = true;
            }

            squaresInUse[i][j] = true;
        }
    }
}

function dayThreePartTwo(input) {
    
    input.forEach(e => {
        let data = e.split(' ');
        let coords = data[2].slice(0, -1).split(',');
        let size = data[3].split('x')

        if(hasOverLap(coords, size)) console.log('ELEMENT:', e);
    });
}

function hasOverLap(coords, size) {
    let coordsX = parseInt(coords[0]);
    let coordsY = parseInt(coords[1]);
    let width = parseInt(size[0]) + coordsX;
    let height = parseInt(size[1]) + coordsY;

    for (let i = coordsX; i < width; i++) {
        for (let j = coordsY; j < height; j++) {
            if (overlap[i] === undefined) return;
            if (overlap[i][j]) {
                return false;
            }
        }
    }

    return true;
}