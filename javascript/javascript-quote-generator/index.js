//variables
import { quotes } from "./quotes.js";

const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const newQuoteButton = document.querySelector(".new-quote-btn");

console.log();

function newQuote() {
  const newQuoteObj = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = newQuoteObj.quote;
  person.innerText = newQuoteObj.person;
}

newQuoteButton.addEventListener("click", newQuote);
