/**
 * Turns Date object to readable format 
 * @param {Date} date
 * @return {string} string of format 'Weekday, Month Day, Year, HH:MM AM/PM'
 * 
 * @example
 * toDateTime(new Date(1560211200000)) // => 'Tuesday, June 11, 2019, 8:00 AM'
 */

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

enum Weekdays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function toDateTime(date: Date): string {
  const weekday = Weekdays[date.getDay()];
  const month = Months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours() % 12;
  const minute = ('00' + date.getMinutes()).slice(-2);
  const AMPM = date.getHours() > 12 ? 'PM' : 'AM';

  return `${weekday}, ${month} ${day}, ${year}, ${hour}:${minute} ${AMPM}`
}

export default toDateTime;
