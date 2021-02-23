import helloWorld from '../hello-world-js';

test('adds 1 + 2 to equal 3', () => {
    expect(helloWorld()).toBe('Hello world!');
});
