export abstract class Animal {
  protected sound: string;

  speak(phrase: string) {
    const wordEndingChars = `\\.\\!\\?\\,\\;\\:\\"\\s\\%\\)`;
    const sound = phrase.replace(
      new RegExp(`([^${wordEndingChars}])([${wordEndingChars}]|$)`, 'g'),
      `$1 ${this.sound}$2`,
    );
    console.log(sound);
    return sound;
  }
}
