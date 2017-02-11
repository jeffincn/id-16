#/usr/bin/env/sh
set -e
pwd

# set some variables
GREEN='\033[0;32m'
NO_COLOR='\033[0m'

# Run StandardJS.
echo "  [*] Running StandardJS (http://standardjs.com).."
standard
echo "  [${GREEN}✓${NO_COLOR}] Finished code style checks."

# install vows
echo "  [*] installing vows (http://vowsjs.org/).."
#npm install -g vows
echo "  [${GREEN}✓${NO_COLOR}] vows installed."

# Run our test file
echo "  [*] Running our tests (./tests/test.js)"
vows ./test/test.js --spec
echo "  [${GREEN}✓${NO_COLOR}] Test completed."
