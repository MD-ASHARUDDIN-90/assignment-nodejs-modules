const trim = function(text){
    let result = text.trim()
    console.log(result)
}

const changeToLowerCase = function(text){
    let result = text.toLowerCase()
    console.log(result)
}

const changeToUpperCase = function(text){
    let result = text.toUpperCase()
    console.log(result)
}


module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase