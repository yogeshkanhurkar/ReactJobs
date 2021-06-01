export default class TimeUtils {
  static getDateFromMillis(timeInMillis) {
    let date = new Date(timeInMillis);
    return date.toDateString();
  }
}
