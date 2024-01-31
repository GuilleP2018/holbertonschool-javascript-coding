describe('stdin test', () => {
  beforeEach(() => {
    process.stdout.write('Welcome to Holberton School, what is your name?\n');
    process.stdin.setEncoding('utf8');
  });

  test('reads from stdin', (done) => {
    process.stdin.on('readable', () => {
      const name = process.stdin.read();
      if (name !== null) {
        process.stdout.write(`Your name is: ${name}`);
        done();
      }
    });
  });

  afterEach(() => {
    process.stdout.write('This important software is now closing\n');
  });
});
