#/usr/bin/env/sh
set -e
pwd

# Run StandardJS.
echo '  [*] Running StandardJS (http://standardjs.com)..'
standard index.js
echo '  [✓] Finished code style checks.'
