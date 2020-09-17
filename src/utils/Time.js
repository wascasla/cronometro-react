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
}



//   https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/