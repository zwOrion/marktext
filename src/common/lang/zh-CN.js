// 创建文件zh.js
const zhCN = {
  language: {
    zh: '中文',
    en: 'English'
  },
  export: {
    options: '导出设置',
    info: {
      root: '信息',
      text: '请自定义页面外观，点击“导出"继续".'
    },
    page: {
      root: '页面',
      htmlDesc: '页面标题:',
      pdfSize: '页面大小:',
      aspectRatio: '宽 / 高 (单位: mm):',
      landscape: '横向:',
      marginDesc: '页边距(单位：mm):',
      TB: '上 / 下边距:',
      LR: '左 / 右边距:',
      pageSizeList: {
        a3: 'A3 (297mm x 420mm)',
        a4: 'A4 (210mm x 297mm)',
        a5: 'A5 (148mm x 210mm)',
        usLegal: 'US Legal (8.5" x 13")',
        usLetter: 'US Letter (8.5" x 11")',
        tabloid: 'Tabloid (17" x 11")',
        custom: '自定义'
      }
    },
    style: {
      root: '样式',
      theme: '覆盖主题字体设置:',
      fontFamily: '字体:',
      defaultFontFamily: 'Default',
      fontSize: '字号',
      lineHeight: '行高',
      autoNumHeading: '标题自动编号:',
      front: '显示前页:'
    },
    theme: {
      root: '主题',
      desc: '您可以通过选择一个主题或创建一个手工制作的主题来更改文档外观.',
      select: '主题:',
      exportThemeList: {
        academic: 'Academic',
        github: 'GitHub (默认)',
        liber: 'Liber'
      }
    },
    HF: {
      root: '页眉 & 页脚',
      desc: '如果定义了页眉、页脚，则文本将出现在所有页面上.',
      head: {
        type: '页眉类型:',
        left: '左边页眉:',
        main: '中间页眉:',
        righ: '右边页眉:'
      },
      fotter: {
        type: '页脚类型:',
        left: '左边页脚:',
        main: '中间页脚:',
        right: '右边页脚:'
      },
      custom: {
        root: '自定义样式:',
        styleBool: '允许自定义样式对页眉和页脚生效:',
        fontSize: '页眉和页脚的字体大小'
      },
      headerFooterTypes: {
        none: '无',
        single: '单栏',
        three: '三栏'
      },
      headerFooterStyles: {
        default: '默认',
        simple: '简单',
        style: '自定义样式'
      }
    },
    table: {
      root: '内容目录',
      desc: '包含顶级目录:',
      detaileDesc: '包含第一个标题等级.',
      title: '标题:'
    },
    exportButton: '导出...'

  },
  remind: {
    saveFileMessage: ['是否保存所做的更改到 ', '个文件', '个文件'],
    saveDetail: '如果不保存更改，则可能会丢失更改.',
    reloadFile: '文件已经被修改，是否重新加载?',
    removedFile: '文件已经被删除.',
    exportedSuccess: '导出成功！',
    exportedSuccessMessage: ['导出文件 ', ' 成功!'],
    saveButton: '保存',
    cancelButton: '取消',
    noSaveButton: '不保存'
  },
  img: {
    embedImage: '嵌入图片',
    embedImgModeDesc: ['粘贴互联网或者本地图片路径. 使用 ', '简洁模式', '完整模式'],
    embedImgSelect: '选择',
    embedImgLink: '嵌入地址',
    chooseImgButton: '选择一张图片',
    chooseImgDesc: '在你本地计算机上选择图片.',
    imageTitle: '图片标题',
    altText: '可选文本',
    imgSrc: '图片链接或者本地路径'
  },
  sideBar: {
    newFile: '新建文件',
    newDir: '新建文件夹',
    copy: '复制',
    cut: '剪切',
    paste: '粘贴',
    rename: '重命名',
    move2Trash: '移动到回收站',
    showInFolder: '在文件夹中显示'
  },
  editor: {
    cut: '剪切',
    copy: '复制',
    paste: '粘贴',
    copyAsMarkdown: '复制为Markdown',
    copyAsHtml: '复制为Html',
    pastAsPlainText: '粘贴为纯文本',
    insertParagraphBefore: '段前插入',
    insertParagraphAfter: '段后插入'
  },
  tab: {
    close: '关闭',
    closeOtherTabs: '关闭其他',
    closeSavedTabs: '关闭已保存',
    closeAllTabs: '关闭所有',
    renameFile: '重命名',
    copyPath: '复制路径',
    showInFolder: '在文件夹中显示'
  },
  frontMenu: {
    duplicate: '向下复制',
    turnInto: '转为..',
    new: '创建新段',
    delete: '删除'
  },
  misc: {
    image: {
      edit: '编辑图片',
      inline: '内联',
      left: '左对齐',
      center: '居中',
      right: '右对齐',
      delete: '删除'
    },
    untitled: '无标题',
    openedFiles: '打开文件',
    openFolder: '打开文件夹',
    searchInFolder: '在文件夹中查找...',
    noFolder: '没有文件夹打开',
    case: '区分大小写',
    wholeWord: '整词查找',
    regEx: '使用正则表达式',
    tabOfContent: '目录结构',
    newFile: '新建文件',
    count: {
      words: '词语:',
      shortWords: '词',
      characters: '字符:',
      shortChar: '字',
      paragraphs: '段落:',
      shortParagraphs: '段',
      all: '(包含空格) 字符:',
      shortAll: '全'
    }
  },
  file: {
    root: '文件',
    newTab: '新建标签',
    newWindow: '新建窗口',
    openFile: '打开文件...',
    openFioder: '打开文件夹...',
    openRecent: {
      root: '打开最近文件',
      clearRecently: '清除最近打开记录'
    },
    save: '保存',
    saveAs: '保存为...',
    autosave: '自动保存',
    move: '移动到...',
    rename: '重命名...',
    import: '导入...',
    export: '导出',
    print: '打印',
    preferences: {
      root: '偏好',
      autocomplete: '查找偏好',
      general: {
        root: '通用',
        autoSave: {
          root: '自动保存:',
          bool: '自动保存文档变化',
          delay: '自动保存延迟'
        },
        window: {
          root: '窗口:',
          titleBar: '标题栏样式',
          notes: '需要重启.',
          scrollbars: '隐藏滚动条',
          openFiles: '在新窗口打开文件',
          openFolder: '在新窗口打开文件夹',
          zoom: '缩放',
          titleBarStyleOptions: {
            custom: 'Custom',
            native: 'Native'
          },
          fileSortByOptions: {
            created: '创建时间',
            modified: '修改时间',
            title: '标题'
          }
        },
        sidebar: {
          root: '侧边栏:',
          wrapText: '目录文本换行',
          sort: '对文件目录进行排序'
        },
        startup: {
          root: '启动',
          defaultDirectory: '打开默认工作区',
          selectFolder: '选择文件夹',
          blankPage: '打开空白页'
        },
        misc: {
          root: '杂项',
          languageInterface: '用户界面语言',
          notes: '需要重启.'
        }
      },
      editor: {
        root: '编辑',
        textEditorSettings: {
          root: '文本编辑器设置:',
          fontSize: '字号',
          lineHeight: '行高',
          fontfamily: '字体',
          maxWidth: '文本编辑器最大宽度',
          notes: "默认设置为空，可以使用带有单位后缀的数字，其中'ch'表示字符，'px'表示像素，或'%'表示百分比。"
        },
        codeBlokSetting: {
          root: '代码块设置:',
          fontSize: '字号',
          fontfamily: '字体',
          lineNum: '显示行号',
          removeEmptyLines: '删除开头和结尾空行'
        },
        writingBehavior: {
          root: '写作行为',
          brackets: '自动补全关闭括号',
          complterSyntax: '自动补全markdown语法',
          quotationMarks: '自动关闭引号'
        },
        filerepresentation: {
          root: '文件格式:',
          tabWidth: 'tab宽度',
          lineSeparator: '行分割符号类型',
          encoding: '默认编码格式',
          detectFileEncoding: '自动检测文件编码',
          trailingNewLineChar: '对尾随换行符的处理'
        },
        misc: {
          root: '杂项:',
          textDirectioin: '文本方向',
          hint4newParagraph: '隐藏新段落插入类型提升',
          hidePopup: '隐藏鼠标在链接上时弹出框',
          autoCheck: '是否自动检查相关任务'
        },
        endOfLineOptions: {
          default: '默认',
          crlf: '回车和换行 (CRLF)',
          lf: '换行 (LF)'
        },
        trimTrailingNewlineOptions: {
          all: 'Trim all trailing',
          one: 'Ensure exactly one trailing',
          preserve: 'Preserve style of original document',
          nothing: 'Do nothing'
        },
        textDirectionOptions: {
          ltf: '从左向右',
          rtl: '从右向左'
        }
      },
      markdown: {
        root: 'Markdown',
        lists: {
          root: '列表:',
          looseList: '宽松列表',
          marker4bullet: '无序列表符号偏好',
          marker4order: '有序列表符号偏好',
          listIndentation: '列表缩进符号'
        },
        extensions: {
          root: 'Markdown扩展:',
          front: '上一页格式',
          pandocScript: '启用 pandoc 上下标',
          pandocFootnotes: '启用 pandoc 脚注',
          note: '需要重启.'
        },
        compatibility: {
          root: '兼容:',
          html: '启用 HTML 渲染',
          gitlab: '开启 GitLab 兼容模式'
        },
        diagrams: {
          root: '图:',
          sequence: '时序图主题'
        },
        misc: {
          root: '杂项:',
          heading: '首选标题样式'
        },
        preferHeadingStyleOptions: {
          atx: 'ATX 风格',
          setext: 'Setext 风格'
        },
        listIndentationOptions: {
          dfm: 'DocFX 风格',
          tab: '制表符缩进',
          space1: '一个空格',
          space2: '两个空格',
          space3: '三个空格',
          space4: '四个空格'
        },
        sequenceThemeOptions: {
          hand: '手绘风',
          simple: '简约'
        }
      },
      spelling: {
        root: '拼写',
        spellChecking: {
          root: '启用拼写检查',
          hideMark4errors: '隐藏错误标记',
          detectLanguage: '自动检查文档语言',
          defaultLanguage: '默认检查拼写语言'
        },
        description: '使用的语言将在输入时自动检测。其他语言可以通过您的系统首选项窗格中的“语言和区域”添加。',
        dictionary: {
          root: '自定义字典:',
          description: '在自定义字典中编辑单词.',
          empty: '没有可用的单词',
          labelWord: '单词',
          laelOptions: '选项',
          buttonTitle: '删除'
        }
      },
      theme: {
        root: '主题',
        description: '根据系统设置自动调整应用程序主题',
        floder: '打开主题文件夹',
        floderButton: '打开文件夹',
        import: '导入自定义主题',
        importButton: '导入主题',
        autoSwitchThemeOptions: {
          startup: '启动时调整主题',
          never: '永不'
        }
      },
      image: {
        root: '图片',
        defaultAction: '从本地文件夹或剪贴板插入图像后的默认操作',
        tooltip: '剪贴板处理仅在macOS和Windows上完全支持.',
        upload: {
          root: '上传程序',
          uploader: '当前图片上传程序为',
          nouploader: '目前没有选择上传程序。请选择一个上传程序并配置它。',
          picgoWarning: ['你的系统没有', 'picgo', '被下载, 使用前请安装.'],
          githubWarning: 'Github 将在未来的版本中被删除，请使用 picgo',
          token: 'GitHub令牌:',
          tokenTooltip: '令牌在 macOS 上通过 Keychain 保存，在 Linux 上通过 Secret Service API/libsecret 保存，在 Windows 上通过 Credential Vault 保存',
          tokenPlaceholder: '输入令牌',
          owner: '用户名称：:',
          ownerPlaceholder: '用户名',
          repo: '仓库名称:',
          repoPlaceholder: '仓库',
          branch: '分支名称 (可选):',
          branchPlaceholder: '分支',
          scriptDesc: '该脚本将以图像文件路径作为其唯一参数执行，它应该输出<em>HTML Image 元素</em>的<code>src</code>属性的任何有效值.',
          scriptLocation: 'Shell脚本的位置:',
          scriptPlaceholder: '脚本的绝对路径',
          saveButton: '保存',
          noticesCheck: ['通过使用 ', ', 你将同意 ', '的', '隐私', '和', '服务条款', '由于GDPR问题，该服务无法在欧洲使用.'],
          path: {
            root: '全局或相对图片文件夹',
            globalDesc: '全局文件夹',
            openButton: '打开...',
            showButton: '在文件夹中展示',
            relativeDesc: '优先相对文件夹',
            relativePathDesc: '相对图片文件夹名称',
            // 直接放${filename}提示Unexpected template string expression
            relativeFootnote: '在上面的文本框中包含<code>{filename}</code>，可以自动插入文档文件名.'
          }
        },
        imageActions: {
          upload: '使用选定的上传器将图像上传到云(必须在下面配置)',
          folder: '将图片复制到指定的相对路径或全局本地文件夹',
          path: '保持原始位置'
        }
      },
      keybindings: {
        root: '快捷键',
        bindingDesc: [
          '自定义MarkText快捷方式并单击下面的保存按钮以应用所有更改(需要重新启动).',
          '可以从在线地址找到所有可用的和默认的键绑定',
          '【Github地址】'
        ],
        labelDesc: '描述',
        labelKey: '组合键',
        labelOptions: '选项',
        editButton: '编辑',
        resetButton: '重置',
        unbindButton: '解除绑定',
        saveButton: '保存',
        restoreDefault: '恢复默认键绑定',
        debugOptions: '调试选项:',
        dumpKeyboardInfo: '跳转键盘信息文件',
        keysDesc: {
          mt: {
            hide: 'MarkText: 隐藏MarkText',
            hideOthers: 'MarkText: 隐藏其他'
          },
          file: {
            newWindow: '文件: 新建窗口',
            newTab: '文件: 新建标签',
            openFile: '文件: 新建文件',
            openFolder: '文件: 打开文件夹',
            save: '文件: 保存',
            saveAs: '文件: 保存为...',
            moveFile: '文件: 移动...',
            renameFile: '文件: 重命名...',
            quickOpen: '文件: 展示快捷打开文件弹框',
            print: '文件: 打印当前标签',
            preferences: 'MarkText: 偏好',
            closeTab: '文件: 关闭当前标签页',
            closeWindow: '文件: 关闭窗口',
            quit: 'MarkText: 退出',
            // ============================================
            // # Additional command descriptions
            // #
            toggleAutoSave: '文件: 切换自动保存',
            importFile: '文件: 导入...',
            exportFile: '文件: 导出...',
            zoom: '窗口: 缩放...',
            checkUpdate: 'MarkText: 检查更新...'
          },
          edit: {
            undo: '编辑: 撤销',
            redo: '编辑: 恢复',
            cut: '编辑: 剪切',
            copy: '编辑: 复制',
            paste: '编辑: 粘贴',
            copyAsMarkdown: '编辑: 复制为Markdown',
            copyAsHtml: '编辑: 复制为HTML',
            pasteAsPlaintext: '编辑: 粘贴为纯文本',
            selectAll: '编辑: 全选',
            duplicate: '编辑: 向下复制一行',
            createParagraph: '编辑: 创建段落',
            deleteParagraph: '编辑: 删除段落',
            find: '编辑: 查找',
            findNext: '编辑: 查找下一个',
            findPrevious: '编辑: 查找前一个',
            replace: '编辑: 替换',
            findInFolder: '编辑: 在文件夹中查找',
            screenshot: '编辑: 截图'
          },
          paragraph: {
            heading1: '段落: 转为标题1',
            heading2: '段落: 转为标题2',
            heading3: '段落: 转为标题3',
            heading4: '段落: 转为标题4',
            heading5: '段落: 转为标题5',
            heading6: '段落: 转为标题6',
            upgradeHeading: '段落: 升级标题',
            degradeHeading: '段落: 降级标题',
            table: '段落: 创建表格',
            codeFence: '段落: 转为代码块',
            quoteBlock: '段落: 转为引用块',
            mathFormula: '段落: 转为数学块',
            htmlBlock: '段落: 转为Html块',
            orderList: '段落: 转为有序列表',
            bulletList: '段落: 转为无序列表',
            taskList: '段落: 转为任务列表',
            looseListItem: '段落: 转为松散列表',
            paragraph: '段落: 创建新段落',
            horizontalLine: '段落: 插入水平分割线',
            frontMatter: '段落: 插入前一页',
            // ============================================
            // # Additional command descriptions
            // #
            resetParagraph: '段落: 转变成段落'
          },
          format: {
            strong: '格式: 加粗',
            emphasis: '格式: 斜体',
            underline: '格式: 下划线',
            superscript: '格式: 上标',
            subscript: '格式: 下标',
            highlight: '格式: 高亮',
            inlineCode: '格式: 行内代码',
            inlineMath: '格式: 行内数学',
            strike: '格式: 中划线',
            hyperlink: '格式: 超链接',
            image: '格式: 插入图片',
            clearFormat: '格式: 清除格式'
          },
          window: {
            minimize: '窗口: 最小化',
            toggleAlwaysOnTop: '窗口: 总是置顶',
            zoomIn: '窗口: 放大',
            zoomOut: '窗口: 缩小',
            toggleFullScreen: '窗口: 全屏显示',
            // ============================================
            // # Additional command descriptions
            // #
            changeTheme: '主题: 修改主题...'
          },
          view: {
            commandPalette: '视图: 命令面板',
            sourceCodeMode: '视图: 源码模式',
            typewriterCode: '视图: 实时预览',
            focusMode: '视图: 聚焦模式',
            toggleSidebar: '视图: 切换侧边栏',
            toggleToc: '视图: 切换目录',
            toggleTabbar: '视图: 切换标签',
            toggleDevTools: '视图: 显示开发者工具(Debug)',
            devReload: '视图: 刷新窗口 (Debug)',
            // ============================================
            // # Menu descriptions but not available as command
            // #

            reloadImages: '视图: 强制刷新图片',
            // ============================================
            // # Additional command descriptions
            // #
            textDirection: '视图: 设置文本方向'
          },
          tabs: {
            cycleForward: '杂项: 顺序切换标签',
            cycleBackward: '杂项: 逆序切换标签',
            switch2left: '杂项: 切换到左边的标签',
            switch2right: '杂项: 切换到右边的标签',
            switch2first: '杂项: 切换到第一个标签',
            switch2second: '杂项: 切换到第二个标签',
            switch2third: '杂项: 切换到第三个标签',
            switch2fourth: '杂项: 切换到第四个标签',
            switch2fifth: '杂项: 切换到第五个标签',
            switch2sixth: '杂项: 切换到第六个标签',
            switch2seventh: '杂项: 切换到第七个标签',
            switch2eighth: '杂项: 切换到第八个标签',
            switch2ninth: '杂项: 切换到第九个标签',
            switch2tenth: '杂项: 切换到第十个标签'
          },
          docs: {
            // ============================================
            // # Additional command descriptions
            // #
            userGuide: 'MarkText: 用户指南',
            markdownSyntax: 'MarkText: Markdown语法指导'
          }

        }
      }

    },
    closeTab: '关闭标签',
    closeWindow: '关闭窗口',
    quit: '退出'
  },
  edit: {
    root: '编辑',
    undo: '撤销',
    redo: '恢复',
    cut: '剪切',
    copy: '复制',
    paste: '粘贴',
    copyAsMarkdown: '复制为Markdown',
    copyAsHtml: '复制为HTML',
    pastePlainText: '粘贴为纯文本',
    selectAll: '全选',
    duplicate: '向下复制一行',
    createParagraph: '创建段落',
    deleteParagraph: '删除段落',
    find: '查找',
    findNext: '查找下一个',
    findPrevious: '查找上一个',
    replace: '替换',
    findInFolder: '文件夹中查找',
    screenshot: '截图',
    lineEnding: {
      root: '行结尾标识',
      crlf: '回车和换行 (CRLF)',
      lf: '换行 (LF)'
    }
  },
  paragraph: {
    root: '段落',
    heading1: '标题1',
    heading2: '标题2',
    heading3: '标题3',
    heading4: '标题4',
    heading5: '标题5',
    heading6: '标题6',
    promoteHeading: '升级标题',
    demoteHeading: '降级标题',
    table: '表格',
    codeFences: '代码块',
    quoteBlock: '应用块',
    mathBlock: '数学块',
    htmlBlock: 'Html块',
    orderedList: '有序列表',
    bulletList: '无序列表',
    taskList: '任务列表',
    looseListItem: '宽松列表',
    paragraph: '分段',
    horizontalRule: '水平线',
    frontMatter: '上一页'
  },
  format: {
    root: '格式',
    blod: '粗体',
    italic: '斜体',
    underline: '下划线',
    superscript: '上标',
    subscript: '下标',
    highlight: '高亮',
    inlineCode: '行内代码',
    inlineMMath: '行内数学',
    strikethrough: '删除线',
    hyperlink: '超链接',
    image: '图片',
    clearFormatting: '清除格式'
  },
  window: {
    root: '&窗口',
    minimize: '最小化',
    alwaysTop: '始终置顶',
    zoomIn: '放大',
    zoomOut: '缩小',
    fullScreen: '全屏',
    bringAll2Front: '移动所有到前面'
  },
  theme: {
    root: '主题'
  },
  view: {
    root: '视图',
    commandPalette: '命令面板',
    sourceCodeMode: '源码模式',
    typewriterMode: '实时预览',
    focusMode: '聚焦模式',
    showSidebar: '侧边栏',
    showTabBar: '标签栏',
    toggleTableContents: '目录',
    reloadImages: '刷新图片',
    developerTools: '开发工具',
    reloadWindow: '刷新窗口'
  },
  help: {
    root: '帮助',
    quickStart: '快速开始',
    markdownReference: '语法参考',
    changelog: '版本历史',
    donate: '赞助',
    feedback: '反馈',
    reoprtOrRequest: '问题或需求',
    website: '网站',
    watchGitHub: '查看GitHub',
    followGithub: '在GitHub上关注我们',
    followTwitter: '在Twitter上关注我们',
    license: '许可证',
    update: '更新',
    about: '关于'
  },
  quickInsert: {
    basicBlock: {
      root: 'basic block',
      paragraph: {
        root: '段落/Paragraph',
        subTitle: '文本段'
      },
      horizontalLine: {
        root: '水平线/Horizontal Line',
        subTitle: '---'
      },
      frontMatter: {
        root: '上一页/Front Matter',
        subTitle: '--- 内容 ---'
      }
    },
    header: {
      header1: {
        root: '标题1/Header 1',
        subTitle: '# 标题内容 ...'
      },
      header2: {
        root: '标题2/Header 2',
        subTitle: '## 标题内容 ...'
      },
      header3: {
        root: '标题3/Header 3',
        subTitle: '### 标题内容 ...'
      },
      header4: {
        root: '标题4/Header 4',
        subTitle: '#### 标题内容 ...'
      },
      header5: {
        root: '标题5/Header 5',
        subTitle: '##### 标题内容 ...'
      },
      header6: {
        root: '标题6/Header 6',
        subTitle: '###### 标题内容 ...'
      }
    },
    advancedBlock: {
      tableBlock: {
        root: '表格/Table Block',
        subTitle: '|单元格文本 | 单元格文本 |'
      },
      displayMath: {
        root: '数学块/Display Math',
        subTitle: '$$ s数学内容 $$'
      },
      hTMLBlock: {
        root: 'HTML块/HTML Block',
        subTitle: '<div> Html内容 </div>'
      },
      codeBlock: {
        root: '代码块/Code Block',
        subTitle: '```java 代码 ```'
      },
      quoteBlock: {
        root: '引用/Quote Block',
        subTitle: '>引用内容 ...'
      }
    },
    listBlock: {
      orderList: {
        root: '有序列表/Order List',
        subTitle: '1. 列表内容 ...'
      },
      bulletList: {
        root: '无需列表/Bullet List',
        subTitle: '- 列表内容 ...'
      },
      todoList: {
        root: '待办列表/To-do List',
        subTitle: '- [x] 列表内容 ...'
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
export default zhCN
