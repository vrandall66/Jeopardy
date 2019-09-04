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
    // console.log('data index', data);
};

 $('tr > td').click((e) => {
     e.preventDefault();
     domUpdates.showClue();
 });
