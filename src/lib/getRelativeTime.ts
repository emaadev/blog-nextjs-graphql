const getRelativeTime = (isoTimeString: string) => {
  const time = new Date(isoTimeString);
  const now = new Date();
  const diff = time.getTime() - now.getTime();

  const seconds = Math.abs(diff) / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;

  if (years >= 1) {
    return `${Math.floor(years)} year${years >= 2 ? "s" : ""} ${
      diff > 0 ? "from now" : "ago"
    }`;
  } else if (days >= 1) {
    return `${Math.floor(days)} day${days >= 2 ? "s" : ""} ${
      diff > 0 ? "from now" : "ago"
    }`;
  } else if (hours >= 1) {
    return `${Math.floor(hours)} hour${hours >= 2 ? "s" : ""} ${
      diff > 0 ? "from now" : "ago"
    }`;
  } else if (minutes >= 1) {
    return `${Math.floor(minutes)} minute${minutes >= 2 ? "s" : ""} ${
      diff > 0 ? "from now" : "ago"
    }`;
  } else {
    return `${Math.floor(seconds)} second${seconds >= 2 ? "s" : ""} ${
      diff > 0 ? "from now" : "ago"
    }`;
  }
};

export default getRelativeTime;
