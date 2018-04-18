var quotes = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    "when an unknown printer took a galley of type and scrambled it to make a type specimen book. " +
"", "It was popularised in the 1960s with the release of Letraset sheets containing " +
    "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus " +
    "PageMaker including versions of Lorem Ipsum."];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

}
/*
$(window).load(function(){
    $( "#change_background" ).on( "click", function() {
        $("body").first().css("background-color","pink");
        $("body").second().css("background-color","blue");
    });
});
*/
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