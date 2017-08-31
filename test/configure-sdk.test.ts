import Flotta from '../src';

describe('Configure Flotta SDK', () => {
  it('should throw new error when apiKey it\'s missing', () => {
    expect(() => {
      const client = new Flotta();
    }).toThrow('apiKey it\'s required!');
  });

  it('should throw new error when flottaEndPoint it\'s missing', () => {
    expect(() => {
      const client = new Flotta('apiKey');
    }).toThrow('flottaEndPoint it\'s required!');
  });

  it('should pass', () => {
    const client = new Flotta('apiKey', 'flottaEndPoint');
    expect(client).toBeDefined();
  });

});