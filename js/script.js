/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
      quote: 'It does not matter how slowly you go so long as you do not stop.',
      source: 'Confucius'
     },
  {
      quote: 'Imagination is the only weapon in the war with reality.',
      source: 'Lewis Carroll',
      citation: "Alice's Adventures in Wonderland", // optional
      year: '1865' // optional
  },
  {
      quote: "This is how you do it: you sit down at the keyboard and you put one word after another until its done. It's that easy, and that hard.",
      source: 'Neil Gaiman'
  },
  {
      quote: 'We do not simply live in this universe. The universe lives within us.',
      source: 'Neil deGrasse Tyson',
      citation: 'Astrophysics for People in a Hurry', // optional
      year: '2017' // optional
  },
  {
      quote: "Dude, suckin' at something is the first step to being sorta good at something.",
      source: 'Jake the Dog (Pendleton Ward)',
      citation: 'Adventure Time', // optional
      year: '2010' // optional
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // Get quote from array
  let random = Math.round(Math.random() * (quotes.length));
  let gen = quotes[random];
  return gen;
}

// A basic printing function for HTML
let message;
function print(message) {     
  let outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
}               

/***W
 * `printQuote` function
***/
function printQuote() {
  let getQuote = getRandomQuote(); // Stores the quote generator.
  let message = '<p class="quote">' + getQuote.quote + '</p>'; // Stores the HTML strings.
  message += '<p class="source">' + getQuote.source; 
  if (getQuote.citation !== undefined) {
    message += '<span class="citation"> ' + getQuote.citation + '</span>';
  } 
  if (getQuote.year !== undefined) {
    message += '<span class="year"> ' + getQuote.year + '</span>';
  }
  message += '</p>';
  print(message);
  message = '';
  return message;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
