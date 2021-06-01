import Job from "../models/Job";

export default class Interactor {
    constructor(dataSource) {
        this.dataSource = dataSource
    }

    getJobs(successCallback, errorCallback) {
        this.dataSource.getJobIds(
            (json) => {
                this.getDetails(json, successCallback)
            },
            (error) => {
                errorCallback(error)
            }
        )
    }

    getDetails(jsonIds, successCallback, errorCallback) {
        let jobs = []
        let numberOfIdsProcessed = 0

        for (let index in jsonIds) {
            this.dataSource.getJobDetails(jsonIds[index],
                (json) => {
                    let job = new Job(json)
                    jobs.push(job)
                    numberOfIdsProcessed = numberOfIdsProcessed + 1
                    this.processCallback(numberOfIdsProcessed, jsonIds.length, successCallback, errorCallback, jobs)
                },
                () => {
                    numberOfIdsProcessed = numberOfIdsProcessed + 1
                    this.processCallback(numberOfIdsProcessed, jsonIds.length, successCallback, errorCallback, jobs)
                });
        }
    }

    processCallback(numberOfIdsProcessed, totalNumberOfIds, successCallback, errorCallback, jobs) {
        if (numberOfIdsProcessed == totalNumberOfIds) {
            if (jobs.length == 0) {
                errorCallback('error')
            } else {
                jobs.sort((a, b) => a.time > b.time ? 1 : -1)
                successCallback(jobs)
            }
        }
    }
}
