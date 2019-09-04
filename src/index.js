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
import Round from '../src/Round';

console.log('This is the JavaScript entry file - your code begins here.');
$('.splash-page').show();
$('.main').hide();
$('.clue-box').hide();
$('.submit-names').on('click', startGame);
let game;
let round;

function startGame() {
    $('.splash-page').hide();
    $('.splash-page').fadeOut();
    $('.main').show();
    $('.main').fadeIn();
    $('.clue-box').hide()
    let playerOne = $('#player-one-name-js').val();
    let playerTwo = $('#player-two-name-js').val();
    let playerThree = $('#player-three-name-js').val();
    game = new Game(playerOne, playerTwo, playerThree, data);
    game.startGame();
    console.log('data index', data);
    $('.player-one-display').text(playerOne);
    $('.player-two-display').text(playerTwo);
    $('.player-three-display').text(playerThree);
}

$('tr > td').on('click', showClue);
function showClue() {
    $('.main').hide();
    $('.clue-box').show();
    $('.clue-box').fadeIn();
}