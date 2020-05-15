# Change Log

All notable changes to the "PasteRegEx" extension will be documented in this file.

- Added - for new features.
- Changed - for changes in existing functionality.
- Deprecated - for soon-to-be removed features.
- Removed - for now removed features.
- Fixed - for any bug fixes.
- Security - in case of vulnerabilities.

<!-- Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file. -->

<!--
- Update Todo list:
    - [x] make your changes
    - [x] update the version number
        - [x] [package-lock.json](package-lock.json)
        - [x] [package.json](package.json)
        - [x] [CHANGELOG.md](CHANGELOG.md)
    - [x] look through and update the [README.md](README.md) (where needed)
        - [x] [Features](README.md#features)
        - [x] [Requirements](README.md#requirements)
        - [x] [Extension Settings](README.md#extension-settings)
        - [x] [Plans for Future Releases](README.md#plans-for-future-releases)
        - [x] [Known Issues](README.md#known-issues)
    - [x] check and update [package.json](package.json) (when needed)
    - [x] check and update [testingStrings.txt](testingStrings.txt) (when needed)
        - [x] make sure to test using debug
    - [x] update the [Changelog](CHANGELOG.md) file
        - [x] add new section with version number
        - [x] fill out notable changes section (where needed)
            - [x] Added - for new features.
            - [x] Changed - for changes in existing functionality.
            - [x] Deprecated - for soon-to-be removed features.
            - [x] Removed - for now removed features.
            - [x] Fixed - for any bug fixes.
            - [x] Security - in case of vulnerabilities.
    - [ ] publish using `vsce`

```PowerShell
# if you have not yet setup vsce then enter the following code
npm install -g vsce
vsce login (publisher name)
# to publish a patch (increment the version number automatically)
vsce publish patch -p $token
# to publish a minor (increment the version number automatically)
vsce publish minor -p $token
# to publish a major (increment the version number automatically)
vsce publish major -p $token
# to unpublish an extension
vsce unpublish (publisher name).(extension name)
```
-->

## 0.0.5 - 2020-05-15

Patch

- Added
    - added the rmExtraSpaces command
        - this will replace all instances of more than one space with only one space
- Changed
    - updated documentation and README.md for structure differences
    - added to the [Plans for Future Releases](README.md#plans-for-future-releases)

## 0.0.4 - 2020-05-02

Patch

- Changed
    - changed all of the regular expressions and placed them directly into the string replace `searchValue` section
- Fixed
    - fixed the issue of the rmNewLines working correctly
    - fixed the issue of the rmSentenceBreaks working correctly

## 0.0.3 - 2020-04-29

Patch

- Added
    - added a testingStrings.txt file for testing all of the commands
- Changed
    - I changed the regular expressions for a couple of the commands to make them account for more situations
- Fixed
    - fixed the issue of not implementing the RegEx statement correctly

## 0.0.2 - 2020-04-29

Patch

- Changed
    - one regex statement in extension.ts to match the others
        - this does not change the command's function at all
    - minor changes to the README
    - added known bug

## 0.0.1 - 2020-04-26

Initial release of PasteRegEx

- Added <!-- for new features. -->
    - apply regular expression to selected text
    - implemented the following commands
        - rmHangingSpaces
        - rmNewLines
        - rmHyphenLineEnd
        - rmSentenceBreaks
