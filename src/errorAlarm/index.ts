import { ErrorAlarm } from './ErrorAlarm.js';
import { MAX_ERRORS_TO_STORE } from './config.js';

const logError = (error: string) => console.log(`Error ${error}`);

const sendEmail = () => console.log('Sending email..');

export const logErrorAndNotify = (error: string) => {
  logError(error);

  const errorAlarm = ErrorAlarm.getInstance();
  errorAlarm.addError(error);

  if (errorAlarm.shouldNotify()) {
    sendEmail();
  }

  if (errorAlarm.getTotalErrorsAmount() > MAX_ERRORS_TO_STORE) {
    errorAlarm.resetErrors();
  }
};
