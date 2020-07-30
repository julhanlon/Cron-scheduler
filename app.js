var CronJob = require('cron').CronJob;

var everySecond = new CronJob('* * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');
everySecond.start();

var everyMinute = new CronJob('* * * * *', function() {
  console.log('You will see this message every minute');
}, null, true, 'America/Los_Angeles');
everyMinute.start();

var everyHour = new CronJob('0 13 * * *', function() {
    console.log('You will see this message at 1pm');
  }, null, true, 'America/Los_Angeles');
  everyHour.start();