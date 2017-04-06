# cryptify
File-based encryption (FBE) with Node.js

- [Installation](#installation)
- [Usage](#usage)
- [Recommendations](#recommendations)

# <a name="cryptify#installation">Installation</a>
- ```$ npm i -g cryptify```

# <a name="cryptify#usage">Usage</a>

    Cryptify v1.0 File-based Encryption Utility
    https://www.npmjs.com/package/cryptify
    Implements Node.js Crypto (https://nodejs.org/api/crypto.html)

    Usage:
       cryptify (<file>... (-p '<password>') (command) [options] | [other])
       cryptify ./configuration.props -p mySecretKey -e -c aes-256-cbc
       cryptify ./foo.json ./bar.json -p mySecretKey --decrypt --log
       cryptify --version

    Required Commands:
       -e --encrypt              Encrypt the file(s)
       -d --decrypt              Decrypt the file(s)

    Required Arguments:
       -p --password             Cryptographic key

    Optional Arguments:
       -c --cipher <algorithm>   Cipher algorithm (Default: aes-256-cbc-hmac-sha256)
       -k --keep                 Keep the original file(s)
       -l --log                  Log verbose
       -h --help                 Show this menu
       -v --version              Show version

    Password Requirements:
       1) Must wrap password in single quotes
       2) Minimum length: 8
       3) Requires at least 1 special character
       4) Combination of uppercase and lowercase


# <a name="cryptify#recommendations">Recommendations</a>
Strongly consider clearing your shell's session history of any sensitive information.
### Bash
Bash writes the current session history to disk (`~/.bash_history`) at the end of the session.

1. **Tactical Approach:** Clear a specific session entry

        $ history
        666 cryptify --help
        667 cryptify ./myfile -p mySecretKey
        $ history -d 667
        $ history -w
2. **Blunt Approach:** Clear current session history (in memory)

        $ history -c
3. **Nuclear Approach:** Clear current and existing session history (in memory, on disk)

        $ rm $HISTFILE
        $ history -c
        $ exit
        (open shell)
        $ cat $HISTFILE
        exit
### Windows CMD
Windows does not store history between command prompt sessions.

1. However, for safety, consider decreasing the `Buffer Size` and `Number of Buffers` before use.

    ![buffersize](http://imgur.com/a/osdRm)
2. Per the above configuration, Windows will only one command in the buffer.
3. Once work with `cryptify` is complete, close the command prompt

        C:\Users\[user]> cryptify ./myfile -p mySecretKey
        C:\Users\[user]> exit

### Windows PowerShell
1. PowerShell's [`Clear-History`](https://msdn.microsoft.com/en-us/powershell/reference/5.1/microsoft.powershell.core/clear-history) command [doesn't seem to work](https://blogs.msdn.microsoft.com/stevelasker/2016/03/25/clear-history-powershell-doesnt-clear-the-history-3/) as advertised
2. It is recommend to clear the entire PowerShell history:

        PS C:\Users\[user]> cryptify ./myfile -p mySecretKey
        PS C:\Users\[user]> del (Get-PSReadlineOption).HistorySavePath
        PS C:\Users\[user]> exit
