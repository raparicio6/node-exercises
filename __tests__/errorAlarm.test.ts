import { ErrorAlarm } from '../src/errorAlarm/ErrorAlarm.js';

describe('ErrorAlarm', () => {
  jest.useFakeTimers();

  afterEach(() => {
    ErrorAlarm.removeInstance();
  });

  it(`no errors, shouldn't notify`, () => {
    const errorAlarm = ErrorAlarm.getInstance();
    expect(errorAlarm.shouldNotify()).toEqual(false);
  });

  it(`10 errors, shouldn't notify`, () => {
    const errorAlarm = ErrorAlarm.getInstance();

    errorAlarm.addError('Error 1');
    errorAlarm.addError('Error 2');
    errorAlarm.addError('Error 3');
    errorAlarm.addError('Error 4');
    errorAlarm.addError('Error 5');
    errorAlarm.addError('Error 6');
    errorAlarm.addError('Error 7');
    errorAlarm.addError('Error 8');
    errorAlarm.addError('Error 9');
    errorAlarm.addError('Error 10');

    expect(errorAlarm.shouldNotify()).toEqual(false);
  });

  it(`more than 10 errors, should notify`, () => {
    const errorAlarm = ErrorAlarm.getInstance();

    errorAlarm.addError('Error 1');
    errorAlarm.addError('Error 2');
    errorAlarm.addError('Error 3');
    errorAlarm.addError('Error 4');
    errorAlarm.addError('Error 5');
    errorAlarm.addError('Error 6');
    errorAlarm.addError('Error 7');
    errorAlarm.addError('Error 8');
    errorAlarm.addError('Error 9');
    errorAlarm.addError('Error 10');
    errorAlarm.addError('Error 11');

    expect(errorAlarm.shouldNotify()).toEqual(true);
  });

  it(`more than 10 errors, notification already sent, shouldn't notify`, () => {
    const errorAlarm = ErrorAlarm.getInstance();

    errorAlarm.addError('Error 1');
    errorAlarm.addError('Error 2');
    errorAlarm.addError('Error 3');
    errorAlarm.addError('Error 4');
    errorAlarm.addError('Error 5');
    errorAlarm.addError('Error 6');
    errorAlarm.addError('Error 7');
    errorAlarm.addError('Error 8');
    errorAlarm.addError('Error 9');
    errorAlarm.addError('Error 10');
    errorAlarm.addError('Error 11');

    expect(errorAlarm.shouldNotify()).toEqual(true);
    expect(errorAlarm.shouldNotify()).toEqual(false);
  });

  it(`more than 10 errors, notification sent and wait is over, should notify again`, () => {
    const errorAlarm = ErrorAlarm.getInstance();

    errorAlarm.addError('Error 1');
    errorAlarm.addError('Error 2');
    errorAlarm.addError('Error 3');
    errorAlarm.addError('Error 4');
    errorAlarm.addError('Error 5');
    errorAlarm.addError('Error 6');
    errorAlarm.addError('Error 7');
    errorAlarm.addError('Error 8');
    errorAlarm.addError('Error 9');
    errorAlarm.addError('Error 10');
    errorAlarm.addError('Error 11');

    expect(errorAlarm.shouldNotify()).toEqual(true);
    jest.runAllTimers();
    expect(errorAlarm.shouldNotify()).toEqual(true);
  });
});
