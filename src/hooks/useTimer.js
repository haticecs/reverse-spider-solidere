/* UseTimer  is used to create  Count Up Timer in the InfoBar
 */
import { useState, useEffect } from "react";

const useTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
      if (seconds < 59) {
        setSeconds(seconds + 1);
      }
      if (minutes === 59) {
        setMinutes(0);
        setHours(hours + 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return [hours, minutes, seconds];
};

export default useTimer;
