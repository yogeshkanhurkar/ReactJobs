import CacheHelper from '../../../src/utils/CacheHelper';
import {Cache} from 'react-native-cache';
import Job from '../../../src/models/Job';

jest.mock('../../../src/models/Job');

beforeAll(() => {
});

test('set value success', async () => {
    let job = new Job(json);

    Cache.set = jest.fn(() => Promise.resolve());

    await expect(CacheHelper.getInstance().addJobToCache(job)).resolves.not.toThrow();
});

test('set value success', async () => {
    let job = new Job(json);

    Cache.set = jest.fn(() => Promise.reject('error'));

    await expect(CacheHelper.getInstance().addJobToCache(job)).rejects.toMatch('error')
});

const json = {
    'by': 'Matth3wMarshall',
    'id': 27141120,
    'score': 1,
    'time': 1620907247,
    'title': 'New Story (YC S15) Is Hiring Head of People and Culture',
    'type': 'job',
    'url': 'https://newstorycharity.org/careers/head-of-people-and-culture',
};
