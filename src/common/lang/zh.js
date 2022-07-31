// 创建文件zh.js
const zh = {
  language: {
    zh: '中文',
    en: 'English'
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
            native: 'Custom'
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
          languageInterface: '用户界面语言'
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
        root: '快捷键'
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
    follow: '关注我们',
    license: '许可证',
    update: '更新',
    about: '关于'
  }

}
export default zh
