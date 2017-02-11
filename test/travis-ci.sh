#/usr/bin/env/sh
set -e
pwd

# Set color variables.
GREEN='\033[0;32m'
BLUE='\033[1;36m'
NO_COLOR='\033[0m'

# Run StandardJS.
echo "  [${BLUE}*${NO_COLOR}] Running StandardJS (http://standardjs.com).."
standard
echo "  [${GREEN}✓${NO_COLOR}] Finished code style checks."

# install vows
echo "  [${BLUE}*${NO_COLOR}] installing vows (http://vowsjs.org/).."
npm install -g vows
echo "  [${GREEN}✓${NO_COLOR}] vows installed."

# Run our test file
echo "  [${BLUE}*${NO_COLOR}] Running our tests (./tests/test.js)"
vows ./test/test.js --spec
echo "  [${GREEN}✓${NO_COLOR}] Test completed."
