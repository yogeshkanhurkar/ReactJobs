import Interactor from '../../../src/data/Interactor';
import DataSource from '../../../src/data/DataSource';

test('check failure for getJobs', () => {
    DataSource.getJobIds = jest.fn(() =>);
});

const jobIds = [27351420, 27347983, 27305250, 27301960];
