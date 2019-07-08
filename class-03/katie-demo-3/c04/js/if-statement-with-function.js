var score = 5;    // Score
var msg = 'Katie,';      // Message

function congratulate() {
  msg += ' congratulations! ';
}

if (score >= 50) {  // If score is 50 or more
  congratulate();
  msg += 'Proceed to the next round.';
}else {
  msg += " sorry try again.";
}

var el = document.getElementById('answer');
el.innerHTML = msg;