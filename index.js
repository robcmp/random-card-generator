let cardSymbol = ["♦", "♥", "♠", "♣"];
let cardValue = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "K",
  "Q",
  "A"
];
window.onload = function() {
  // variables
  let valueCard = cardValue[Math.floor(Math.random() * cardValue.length)];
  let symbolCard = cardSymbol[Math.floor(Math.random() * cardSymbol.length)];
  let topSymbol = document.querySelector("#topSymbol");
  let botSymbol = document.querySelector("#botSymbol");
  let cardVal = document.querySelector("#card-value");

  //Symbols assigment start
  topSymbol.innerHTML = symbolCard;
  botSymbol.innerHTML = symbolCard;
  //Symbols assigment end

  //color picker start
  if (topSymbol.innerHTML === "♥" /*|| topSymbol.innerHTML === "♦"*/) {
    topSymbol.style.color = "red";
    botSymbol.style.color = "red";
  }
  //color picker end

  // Value assigment start
  cardVal.innerHTML = valueCard;
  // Value assigment end

  // botSymbol rotation start
  botSymbol.style.transform = "rotate(-180deg)";
  // botSymbol rotation start
};
