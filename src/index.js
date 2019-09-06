// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import Game from './Game';
import data from '../sampleData/sampleData';
import domUpdates from './domUpdates';

console.log('This is the JavaScript entry file - your code begins here.');
$('.splash-page').show();
$('.main').hide();
$('.clue-box').hide();

let game;

$('.submit-names').on('click', startGame);
function startGame() {
    domUpdates.showMain();
    let audio = new Audio('../src/funk.mp3');
    audio.play();
    let playerOne = $('#player-one-name-js').val();
    let playerTwo = $('#player-two-name-js').val();
    let playerThree = $('#player-three-name-js').val();
    game = new Game(playerOne, playerTwo, playerThree, data);
    game.startGame();
    domUpdates.appendPlayerNames(playerOne, playerTwo, playerThree);
    domUpdates.appendCategoryNames(game.categoryNames);
    domUpdates.firstRowClues(game.clueByCategory);
    MotionUI.animateIn('#game-board', 'fade-in');
    // console.log('data index', data);
};

    $('tr > td').click((e) => {
     e.preventDefault();
     domUpdates.showClue();
    });


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


    


