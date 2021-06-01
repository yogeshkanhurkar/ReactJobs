import DataSource from '../../../src/data/DataSource';

const jobIds = [27351420, 27347983, 27305250, 27301960];
const job = {
    'by': 'Matth3wMarshall',
    'id': 27141120,
    'score': 1,
    'time': 1620907247,
    'title': 'New Story (YC S15) Is Hiring Head of People and Culture',
    'type': 'job',
    'url': 'https://newstorycharity.org/careers/head-of-people-and-culture',
};

test('check success for getJobIds', done => {
    const mockFetch = Promise.resolve(
        {
            json: () => Promise.resolve(jobIds),
        },
    );

    global.fetch = jest.fn(() =>
        Promise.resolve(mockFetch),
    );

    const successCallback = jest.fn((json) => {
        expect(json).toBe(jobIds);
        done();
    });

    const errorCallback = jest.fn();

    DataSource.getInstance().getJobIds(successCallback, errorCallback);
});

test('check failure for getJobIds', done => {
    const mockFetch = Promise.resolve(
        {
            json: () => Promise.reject('error'),
        },
    );
    global.fetch = jest.fn(() =>
        Promise.reject('error'),
    );


    const successCallback = jest.fn();

    const errorCallback = jest.fn((error) => {
        expect(error).toBe('error');
        done();
    });

    DataSource.getInstance().getJobIds(successCallback, errorCallback);
});

test('check success for getJobDetails', done => {
    let jobId = '27141120';

    const mockFetch = Promise.resolve(
        {
            json: () => Promise.resolve(job),
        },
    );
    global.fetch = jest.fn(() =>
        Promise.resolve(mockFetch),
    );

    const successCallback = (json) => {
        expect(json).toBe(job);
        done();
    };

    const errorCallback = jest.fn();

    DataSource.getInstance().getJobDetails(jobId, successCallback, errorCallback);
});

test('check failure for getJobDetails', done => {
    let jobId = '27141120';

    const mockFetch = Promise.resolve(
        {
            json: () => Promise.reject('error'),
        },
    );
    global.fetch = jest.fn(() =>
        Promise.resolve(mockFetch),
    );

    const successCallback = jest.fn();

    const errorCallback = (error) => {
        expect(error).toBe(error);
        done();
    };

    DataSource.getInstance().getJobDetails(jobId, successCallback, errorCallback);
});


