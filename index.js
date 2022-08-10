// Define a function called introduction that defines a parameter, 
//name, and returns the phrase: 'Hi, my name is ${name}.'
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Define a function called introductionWithLanguage that 
//defines two parameters, name and language, and returns the 
//phrase: "Hi, my name is [name] and I am learning to program 
//in [language]."
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

// Define a function called introductionWithLanguageOptional that 
//defines two parameters, name and language (default value of 
//"JavaScript"), and returns the phrase: "Hi, my name is [name] 
//and I am learning to program in [JavaScript]."
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
