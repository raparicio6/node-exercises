import { Lion } from '../src/zoo/Lion.js';
import { Tiger } from '../src/zoo/Tiger.js';

describe('zoo', () => {
  it('Lion basic phrase', () => {
    const lion = new Lion();
    expect(lion.speak(`I'm a lion`)).toEqual(`I'm roar a roar lion roar`);
  });

  it('Tiger basic phrase', () => {
    const tiger = new Tiger();
    expect(tiger.speak('Lions suck')).toEqual('Lions grrr suck grrr');
  });

  it('empty phrase', () => {
    const lion = new Lion();
    expect(lion.speak('')).toEqual('');
  });

  it('sentence with dot', () => {
    const tiger = new Tiger();
    expect(tiger.speak('I am hugry.')).toEqual('I grrr am grrr hugry grrr.');
  });

  it('many sentences', () => {
    const lion = new Lion();
    expect(lion.speak('I am hugry. I need food.')).toEqual(
      'I roar am roar hugry roar. I roar need roar food roar.',
    );
  });

  it('many symbols', () => {
    const tiger = new Tiger();
    expect(tiger.speak('Can I eat this? Please!')).toEqual(
      'Can grrr I grrr eat grrr this grrr? Please grrr!',
    );
  });

  it('symbols combined', () => {
    const lion = new Lion();
    expect(lion.speak('Is this food?!')).toEqual('Is roar this roar food roar?!');
  });
});
