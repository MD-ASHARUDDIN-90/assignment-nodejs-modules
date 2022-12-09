const moment = require('moment')

const printDate =function(date){
console.log("The current Date is  " , date)
}

const printMonth = function(Month){
    console.log("The current Month is  " ,Month);
}

const getBatchInfo = function(batch , week , day , topic){
    console.log(`${batch}, ${week} ${day}, the topic for today is ${topic}`)
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo