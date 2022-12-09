const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const logger = require('../logger/logger')
const moment = require('moment')
const helper = require('../util/helper')
const validator = require('../validator/formatter')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)

      logger.welcome("ASHAR")
      helper.printDate(moment().format('Do YYYY'))
      helper.printMonth(moment().format('MMMM'))
      helper.getBatchInfo("Californium" , "WEEK 3rd" , "DAY 4th" , "NODE_JS MODULE")
      validator.trim("   Ashar      ")
      validator.changeToLowerCase("AsHar Is A gOOd Man  ")
      validator.changeToUpperCase("AsHar Is A gOOd Man  ")

      const months = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "June" , "July" , "Aug" , "Sep" , "Oct" , "Nov" , "Dec"]
      console.log(lodash.chunk(months , 4))

      const oddNo = [1 , 3 , 5 , 6, 7 , 9 , 11 , 13 , 15 , 17]
      console.log(lodash.tail(oddNo))

      const arr1 = [1 , 2, 3, 4]
      const arr2 = [ 2 , 4 , 5 , 6]
      const arr3 = [ 1 , 4 , 7 , 8]
      const arr4 = [ 3 , 7 , 9 , 10]
      const arr5 = [ 7 , 11 , 12 , 3]
      console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

      const movie = [["Dangal" , "Biopic"] , ["Stree" , "Horror Comedy"] , ["Zero" , "Comedy"] , ["DDLJ" , "Romantic"]]
      console.log(lodash.fromPairs(movie))
      


    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;