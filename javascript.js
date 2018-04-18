function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
            $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
                response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
            $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                ' (' + response.quoteAuthor + ')');
        }
    });
}

$(function() {
    randomQuote();
});

$("button").click(function(){
    randomQuote();
});
/*
//Quotes Changer
var quotes = [1, 2, 3];
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

}
*/
//Color of Background Changer
var buton=document.getElementById("buton");
var allchar="0123456789ABCDEF";

buton.addEventListener("click",myFun);

function myFun(){
var  randcol= "";
for(var i=0; i<6; i++){
    randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}
