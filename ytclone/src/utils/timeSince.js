function TimeSince(date) {
  const second = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);
  
  let Interval = second / 31536000;

  if (Interval > 1) {
    return Math.floor(Interval) + " years";
  }

  Interval = second / 2592000;

  if (Interval > 1) {
    return Math.floor(Interval) + " months";
  }

  Interval = second / 86400;

  if (Interval > 1) {
    return Math.floor(Interval) + " days";
  }

  Interval = second / 3600;

  if (Interval > 1) {
    return Math.floor(Interval) + " hours";
  }

  Interval = second / 60;

  if (Interval > 1) {
    return Math.floor(Interval) + " minutes";
  }

  return Math.floor(second) + " seconds";
}

export default TimeSince;