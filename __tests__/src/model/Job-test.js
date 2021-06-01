import Job from '../../../src/models/Job';

test('verify object generated for json', () => {
    const job = new Job(json);
    expect(job.id).toBe(json['id']);
    expect(job.score).toBe(json['score']);
    expect(job.time).toBe(json['time']);
    expect(job.type).toBe(json['type']);
    expect(job.url).toBe(json['url']);
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

