import TimeUtils from '../utils/TimeUtils';

export default class Job {
    id;
    score;
    time;
    title;
    type;
    url;

    constructor(json) {
        this.id = json['id'];
        this.score = json['score'];
        this.time = json['time'];
        this.title = json['title'];
        this.type = json['type'];
        this.url = json['url'];
    }

    get date() {
        return TimeUtils.getDateFromMillis(this.time);
    }
}
