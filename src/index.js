// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');
$('.splash-page').show()
$('.main').hide()
$('.submit-names').on('click', showMain)
function showMain() {
    $('.splash-page').hide()
    $('.splash-page').fadeOut(40000)
    $('.main').show()
    $('.main').fadeIn(40000)
    let playerOne = $('#player-one-name-js').val()
    let playerTwo = $('#player-two-name-js').val()
    let playerThree = $('#player-three-name-js').val()
    $('.player-one-display').text(playerOne)
    $('.player-two-display').text(playerTwo)
    $('.player-three-display').text(playerThree)
}