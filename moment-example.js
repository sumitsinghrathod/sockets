var moment = require('moment');
var now = moment();
console.log(now.format());
console.log(now.format('x'));
console.log(now.valueOf());
var timestamp = 1461862453187;
var timestampmoment = moment.utc(timestamp);
console.log(timestampmoment.local().format('h:mm a'));
// now.subtract(1 , 'year');
// //console.log(now.format());
// console.log(now.format('MMM Do YYYY, h:mma'));