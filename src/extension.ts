'use strict';
import * as vscode from 'vscode';
import { TextDocument, Position, Selection } from 'vscode';
// import { commands, window, TextDocument, TextEditorEdit, ExtensionContext, Position, SnippetString, Selection } from 'vscode';


// declaring constants
const editor = vscode.window.activeTextEditor;

function getSelectedText(): string {
    /*
    This function is meant to get the text that is currently selected
    */
    let document = editor?.document;
    let selection = editor?.selection;
    let selectedText = document?.getText(selection);
    return selectedText as string
}

function insertNewString(modifiedString: string) {
    /*
    This function is meant to get the text that is currently selected
    */
    if (editor) {
        let selection = editor.selection;
        editor.edit(editBuilder => {
            editBuilder.replace(selection, modifiedString);
        });
    }
}

// export the vscode commands that'll show up in the command pallette
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand("PasteRegEx.rmHangingSpaces", async () => {
        /*
        This function removes all of the spaces that appear at the end of sentences
        */
        var selectionText: String = getSelectedText();
        let editor = vscode.window.activeTextEditor;
        let RegEx = new RegExp(" $", "gm")
        var modifiedString: string = selectionText.replace(RegEx, "");
        insertNewString(modifiedString)
    });

    disposable = vscode.commands.registerCommand("PasteRegEx.rmNewLines", async () => {
        /*
        This function removes all of the new lines in the selection
        */
        var selectionText: String = getSelectedText();
        let editor = vscode.window.activeTextEditor;
        let RegEx = new RegExp("\n", "gm")
        var modifiedString: string = selectionText.replace("/\n/gm", " ");
        insertNewString(modifiedString)
    });

    disposable = vscode.commands.registerCommand("PasteRegEx.rmHyphenLineEnd", async () => {
        /*
        This function removes all of the hyphens that appear at the end of the line
        */
        var selectionText: String = getSelectedText();
        let editor = vscode.window.activeTextEditor;
        let RegEx = new RegExp("(?<=[a-z])-$\n(?=[a-z])", "gm")
        var modifiedString: string = selectionText.replace(RegEx, "");
        insertNewString(modifiedString)
    });

    disposable = vscode.commands.registerCommand("PasteRegEx.rmSentenceBreaks", async () => {
        /*
        This function removes all of the newlines that appear to break up a sentence
        */
        var selectionText: String = getSelectedText();
        let editor = vscode.window.activeTextEditor;
        let RegEx = new RegExp("[a-z]$\n+[a-z]", "gm")
        var modifiedString: string = selectionText.replace(RegEx, " ");
        insertNewString(modifiedString)
    });
}

export function deactivate() { }

/*
Getting access to the clipboard text
// var clipboardText = await vscode.env.clipboard.readText();
*/
