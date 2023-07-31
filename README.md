# OBS Utils (D&D 5E)

This is a companion Module for OBS Utils which provides Dungeons and Dragons 5th Edition specific functionality.

Unless you use both OBS Utils and D&D5E, this Module does nothing for you.
If you do use both. This module will provide implementation of Features that are System specific, like making sure an Actor stays selected through Polymorph.

# Building

This repository uses xc for task definitions! As such only nodejs, yarn and xc are required.

### Dependencies
| Project     | Version  |
|-------------|----------|
| nodejs.org  | ^18.12.1 |
| xcfile.dev  | ^0.0.159 |
| yarnpkg.com | ^3.5.1   |

## Tasks

### setup

setup the environment

```
yarn install
```

### build

Builds the module

Requires: setup

```
yarn build
```