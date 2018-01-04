/***
  Check the rss feeds every day at 3:00 am pst
***/


/***
  Seconds: 0-59
  Minutes: 0-59
  Hours: 0-23
  Day of Month: 1-31
  Months: 0-11
  Day of Week: 0-6
***/

import { CronJob } from 'cron';

async function start(time) {
  var job = new CronJob('00 00 05 * * 1-5', function() {
    /*
     * Runs every weekday (Monday through Friday)
     * at 11:30:00 AM. It does not run on Saturday
     * or Sunday.
     */
    }, function () {
      /* This function is executed when the job stops */
    },
    true, /* Start the job right now */
    timeZone /* Time zone of this job. */
  );
}

