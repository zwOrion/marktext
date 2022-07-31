// 创建文件en.js
const en = {
  language: {
    zh: '中文',
    en: 'English'
  },
  file: {
    root: '&File',
    newTab: 'New Tab',
    newWindow: 'New Window',
    openFile: 'Open File...',
    openFioder: 'Open Folder...',
    openRecent: {
      root: 'Open Recent',
      clearRecently: 'Clear Recently Used'
    },
    save: 'Save',
    saveAs: 'Save As...',
    autosave: 'Auto Save',
    move: 'Move To...',
    rename: 'Rename...',
    import: 'Import...',
    export: 'Export',
    print: 'Print',
    closeTab: 'Close Tab',
    closeWindow: 'Close Window',
    quit: 'Quit',
    preferences: {
      root: 'Preferences',
      autocomplete: 'Search preferences',
      general: {
        root: 'General',
        autoSave: {
          root: 'Auto Save:',
          bool: 'Automatically save document changes',
          delay: 'Delay following document edit before automatically saving'
        },
        window: {
          root: 'Window:',
          titleBar: 'Title bar style',
          notes: 'Requires restart.',
          scrollbars: 'Hide scrollbars',
          openFiles: 'Open files in new window',
          openFolder: 'Open folders in new window',
          zoom: 'Zoom',
          titleBarStyleOptions: {
            custom: 'Custom',
            native: 'Custom'
          },
          fileSortByOptions: {
            created: 'Creation time',
            modified: 'Modification time',
            title: 'Title'
          }
        },
        sidebar: {
          root: 'Sidebar:',
          wrapText: 'Wrap text in table of contents',
          sort: 'Sort field for files in open folders'
        },
        startup: {
          root: 'Action on startup',
          defaultDirectory: 'Open the default directory',
          selectFolder: 'Select Folder',
          blankPage: 'Open a blank page'
        },
        misc: {
          root: 'Misc',
          languageInterface: 'User interface language'
        }
      },
      editor: {
        root: 'Editor',
        textEditorSettings: {
          root: 'Text editor settings:',
          fontSize: 'Font size',
          lineHeight: 'Line height',
          fontfamily: 'Font family',
          maxWidth: 'Maximum width of text editor',
          notes: "Leave empty for theme default, otherwise use number with unit suffix, which is one of 'ch' for characters, 'px' for pixels, or '%' for percentage."
        },
        codeBlokSetting: {
          root: 'Code block settings:',
          fontSize: 'Font size',
          fontfamily: 'Font family',
          lineNum: 'Show line numbers',
          removeEmptyLines: 'Remove leading and trailing empty lines'
        },
        writingBehavior: {
          root: 'Writing behavior:',
          brackets: 'Automatically close brackets when writing',
          complterSyntax: 'Automatically complete markdown syntax',
          quotationMarks: 'Automatically close quotation marks'
        },
        filerepresentation: {
          root: 'File representation:',
          tabWidth: 'Preferred tab width',
          lineSeparator: 'Line separator type',
          encoding: 'Default encoding',
          detectFileEncoding: 'Automatically detect file encoding',
          trailingNewLineChar: 'Handling of trailing newline characters'
        },
        misc: {
          root: 'Misc:',
          textDirectioin: 'Text direction',
          hint4newParagraph: 'Hide hint for selecting type of new paragraph',
          hidePopup: 'Hide popup when cursor is over link',
          autoCheck: 'Whether to automatically check any related tasks'
        },
        endOfLineOptions: {
          Default: 'Default',
          crlf: 'Carriage return and line feed (CRLF)',
          lf: 'Line feed (LF)'
        },
        trimTrailingNewlineOptions: {
          all: 'Trim all trailing',
          one: 'Ensure exactly one trailing',
          preserve: 'Preserve style of original document',
          nothing: 'Do nothing'
        },
        textDirectionOptions: {
          ltf: 'Left to Right',
          rtl: 'Right to Left'
        }
      },
      markdown: {
        root: 'Markdown',
        lists: {
          root: 'Lists',
          looseList: 'Prefer loose list items',
          marker4bullet: 'Preferred marker for bullet lists',
          marker4order: 'Preferred marker for ordered lists',
          listIndentation: 'Preferred list indentation'
        },
        extensions: {
          root: 'Markdown extensions:',
          front: 'Front matter format',
          pandocScript: 'Enable Pandoc-style superscript and subscript',
          pandocFootnotes: 'Enable Pandoc-style footnotes',
          note: 'Requires restart.'
        },
        compatibility: {
          root: 'Compatibility:',
          html: 'Enable HTML rendering',
          gitlab: 'Enable GitLab compatibility mode'
        },
        diagrams: {
          root: 'Diagrams:',
          sequence: 'Sequence diagram theme'
        },
        misc: {
          root: 'Misc:',
          heading: 'Preferred heading style'
        },
        preferHeadingStyleOptions: {
          atx: 'ATX heading',
          setext: 'Setext heading'
        },
        listIndentationOptions: {
          dfm: 'DocFX style',
          tab: 'True tab character',
          space1: 'Single space character',
          space2: 'Two space characters',
          space3: 'Three space characters',
          space4: 'Four space characters'
        },
        sequenceThemeOptions: {
          hand: 'Hand drawn',
          simple: 'Simple'
        }
      },
      spelling: {
        root: 'Spelling'
      },
      theme: {
        root: 'Theme'
      },
      image: {
        root: 'Image'
      },
      keybindings: {
        root: 'Key Bindings'
      }
    }
  },
  edit: {
    root: '&Edit',
    undo: 'Undo',
    redo: 'Redo',
    cut: 'Cut',
    copy: 'Copy',
    paste: 'Paste',
    copyAsMarkdown: 'Copy as Markdown',
    copyAsHtml: 'Copy as HTML',
    pastePlainText: 'Paste as Plain Text',
    selectAll: 'Select All',
    duplicate: 'Duplicate',
    createParagraph: 'Create Paragraph',
    deleteParagraph: 'Delete Paragraph',
    find: 'Find',
    findNext: 'Find Next',
    findPrevious: 'Find Previous',
    replace: 'Replace',
    findInFolder: 'Find in Folder',
    screenshot: 'Screenshot',
    lineEnding: {
      root: 'Line Ending',
      crlf: 'Carriage return and line feed (CRLF)',
      lf: 'Line feed (LF)'
    }
  },
  paragraph: {
    root: '&Paragraph',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    heading4: 'Heading 4',
    heading5: 'Heading 5',
    heading6: 'Heading 6',
    promoteHeading: 'Promote Heading',
    demoteHeading: 'Demote Heading',
    table: 'Table',
    codeFences: 'Code Fences',
    quoteBlock: 'Quote Block',
    mathBlock: 'Math Block',
    htmlBlock: 'Html Block',
    orderedList: 'Ordered List',
    bulletList: 'Bullet List',
    taskList: 'Task List',
    looseListItem: 'Loose List Item',
    paragraph: 'Paragraph',
    horizontalRule: 'Horizontal Rule',
    frontMatter: 'Front Matter'
  },
  format: {
    root: '&Format',
    blod: 'Bold',
    italic: 'Italic',
    underline: 'Underline',
    superscript: 'Superscript',
    subscript: 'Subscript',
    highlight: 'Highlight',
    inlineCode: 'Inline Code',
    inlineMMath: 'Inline Math',
    strikethrough: 'Strikethrough',
    hyperlink: 'Hyperlink',
    image: 'Image',
    clearFormatting: 'Clear Formatting'
  },
  window: {
    root: '&Window',
    minimize: 'Minimize',
    alwaysTop: 'Always on Top',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fullScreen: 'Show in Full Screen',
    bringAll2Front: 'Bring All to Front'
  },
  theme: {
    root: '&Theme'
  },
  view: {
    root: '',
    commandPalette: 'Command Palette...',
    sourceCodeMode: 'Source Code Mode',
    typewriterMode: 'Typewriter Mode',
    focusMode: 'Focus Mode',
    showSidebar: 'Show Sidebar',
    showTabBar: 'Show Tab Bar',
    toggleTableContents: 'Toggle Table of Contents',
    reloadImages: 'Reload Images',
    developerTools: 'Show Developer Tools',
    reloadWindow: 'Reload window'
  },

  help: {
    root: '&Help',
    quickStart: 'Quick Start...',
    markdownReference: 'Markdown Reference...',
    changelog: 'Changelog...',
    donate: 'Donate via Open Collective...',
    feedback: 'Feedback via Twitter...',
    reoprtOrRequest: 'Report Issue or Request Feature...',
    website: 'Website...',
    watchGitHub: 'Watch on GitHub...',
    follow: 'Follow us on Github...',
    license: 'License...',
    update: 'Check for updates...',
    about: 'About MarkText...'
  }
}
export default en
