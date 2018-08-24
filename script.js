var upper = 10000;                                /* define upper limit of random number */
var randomNumber = getRandomNumber(upper);        /* generate the number the computer has to guess. */
var guess;                                        /* hold the computer's guess */
var attempts = 0;                                 /* keep track of how many times it take computer to guess */

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1; /* functions are also grouped at top of code; reuseable */
}

while ( guess !== randomNumber ) {
  guess = getRandomNumber( upper );                /* store randomly generated number into variable guess */
  attempts += 1;
}
document.write("<p>The random number was: " + randomNumber + "</p>");
document.write("<p>It took the computer " + attempts + " attemps to get it right.</p>");
