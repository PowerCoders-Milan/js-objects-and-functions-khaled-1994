//Write a function named helloWorld that:
// Takes 1 argument, a language code (e.g. "es", "de", "en")

// Returns "Hello, World" for the given language, for at least 3 languages.

// It should default to returning English. (defaul means that if no value is given it says it in english)

// Prompt the user to give you a language and call the function passing that language as an argument.

// Remember to print to the browser to cee if it works

var inglese = "Hello world" ;
var italiano = "Ciao mondo" ;
var francese  = "Bonjour le monde" ;
var lingua = prompt("insert your language - it - fr") ;
function language(){
    
    if (lingua === "it"){
        window.alert(italiano)
    }
    else if (lingua === "fr"){
        window.alert(francese)
    }
    else{
        window.alert(inglese)
    }
}
language()
