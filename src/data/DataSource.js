export default class DataSource {
    static #_instance;

    static getInstance() {
        if (this.#_instance == null) {
            this.#_instance = new DataSource();
        }

        return this.#_instance;
    }

    getJobIds(successCallback, errorCallback) {
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                successCallback(json)
            })
            .catch((error) => {
                console.error(error)
                errorCallback(error)
            })
    }

    getJobDetails(jobId, successCallback, errorCallback) {
        const url = 'https://hacker-news.firebaseio.com/v0/item/' + jobId + '.json';
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                successCallback(json)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
