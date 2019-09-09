import $ from 'jquery';
import './css/base.scss';
import Game from './Game';
import domUpdates from './domUpdates';

$('.splash-page').show();
$('.main').hide();
$('.clue-box').hide();

let game;
let data;

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
    .then(response => response.json())
    .then(remoteData => data = remoteData.data)
    .catch(error => console.log(error))

// START GAME
let startButton = $('.submit-names');
startButton.on('click', startGame);
function startGame() {
    domUpdates.showMain();
    let playerOne = $('#player-one-name-js').val();
    let playerTwo = $('#player-two-name-js').val();
    let playerThree = $('#player-three-name-js').val();
    game = new Game(playerOne, playerTwo, playerThree, data);
    game.startGame();
    createGameBoard();
    domUpdates.appendPlayerNames(playerOne, playerTwo, playerThree);
    domUpdates.appendCategoryNames(game.categoryNames);
    // MotionUI.animateIn('#game-board', 'fade-in');
};

// DISCO
var t = 1;
var radius = 50;
var squareSize = 6.5;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI - fuzzy) / prec;
var discoBall = document.getElementById("discoBall");

for (var t = fuzzy; t < Math.PI; t += inc) {
    var z = radius * Math.cos(t);
    var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
    var circumference = Math.abs(2 * Math.PI * currentRadius);
    var squaresThatFit = Math.floor(circumference / squareSize);
    var angleInc = (Math.PI * 2 - fuzzy) / squaresThatFit;
    for (var i = angleInc / 2 + fuzzy; i < (Math.PI * 2); i += angleInc) {
        var square = document.createElement("div");
        var squareTile = document.createElement("div");
        squareTile.style.width = squareSize + "px";
        squareTile.style.height = squareSize + "px";
        squareTile.style.transformOrigin = "0 0 0";
        squareTile.style.webkitTransformOrigin = "0 0 0";
        squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
        squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
        if ((t > 1.3 && t < 1.9) || (t < -1.3 && t > -1.9)) {
            squareTile.style.backgroundColor = randomColor("bright");
        } else {
            squareTile.style.backgroundColor = randomColor("any");
        }
        square.appendChild(squareTile);
        square.className = "square";
        squareTile.style.webkitAnimation = "reflect 2s linear infinite";
        squareTile.style.webkitAnimationDelay = String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.animation = "reflect 2s linear infinite";
        squareTile.style.animationDelay = String(randomNumber(0, 20) / 10) + "s";
        squareTile.style.backfaceVisibility = "hidden";
        var x = radius * Math.cos(i) * Math.sin(t);
        var y = radius * Math.sin(i) * Math.sin(t);
        square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
        square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
        discoBall.appendChild(square);
    }
}

function randomColor(type) {
    var c;
    if (type == "bright") {
        c = randomNumber(130, 255);
    } else {
        c = randomNumber(110, 190);
    }
    return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCategoryNames() {
    categoryNames.map(category => {
        let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
        return category.category.replace(rex, '$1$4 $2$3$5').toUpperCase();
    });
    return categoryNames;
};

function createGameBoard() {
    let rex = /([A-Z])([A-Z])([a-z])|([a-z])([A-Z])/g;
    game.gameData.forEach(category => {
        let categoryContainer = $('<div>', {
            class: 'trialClue',
            id: category.name
        });
        let categoryName = $('<div>', {
            text: category.name.replace(rex, '$1$4 $2$3$5').toUpperCase(),
            class: 'categoryName'
        });
        categoryContainer.append(categoryName);
        for(let [key, value] of Object.entries(category.clues)) {
            let categoryData = $('<div>', {
                text: key,
                id: key,
                class: 'categoryData',
                click: function() {
// here we need a conditional like if game.dailyDouble or isDailyDouble = true
// then domUpdates.showDailyDouble() else
// domUpdates.showClue()
                    domUpdates.showClue(value);
                }
            });
            categoryContainer.append(categoryData);
        }
        domUpdates.createBoard(categoryContainer);
    });
}