#/usr/bin/env/sh
set -e
pwd

# Run StandardJS.
echo '  [*] Running StandardJS (http://standardjs.com)..'
standard index.js
echo '  [✓] Finished code style checks.'

# install vows
echo '  [*] installing vows (http://vowsjs.org/)..'
npm install -g vows
echo '  [✓] vows installed.'

# Run our test file
echo '  [*] Running our tests (./tests/test.js)'
vows ./test/test.js
echo '  [✓] Test completed.'
