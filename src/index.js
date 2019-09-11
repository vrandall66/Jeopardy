import $ from 'jquery';
import './css/base.scss';
import Game from './Game';
import domUpdates from './domUpdates';

$('.splash-page').show();
$('.main').hide();
$('.clue-box').hide();

let game, data, key, value;
let startButton = $('.submit-names');
let submitGuess = $('.give-it-a-go');
startButton.on('click', startGame);
submitGuess.on('click', handleSubmitBtn);

fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/jeopardy/data")
    .then(response => response.json())
    .then(remoteData => data = remoteData.data)
    .catch(error => console.log(error))

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
    updatePlayerScores(game.player1, game.player2, game.player3);
};

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
             class: 'categoryName',
         });
        categoryContainer.append(categoryName)
        for([key, value] of Object.entries(category.clues)) {
            let categoryData = $(`<div>`, {
                text: key,
                id: value.answer,
                ["data-id"]: value.question,
                class: 'categoryData',
                click: function(e) {
                    let question = e.target.closest('div').dataset.id;
                    domUpdates.showClue(question);
                }
            });
            categoryContainer.append(categoryData);
        }
        domUpdates.createBoard(categoryContainer);
    });
};

function handleSubmitBtn() {
    assessGuess();
    domUpdates.hideClue();
};

function findClue() {
    let question = $('.clue-text').text();
    let foundClue = data.clues.find(clue => {
        if (clue.question === question) {
            return clue;
        }
    })
    return foundClue;
};

function assessGuess() {
    let guess = $('#answer-input-js').val();
    let cardClue = findClue();
    if (guess === cardClue.answer) {
        game.round.incrementScore(cardClue);
    } else {
        game.round.decrementScore(cardClue);
    }
    updatePlayerScores(game.player1, game.player2, game.player3);
};

function updatePlayerScores(player1, player2, player3) {
    domUpdates.updateScores(player1, player2, player3);
};