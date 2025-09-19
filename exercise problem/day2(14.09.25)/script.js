//CODE CHALLENGE 3

// acg
function calAvg(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
// winner
function Winner(avgEagles, avgSharks) {
  if (avgEagles > avgSharks) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles) {
    console.log("Sharks win the trophy");
  } else {
    console.log("It's a draw!");
  }
}

// above 80
function WinnerBonus1(avgEagles, avgSharks) {
  if (avgEagles > avgSharks && avgEagles >= 80) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles && avgSharks >= 80) {
    console.log("Sharks win the trophy");
  } else {
    console.log("No team wins the trophy");
  }
}

// draw or not
function WinnerBonus2(avgEagles, avgSharks) {
  if (avgEagles > avgSharks && avgEagles >= 80) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles && avgSharks >= 80) {
    console.log("Sharks win the trophy");
  } else if (avgEagles === avgSharks && avgEagles >= 80 && avgSharks >= 80) {
    console.log("It's a draw!");
  } else {
    console.log("No team wins the trophy");
  }
}

// Test Data 
let eaglesAvg = calAvg(75, 89, 95);
let sharksAvg = calAvg(92, 81, 78);
console.log("Test Data 1:");
Winner(eaglesAvg, sharksAvg);

// Test Data bonus 1
eaglesAvg = calAvg(85, 92, 88);
sharksAvg = calAvg(79, 90, 82);
console.log("\nTest Data BONUS 1:");
WinnerBonus1(eaglesAvg, sharksAvg);

// Test Data bonus 2
eaglesAvg = calAvg(88, 90, 82);
sharksAvg = calAvg(84, 91, 85);
console.log("\nTest Data BONUS 2:");
WinnerBonus2(eaglesAvg, sharksAvg);

//...........................................................

//CODE CHALLENGE 4

function calculateDelivery(order) {
  let delivery = order >= 100 && order <= 500 ? order * 0.10  : order * 0.15;
   
  let total = order + delivery;

  console.log(`The order was ${order}, the delivery fee was ${delivery}, and the total amount ${total}`);
}
// test data

calculateDelivery(450);
calculateDelivery(80);
calculateDelivery(600);