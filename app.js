var CronJob = require('cron').CronJob;

var everySecond = new CronJob('* * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
everySecond.start();



var everyMinute = new CronJob('* * * * *', function() {
  console.log('You will see this message every minute');
}, null, true, 'America/Los_Angeles');
everyMinute.start();