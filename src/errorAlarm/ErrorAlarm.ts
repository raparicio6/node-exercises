const MAX_ERRORS_PER_MINUTE = 10;
const MSECONDS_TO_WAIT_TO_NOTIFY_AGAIN = 60000;

interface ErrorData {
  description: string;
  date: Date;
}

export class ErrorAlarm {
  private static instance?: ErrorAlarm;
  private errors: ErrorData[];
  private notificationWasSent: boolean;

  constructor() {
    this.errors = [];
    this.notificationWasSent = false;
  }

  static getInstance(): ErrorAlarm {
    if (!this.instance) {
      this.instance = new ErrorAlarm();
    }

    return this.instance;
  }

  addError(errorDescription: string) {
    this.errors.push({ description: errorDescription, date: new Date() });
  }

  shouldNotify() {
    if (this.notificationWasSent) {
      return false;
    }

    if (this.errors.length <= MAX_ERRORS_PER_MINUTE) {
      this.notificationWasSent = false;
      return false;
    }

    const firstErrorFromPeriod = this.errors[this.errors.length - 1 - MAX_ERRORS_PER_MINUTE];
    const lastErrorFromPeriod = this.errors[this.errors.length - 1];

    const differenceInSeconds =
      (lastErrorFromPeriod.date.getTime() - firstErrorFromPeriod.date.getTime()) / 1000;
    if (differenceInSeconds <= 60) {
      this.notificationWasSent = true;
      setTimeout(() => {
        this.notificationWasSent = false;
      }, MSECONDS_TO_WAIT_TO_NOTIFY_AGAIN);
      return true;
    }

    this.notificationWasSent = false;
    return false;
  }

  getTotalErrorsAmount() {
    return this.errors.length;
  }

  resetErrors() {
    this.errors = this.errors.slice((MAX_ERRORS_PER_MINUTE + 1) * -1);
  }
}
