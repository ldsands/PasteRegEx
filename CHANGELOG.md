# Change Log

All notable changes to the "PasteRegEx" extension will be documented in this file.

- Added - for new features.
- Changed - for changes in existing functionality.
- Deprecated - for soon-to-be removed features.
- Removed - for now removed features.
- Fixed - for any bug fixes.
- Security - in case of vulnerabilities.

<!-- Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file. -->

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
