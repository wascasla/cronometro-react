export default class Time {
    static getTimeFromSeconds(totalSeconds) {
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = ((Math.floor(totalSeconds / 60000) % 60));
        const seconds = ("0" + (Math.floor(totalSeconds / 1000) % 60));
        //const seconds = ("0" + (Math.floor(totalSeconds % ( 1000 * 60)) / 1000));
        const milliSeconds = ("0" + (Math.floor(totalSeconds / 10) % 100));
    
        return {
          seconds,
          minutes,
          hours,
          days,
          milliSeconds
        };
      }


      static getTimeFromSeconds2(totalSeconds) {
        let diffInHrs = totalSeconds / 3600000;
        const days = Math.floor(totalSeconds / (60 * 60 * 24));

        const hours = Math.floor(diffInHrs);
        
        let diffInMin = (diffInHrs - hours) * 60;

        const minutes = Math.floor(diffInMin);

        let diffInSec = (diffInMin - minutes) * 60;


        const seconds = Math.floor(diffInSec);

        let diffInMs = (diffInSec - seconds) * 100;


        //const seconds = ("0" + (Math.floor(totalSeconds % ( 1000 * 60)) / 1000));
        const milliSeconds = (Math.floor(diffInMs));
    
        return {
          seconds,
          minutes,
          hours,
          days,
          milliSeconds
        };
      }
}



//   https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/