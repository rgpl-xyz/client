import { KebabCasePipe } from './kebab-case.pipe';

describe('KebabCasePipe', () => {
  let pipe: KebabCasePipe;

  beforeEach(() => {
    pipe = new KebabCasePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should handle multiple spaced words', () => {
    expect(pipe.transform('Sample  double  spaced  words')).toBe(
      'sample-double-spaced-words'
    );
    expect(pipe.transform('Super       spaced    words')).toBe(
      'super-spaced-words'
    );
  });

  it('should handle title case words', () => {
    expect(pipe.transform('Hello World')).toBe('hello-world');
    expect(pipe.transform('Lorem Ipsum')).toBe('lorem-ipsum');
  });

  it('should handle camel case words', () => {
    expect(pipe.transform('helloWorld')).toBe('hello-world');
    expect(pipe.transform('loremIpsum')).toBe('lorem-ipsum');
  });

  it('should handle numerics in words', () => {
    expect(pipe.transform('7up')).toBe('7up');
    expect(pipe.transform('7eleven')).toBe('7eleven');
    expect(pipe.transform('123')).toBe('1-2-3');
    expect(pipe.transform('214YourSong')).toBe('2-1-4-your-song');
  });

  it('should handle special characters in words', () => {
    expect(pipe.transform('P@ssword')).toBe('p-@ssword');
    expect(pipe.transform('Bl**p')).toBe('bl-*-*p');
  });
});
