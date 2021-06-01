import TimeUtils from '../../../src/utils/TimeUtils';

test('check date returned from millis', () => {
    const millis = 1622480425;
    const date = 'Tue Jan 20 1970';
    Date.toDateString = jest.fn(() => date);

    expect(TimeUtils.getDateFromMillis(millis)).toEqual(date);
});
