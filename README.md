# OBS Utils (D&D 5E)

This is a companion Module for OBS Utils which provides Dungeons and Dragons 5th Edition specific functionality.

Unless you use both OBS Utils and D&D5E, this Module does nothing for you.
If you do use both. This module will provide implementation of Features that are System specific, like making sure an Actor stays selected through Polymorph.

# Features

### Actor Transformation

With this module, a selected actor for the Overlay will correctly be updated to the polymorphed/wildshaped/transformed actor and automatically reverted when the transformation is reverted.
This feature is dependant on data provided by the system, as such tracking more than one layer of transformation will fail.

### Human Readable Actor Values

This module provides a static mapping of actor values to human readable text.
I.e. you get "Strength Value" instead of "system.abilities.str.value"

This feature is fully translatable with unicode support. Please submit a pull request if you want to add to the localization.

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