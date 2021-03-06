# PasteRegEx README

PasteRegEx is a simple extension which applies Regular Expressions (RegEx) to text selected in an active editor.

- [PasteRegEx README](#pasteregex-readme)
    - [Features](#features)
    - [Requirements](#requirements)
    - [Extension Settings](#extension-settings)
    - [Plans for Future Releases](#plans-for-future-releases)
    - [Known Issues](#known-issues)
    - [Release Notes](#release-notes)

## Features

After you select some text in an editor you can then select a PasteRegEx command and it will apply the Regular Expression to that selected text.

This is a list of the current regular expressions that are currently implemented. They are shown in this format:

- functionName
    - function description
    - `regular expression`, `flags`, "replacement text"

- rmHangingSpaces
    - This function removes all of the spaces that appear at the end of sentences
    - ` +$`, `gm`, ""
- rmNewLines
    - This function removes all of the new lines in the selection
    - `\r\n+|\n+|\r+`, `gm`, " "
- rmHyphenLineEnd
    - This function removes all of the hyphens that appear at the end of the line
    - `(?<=[a-z])-$\r\n+|\n+|\r+(?=[a-z])`, `gm`, ""
- rmSentenceBreaks
    - This function removes all of the newlines that appear to break up a sentence
    - `([a-z])(\r\n+|\n+|\r+)(?=[a-z])`, `gm`, "$1 "
- rmExtraSpaces
    - This function removes all instances of more than one space and replaces them with one space
    - ` +`, `gm`, " "

<!-- 
\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.
-->

## Requirements

I do not believe there are any special requirements needed to run this extension.

## Extension Settings

There are currently no extension settings but I do hope to add some in the future.

<!-- 
Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something
-->

## Plans for Future Releases

These plans are very much a wishlist that may or may not ever be completed. Feel free to create issues and/or pull requests to add features.

- existing command improvements
    - allow for rmSentenceBreaks to also include certain types of punctuation between the sentences and to remove multiple new lines between sentences

- change the versioning schema
- add more regular expressions
    - remove any curly quotes, commas, etc and replace them with the straight versions
- add the ability to combine multiple regular expressions in sequence
- [set up webpack to reduce the size of the extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension)
<!-- - [publish the extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) -->
- [set up a CI workflow](https://code.visualstudio.com/api/working-with-extensions/continuous-integration)
- add the ability to choose to apply the regular expression to either the selection or the clipboard
- regular expression maker
    - this is a very low priority and likely not to happen without help
    - this would allow you to enter a regular expression yourself and choose some options some of these options could include
        - prefix characters that will not be replaced
        - main body expression to be replaced
        - post body characters to not be replaced
        - change what characters are replacing the body of regular expression
- refactor the commands to be selected from a menu rather than each one being a separate command
    - I'm not sure I want this or not so I'll give it some more thought
- testing (I have NO experience with software testing so this will almost certainly happen ONLY if someone else takes on the task)

## Known Issues

<!-- At the moment there are no known issues -->
- I need to make sure that using the new lines command also removes all of the double spaces (I may make this a user setting later)

## Release Notes

[see the changelog](CHANGELOG.md)
