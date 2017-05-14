**PROJECT STATUS:** Just got started. Nothing to see here.  
**CURRENT VERSION:** `0.0.2`  
**FOLLOWS SEMVER:** Not yet.  
**DEFAULT BRANCH:** `develop`  

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


RepoGen
=======
My Repository Generator:
* Helps create a new js/sh project (repo)
* Prompt based


Installation
------------
Copy and run `$ ./repogen.sh` from the parent folder.

pakajaso
--------
A node tool to get and set stuff from a package.json file

usage:
```sh
# set name field to "john"
$ pakajaso name john

# get name field
$ pakajaso name
# -> john

# add keywords (array.push) - does not create if not exists
$ pakajaso keywords another-word

# add a script (object[prop]) - does not create if not exists
$ pakajaso scripts lint "eslint ./index.js"
```
