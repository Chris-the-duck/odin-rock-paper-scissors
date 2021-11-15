# odin-rock-paper-scissors
Project "Rock, Paper, Scissors" for The Odin Project:
https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors

v2: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation


Original version was to be played in the browser dev console and used a loop to play 5 games and then declare a winner.

Used a function playRPS() that fetched the player's choice, computer's choice, and then decided the winner. This function
was called by another function, game(), that contained the loop and did the scoring.

Now the game got an overhaul to give it an actual GUI to play in the browser, which meant adding CSS/JS - and scrapping the
game() function, and stuffing the bits that were still needed into playRPS(). Also thought it'd be nice to actually display
the computer's choice rather than just telling the player "you lose".