const concurrently = require('concurrently');

try {
  concurrently([
    'node reg.js',
    'node log.js'
  ]);
} catch (err) {
  console.error(err);
}