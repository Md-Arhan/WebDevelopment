# CJS and ESM

CJS: Great for traditional Node.js applications or scripts.

ESM: Ideal for modern applications (especially when targeting both browsers and Node.js) and for using features like tree-shaking.

| Feature | CommonJS (CJS) | ECMAScript Modules (ESM) |
|--------|----------------|---------------------------|
| Import modules | `const fs = require('fs')` | `import fs from 'fs'` |
| Export modules | `module.exports = value`<br>`exports.name = value` | `export default value`<br>`export const name = value` |


# USING SQL IN CLI (COMMAND LINE INTERFACE)

 Explanation of Each Part:
"/c/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe"

This is the full path to the mysql.exe file, which is the MySQL command-line client.

Windows Path: On Windows, the MySQL executable mysql.exe is usually located in the bin folder inside the MySQL installation directory.
Example path: C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe.

Git Bash Format: When using Git Bash, Windows paths are converted to a Unix-style format, so C: becomes /c/, and spaces are handled by enclosing the path in quotes ("). This is why the path is written like "/c/Program Files/MySQL/MySQL Server 8.0/bin/mysql.exe".

-u root

-u stands for user.

root is the MySQL username you're logging in with. By default, the root user has full privileges on the MySQL database.

You can replace root with any other MySQL username if necessary.

-p

This tells MySQL to prompt you for the password of the MySQL user (in this case, root).

After you press Enter, MySQL will ask for the password, but the characters will not be visible on the screen (for security reasons).

The password must be entered correctly to proceed.