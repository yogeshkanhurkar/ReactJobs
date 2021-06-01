import {Cache} from 'react-native-cache';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Job from '../models/Job';

export default class CacheHelper {
    static #_instance;
    #_cache;

    constructor() {
        this.#_cache = new Cache({
            namespace: 'myapp',
            policy: {
                maxEntries: 500,
            },
            backend: AsyncStorage,
        });
    }

    static getInstance() {
        if (this.#_instance == null) {
            this.#_instance = new CacheHelper();
        }

        return this.#_instance;
    }

    async addJobToCache(job) {
        await this.#_cache.set(job.id, job).catch(error => console.log(error));
        return;
    }

    async getAllFavJobs() {
        const entries = await this.#_cache.getAll()
            .catch(error => {
                throw error;
            });
        const keys = Object.keys(entries);

        let jobs = [];
        for (let key of keys) {
            let job = new Job(entries[key].value);
            jobs.push(job);
        }

        return jobs;
    }

    async removeJobFromCache(id) {
        await this.#_cache.remove(id)
            .catch(error => {
                throw error;
            });
        return;
    }

    async clearCache() {
        await this.#_cache.clearAll();
        return;
    }

    //Added for unit test
    setCache(cache) {
        this.#_cache = cache;
    }
}
