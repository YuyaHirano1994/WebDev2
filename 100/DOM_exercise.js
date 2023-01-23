/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const p = document.querySelector("p");
const words = p.innerText.split(" ");

const newText = words.map((word) => {
  let len = word.length;
  const regExp = /[.,!?]/;
  if (regExp.test(word)) len--;
  if (len >= 8) {
    return `<span class='bg-yellow'>${word}</span>`;
  }
  return word;
});

p.innerHTML = newText.join(" ");
p.querySelectorAll(".bg-yellow").forEach((word) => {
  word.style.backgroundColor = "yellow";
});

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const body = document.querySelector("body");
const aTag = document.createElement("a");
aTag.setAttribute("href", "http://officeipsum.com/");
aTag.innerText = "officeipsum";
body.insertBefore(aTag, p.nextSibling);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const pHTML = p.innerHTML;
const pSentences = pHTML.split(".");
const newParaSentences = pSentences.map((sentence) => {
  if (sentence !== "") {
    return `<p>${sentence}.</p>`;
  }
});

p.innerHTML = newParaSentences.join(" ");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

pTags = document.querySelectorAll("p p");

for (let i = 0; i < pTags.length; i++) {
  let word = pTags[i].innerText;
  word.replace(",", ". ");
  word.replace(".", ", ");
  word.replace("!", "! ");
  word.replace("?", "? ");
  let wordLen = word.split(" ");
  let countH5 = document.createElement("h5");
  countH5.innerText = `count: ${wordLen.length}`;
  pTags[i].prepend(countH5);
}

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

pTags.forEach((p) => {
  p.innerHTML = p.innerHTML.replace("?", "🤔");
  p.innerHTML = p.innerHTML.replace("!", "😲");
});
