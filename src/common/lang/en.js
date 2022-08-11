// 创建文件en.js
const en = {
  language: {
    zh: '中文',
    en: 'English'
  },
  export: {
    options: 'Export Options',
    info: {
      root: 'Info',
      text: 'Please customize the page appearance and click on "export" to continue.'
    },
    page: {
      root: 'Page',
      htmlDesc: 'The page title:',
      pdfSize: 'Page size:',
      aspectRatio: 'Width/Height in mm:',
      landscape: 'Landscape orientation:',
      marginDesc: 'Page margin in mm:',
      TB: 'Top/Bottom:',
      LR: 'Left/Right:',
      pageSizeList: {
        a3: 'A3 (297mm x 420mm)',
        a4: 'A4 (210mm x 297mm)',
        a5: 'A5 (148mm x 210mm)',
        usLegal: 'US Legal (8.5" x 13")',
        usLetter: 'US Letter (8.5" x 11")',
        tabloid: 'Tabloid (17" x 11")',
        custom: 'Custom'
      }
    },
    style: {
      root: 'Style',
      theme: 'Overwrite theme font settings:',
      fontFamily: 'Font family:',
      defaultFontFamily: 'Default',
      fontSize: 'Font size',
      lineHeight: 'Line height',
      autoNumHeading: 'Auto numbering headings:',
      front: 'Show front matter:'
    },
    theme: {
      root: 'Theme',
      desc: 'You can change the document appearance by choosing a theme or create a handcrafted one.',
      select: 'Theme:',
      exportThemeList: {
        academic: 'Academic',
        github: 'GitHub (Default)',
        liber: 'Liber'
      }
    },
    HF: {
      root: 'Header & Footer',
      desc: 'The text appear on all pages if header and/or footer is defined.',
      head: {
        type: 'Header type:',
        left: 'The left header text:',
        main: 'The main header text:',
        righ: 'The right header text:'
      },
      fotter: {
        type: 'Footer type:',
        left: 'The left footer text:',
        main: 'The main footer text:',
        right: 'The right footer text:'
      },
      custom: {
        root: 'Customize style:',
        styleBool: 'Allow styled header and footer:',
        fontSize: 'Header and footer font size'
      },
      headerFooterTypes: {
        none: 'None',
        single: 'Single cell',
        three: 'Three cells'
      },
      headerFooterStyles: {
        default: 'Default',
        simple: 'Simple',
        style: 'Styled'
      }
    },
    table: {
      root: 'Table of Contents',
      desc: 'Include top heading:',
      detaileDesc: 'Includes the first heading level too.',
      title: 'Title:'
    },
    exportButton: 'Export...'

  },
  remind: {
    saveFileMessage: ['Do you want to save the changes you made to ', 'file', 'files'],
    saveDetail: 'Your changes will be lost if you don\'t save them.',
    reloadFile: 'has been changed on disk. Do you want to reload it?',
    removedFile: 'has been removed on disk.',
    saveButton: 'Save',
    cancelButton: 'Cancel',
    noSaveButton: 'Don\'t save'
  },
  img: {
    embedImage: 'Embed Image',
    embedImgModeDesc: ['Paste web image or local image path. Use ', 'simple mode', 'full mode'],
    embedImgSelect: 'Select',
    embedImgLink: 'Embed link',
    chooseImgButton: 'Choose an Image',
    chooseImgDesc: 'Choose image from your computer.',
    imageTitle: 'Image title',
    altText: 'Alt text',
    imgSrc: 'Image link or local path'
  },
  sideBar: {
    newFile: 'New File',
    newDir: 'New Directory',
    copy: 'Copy',
    cut: 'Cut',
    paste: 'Paste',
    rename: 'Rename',
    move2Trash: 'Move To Trash',
    showInFolder: 'Show In Folder'
  },
  editor: {
    cut: 'Cut',
    copy: 'Copy',
    paste: 'Paste',
    copyAsMarkdown: 'Copy As Markdown',
    copyAsHtml: 'Copy As Html',
    pastAsPlainText: 'Paste as Plain Text',
    insertParagraphBefore: 'Insert Paragraph Before',
    insertParagraphAfter: 'Insert Paragraph After'
  },
  tab: {
    close: 'Close',
    closeOtherTabs: 'Close others',
    closeSavedTabs: 'Close saved tabs',
    closeAllTabs: 'Close all tabs',
    renameFile: 'Rename',
    copyPath: 'Copy path',
    showInFolder: 'Show in folder'
  },
  frontMenu: {
    duplicate: 'Duplicate',
    turnInto: 'Turn Into',
    new: 'New Paragraph',
    delete: 'Delete'
  },
  misc: {
    image: {
      edit: 'Edit Image',
      inline: 'Inline Image',
      left: 'Align Left',
      center: 'Align Middle',
      right: 'Align Right',
      delete: 'Remove Image'
    },
    untitled: 'Untitled',
    openedFiles: 'Opened files',
    openFolder: 'Open Folder',
    searchInFolder: 'Search in folder...',
    noFolder: 'No folder open',
    case: 'Case Sensitive',
    wholeWord: 'Select whole word',
    regEx: 'Use query as RegEx',
    tabOfContent: 'Table Of Contents',
    newFile: 'New File',
    count: {
      words: 'Words:',
      shortWords: 'W',
      characters: 'Characters:',
      shortChar: 'C',
      paragraphs: 'Paragraphs:',
      shortParagraphs: 'P',
      all: '(with space)character',
      shortAll: 'A'
    }
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
            native: 'Native'
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
          languageInterface: 'User interface language',
          notes: 'Requires restart.'
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
        root: 'Spelling',
        spellChecking: {
          root: 'Enable spell checking',
          hideMark4errors: 'Hide marks for spelling errors',
          detectLanguage: 'Automatically detect document language',
          defaultLanguage: 'Default language for spell checking'
        },
        description: 'The used language will be detected automatically while typing. Additional languages may be added through "Language & Region" in your system preferences pane.',
        dictionary: {
          root: 'Custom dictionary:',
          description: 'Edit words in custom dictionary.',
          empty: 'No words available',
          labelWord: 'Word',
          laelOptions: 'Options',
          buttonTitle: 'Delete'
        }
      },
      theme: {
        root: 'Theme',
        description: 'Automatically adjust application theme according to system settings',
        floder: 'Open the themes folder',
        floderButton: 'Open Folder',
        import: 'Import custom themes',
        importButton: 'Import Theme',
        autoSwitchThemeOptions: {
          startup: 'Adjust theme at startup',
          never: 'Never'
        }
      },
      image: {
        root: 'Image',
        defaultAction: 'Default action after an image is inserted from local folder or clipboard',
        tooltip: 'Clipboard handling is only fully supported on macOS and Windows.',
        upload: {
          root: 'Uploader',
          uploader: 'The current image uploader is',
          nouploader: 'Currently no uploader is selected. Please select an uploader and config it.',
          picgoWarning: ['Your system does not have', 'picgo', 'installed, please install it before use.'],
          githubWarning: 'Github will be removed in a future version, please use picgo',
          token: 'GitHub token:',
          tokenTooltip: 'The token is saved by Keychain on macOS, Secret Service API/libsecret on Linux and Credential Vault on Windows',
          tokenPlaceholder: 'Input token',
          owner: 'Owner name:',
          ownerPlaceholder: 'owner',
          repo: 'Repo name:',
          repoPlaceholder: 'repo',
          branch: 'Branch name (optional):',
          branchPlaceholder: 'branch',
          scriptDesc: 'The script will be executed with the image file path as its only argument and it should output any valid value for the <code>src</code> attribute of a <em>HTMLImageElement</em>.',
          scriptLocation: 'Shell script location:',
          scriptPlaceholder: 'Script absolute path',
          saveButton: 'Save',
          noticesCheck: ['By using ', ', you agree to ', 's', 'Privacy Statement', 'and', 'Terms of Service', 'This service cannot be used in Europe due to GDPR issues.'],
          path: {
            root: 'Global or relative image folder',
            globalDesc: 'Global image folder',
            openButton: 'Open...',
            showButton: 'Show in Folder',
            relativeDesc: 'Prefer relative assets folder',
            relativePathDesc: 'Relative image folder name',
            relativeFootnote: 'Include <code>{filename}</code> in the text-box above to automatically insert the document file name.'
          }
        },
        imageActions: {
          upload: 'Upload image to cloud using selected uploader (must be configured below)',
          floder: 'Copy image to designated relative assets or global local folder',
          path: 'Keep original location'
        }
      },
      keybindings: {
        root: 'Key Bindings',
        bindingDesc: [
          'Customize MarkText shortcuts and click on the save button below to apply all changes (requires a restart).',
          'All available and default key binding can be found ',
          'online'
        ],
        labelDesc: 'Description',
        labelKey: 'Key Combination',
        labelOptions: 'Options',
        editButton: 'Edit',
        resetButton: 'Reset',
        unbindButton: 'Unbind',
        saveButton: 'Save',
        restoreDefault: 'Restore default key bindings',
        debugOptions: 'Debug options:',
        dumpKeyboardInfo: 'Dump keyboard information',
        keysDesc: {
          mt: {
            hide: 'MarkText: Hide MarkText',
            hideOthers: 'MarkText: Hide Others'
          },
          file: {
            newWindow: 'File: New Window',
            newTab: 'File: New Tab',
            openFile: 'File: Open file',
            openFolder: 'File: Open Folder',
            save: 'File: Save',
            saveAs: 'File: Save As...',
            moveFile: 'File: Move...',
            renameFile: 'File: Rename...',
            quickOpen: 'File: Show quick open dialog',
            print: 'File: Print current Tab',
            preferences: 'MarkText: Preferences',
            closeTab: 'File: Close current Tab',
            closeWindow: 'File: Close Window',
            quit: 'MarkText: Quit',
            // ============================================
            // # Additional command descriptions
            // #
            toggleAutoSave: 'File: Toggle Auto Save',
            importFile: 'File: Import...',
            exportFile: 'File: Export...',
            zoom: 'Window: Zoom...',
            checkUpdate: 'MarkText: Check for Updates...'
          },
          edit: {
            undo: 'Edit: Undo',
            redo: 'Edit: Redo',
            cut: 'Edit: Cut',
            copy: 'Edit: Copy',
            paste: 'Edit: Paste',
            copyAsMarkdown: 'Edit: Copy as Markdown',
            copyAsHtml: 'Edit: Copy as HTML',
            pasteAsPlaintext: 'Edit: Paste as Plain Text',
            selectAll: 'Edit: Select All',
            duplicate: 'Edit: Duplicate',
            createParagraph: 'Edit: Create Paragraph',
            deleteParagraph: 'Edit: Delete Paragraph',
            find: 'Edit: Find',
            findNext: 'Edit: Find Next',
            findPrevious: 'Edit: Find Previous',
            replace: 'Edit: Replace',
            findInFolder: 'Edit: Find in Folder',
            screenshot: 'Edit: Make Screenshot'
          },
          paragraph: {
            heading1: 'Paragraph: Transform into Heading 1',
            heading2: 'Paragraph: Transform into Heading 2',
            heading3: 'Paragraph: Transform into Heading 3',
            heading4: 'Paragraph: Transform into Heading 4',
            heading5: 'Paragraph: Transform into Heading 5',
            heading6: 'Paragraph: Transform into Heading 6',
            upgradeHeading: 'Paragraph: Upgrade Heading',
            degradeHeading: 'Paragraph: Degrade Heading',
            table: 'Paragraph: Create Table',
            codeFence: 'Paragraph: Transform into Code Fence',
            quoteBlock: 'Paragraph: Transform into Quote Block',
            mathFormula: 'Paragraph: Transform into Math Formula',
            htmlBlock: 'Paragraph: Transform into HTML Block',
            orderList: 'Paragraph: Transform into Order List',
            bulletList: 'Paragraph: Transform into Bullet List',
            taskList: 'Paragraph: Transform into Task List',
            looseListItem: 'Paragraph: Convert to Loose List Item',
            paragraph: 'Paragraph: Create new Paragraph',
            horizontalLine: 'Paragraph: Insert Horizontal Line',
            frontMatter: 'Paragraph: Insert Front Matter',
            // ============================================
            // # Additional command descriptions
            // #
            resetParagraph: 'Paragraph: Transform into Paragraph'
          },
          format: {
            strong: 'Format: Strong',
            emphasis: 'Format: Emphasis',
            underline: 'Format: Underline',
            superscript: 'Format: Superscript',
            subscript: 'Format: Subscript',
            highlight: 'Format: Highlight',
            inlineCode: 'Format: Inline Code',
            inlineMath: 'Format: Inline Math',
            strike: 'Format: Strike',
            hyperlink: 'Format: Hyperlink',
            image: 'Format: Insert Image',
            clearFormat: 'Format: Clear Format'
          },
          window: {
            minimize: 'Window: Minimize',
            toggleAlwaysOnTop: 'Window: Always on Top',
            zoomIn: 'Window: Zoom In',
            zoomOut: 'Window: Zoom Out',
            toggleFullScreen: 'Window: Toggle Full Screen',
            // ============================================
            // # Additional command descriptions
            // #
            changeTheme: 'Theme: Change Theme...'
          },
          view: {
            commandPalette: 'View: Show Command Palette',
            sourceCodeMode: 'View: Toggle Source Code Mode',
            typewriterCode: 'View: Toggle Typewriter Mode',
            focusMode: 'View: Focus Mode',
            toggleSidebar: 'View: Toggle Sidebar',
            toggleToc: 'View: Toggle Table of Content',
            toggleTabbar: 'View: Toggle Tabs',
            toggleDevTools: 'View: Show Developer Tools (Debug)',
            devReload: 'View: Reload Window (Debug)',
            // ============================================
            // # Menu descriptions but not available as command
            // #

            reloadImages: 'View: Force reload images',
            // ============================================
            // # Additional command descriptions
            // #
            textDirection: 'View: Set Text Direction'
          },
          tabs: {
            cycleForward: 'Misc: Cycle Tabs Forward',
            cycleBackward: 'Misc: Cycle Tabs Backward',
            switch2left: 'Misc: Switch tab to the left',
            switch2right: 'Misc: Switch tab to the right',
            switch2first: 'Misc: Switch tab to the 1st',
            switch2second: 'Misc: Switch tab to the 2st',
            switch2third: 'Misc: Switch tab to the 3st',
            switch2fourth: 'Misc: Switch tab to the 4st',
            switch2fifth: 'Misc: Switch tab to the 5st',
            switch2sixth: 'Misc: Switch tab to the 6st',
            switch2seventh: 'Misc: Switch tab to the 7st',
            switch2eighth: 'Misc: Switch tab to the 8st',
            switch2ninth: 'Misc: Switch tab to the 9st',
            switch2tenth: 'Misc: Switch tab to the 10st'
          },
          docs: {
            // ============================================
            // # Additional command descriptions
            // #
            userGuide: 'MarkText: End User Guide',
            markdownSyntax: 'MarkText: Markdown Syntax Guide'
          }

        }
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
    root: '&View',
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
  },
  quickInsert: {
    basicBlock: {
      root: 'basic block',
      paragraph: {
        root: 'Paragraph',
        subTitle: 'Lorem Ipsum is simply dummy text'
      },
      horizontalLine: {
        root: 'Horizontal Line',
        subTitle: '---'
      },
      frontMatter: {
        root: 'Front Matter',
        subTitle: '--- Lorem Ipsum ---'
      }
    },
    header: {
      header1: {
        root: 'Header 1',
        subTitle: '# Lorem Ipsum is simply ...'
      },
      header2: {
        root: 'Header 2',
        subTitle: '## Lorem Ipsum is simply ...'
      },
      header3: {
        root: 'Header 3',
        subTitle: '### Lorem Ipsum is simply ...'
      },
      header4: {
        root: 'Header 4',
        subTitle: '#### Lorem Ipsum is simply ...'
      },
      header5: {
        root: 'Header 5',
        subTitle: '##### Lorem Ipsum is simply ...'
      },
      header6: {
        root: 'Header 6',
        subTitle: '###### Lorem Ipsum is simply ...'
      }
    },
    advancedBlock: {
      tableBlock: {
        root: 'Table Block',
        subTitle: '|Lorem | Ipsum is simply |'
      },
      displayMath: {
        root: 'Display Math',
        subTitle: '$$ Lorem Ipsum is simply $$'
      },
      hTMLBlock: {
        root: 'HTML Block',
        subTitle: '<div> Lorem Ipsum is simply </div>'
      },
      codeBlock: {
        root: 'Code Block',
        subTitle: '```java Lorem Ipsum is simply ```'
      },
      quoteBlock: {
        root: 'Quote Block',
        subTitle: '>Lorem Ipsum is simply ...'
      }
    },
    listBlock: {
      orderList: {
        root: 'Order List',
        subTitle: '1. Lorem Ipsum is simply ...'
      },
      bulletList: {
        root: 'Bullet List',
        subTitle: '- Lorem Ipsum is simply ...'
      },
      todoList: {
        root: 'To-do List',
        subTitle: '- [x] Lorem Ipsum is simply ...'
      }
    },
    diagram: {
      vegaChart: {
        root: 'Vega Chart',
        subTitle: 'Render flow chart by vega-lite.js.'
      },
      flowChart: {
        root: 'Flow Chart',
        subTitle: 'Render flow chart by flowchart.js.'
      },
      sequenceDiagram: {
        root: 'Sequence Diagram',
        subTitle: 'Render sequence diagram by js-sequence.'
      },
      plantUMLDiagram: {
        root: 'PlantUML Diagram',
        subTitle: 'Render PlantUML diagrams'
      },
      mermaid: {
        root: 'Mermaid',
        subTitle: 'Render Diagram by mermaid.'
      }
    }
  }

}
export default en
