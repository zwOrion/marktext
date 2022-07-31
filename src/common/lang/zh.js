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
          Default: '默认',
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
        root: 'Markdown'
      },
      spelling: {
        root: '拼写'
      },
      theme: {
        root: '主题'
      },
      image: {
        root: '图片'
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
