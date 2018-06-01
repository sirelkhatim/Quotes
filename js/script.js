// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//refresh every 3 seconds
var intervalID = window.setInterval(printQuote, 3000);

// define quotes
var quotes = [
{quote:"a flexible mind is a healthy mind", source: "Palladino & Wade", year: "2010",tag: "Mind"},
{quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", source: "Marilyn Monroe", tag: "Thought-provoking"},
{quote:"There is some good in this world, and it’s worth fighting for.", source: "J.R.R Tolkien", citation: "The Two Towers", tag: "Inspirational"},
{quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", source: "Albert Einstein", tag: "Humor"},
{quote:"So many books, so little time.", source: "Frank Zappa", tag: "Thought-provoking"},
{quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", source: "Bernard M. Baruch", tag: "Thought-provoking"}];

//define colors to choose from
var colors = ["blue", "pink", "black", "yellow", "green","purple"];

//define function to get the random quote
function getRandomQuote(){
	var num = Math.floor(Math.random()*6);
	var color = colors[num];
	document.querySelector("body").style.backgroundColor = color;
	return quotes[num];

}

//define function to print the quote to the webpage
function printQuote(){
	var nextQuote = getRandomQuote();
	var message = '<p class="quote">' + nextQuote.quote +'</p>';
	if(nextQuote.citation != undefined && nextQuote.year!= undefined){
		var message = message + '<p class="source">' + nextQuote.source +'<span class="cite">' + nextQuote.citation  + '</span>' + '<span class="year">'  + ", "  + nextQuote.year  + ", " +  '</span>'+"<span class = 'tag'>" +  nextQuote.tag + "</span>" + '</p>';
	}else if(nextQuote.citation != undefined && nextQuote.year=== undefined){
		var message = message +'<p class="source">' + nextQuote.source  + '<span class="cite">'  + ", " + nextQuote.citation + ", "  + '</span>'+ "<span class = 'tag'>" +  nextQuote.tag + "</span>"+ "</p>";
	}else if(nextQuote.citation === undefined && nextQuote.year!= undefined){
		var message = message + '<p class="source">' + nextQuote.source + '<span class="year">' + nextQuote.year  + ", "+  '</span>' + "<span class = 'tag'>" +  nextQuote.tag + "</span>" +'</p>';
	}else{
		var message = message +  nextQuote.source  +"<span class = 'tag'>" + ", " + nextQuote.tag + "</span>" + '</p>';
	}
	document.getElementById("quote-box").innerHTML = message;

	
}

