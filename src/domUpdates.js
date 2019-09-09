import $ from 'jquery';

const domUpdates = {

    appendPlayerNames(playerOne, playerTwo, playerThree) {
        $('.player-one-display').text(playerOne);
        $('.player-two-display').text(playerTwo);
        $('.player-three-display').text(playerThree);
    },

    showMain() {
        $('.splash-page').fadeOut(1000);
        $('.main').delay(1000).fadeIn(2500);
        $('.clue-box').hide()
    },

    appendCategoryNames(categories) {
        $('#category1').text(categories[0]);
        $('#category2').text(categories[1]);
        $('#category3').text(categories[2]);
        $('#category4').text(categories[3]);
    },

    showClue(clue) {
        $('.main').hide();
        // $('.clue-box').show();
        $('.clue-box').fadeIn();
        $('#clue').text(clue.question)
    },

    showDailyDouble() {
        $('.main').hide();
        $('.clue-box').show()
        $('.#clue').text(clue.question)
    },

    createBoard(categoryData) {
        $('.game-board').append(categoryData);
    }
}

export default domUpdates;
// console.log('whatareyou', td)
// // td.data('data-clue-id', gameData[index].id);
// // how to create new attribute using jquery
//     // how to refer to an item within a loop