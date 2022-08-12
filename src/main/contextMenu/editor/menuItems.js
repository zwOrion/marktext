import i18n from '../../../common/lang/index'
// NOTE: This are mutable fields that may change at runtime.

export const CUT = {
  label: i18n.t('editor.cut'),
  id: 'cutMenuItem',
  role: 'cut'
}

export const COPY = {
  label: i18n.t('editor.copy'),
  id: 'copyMenuItem',
  role: 'copy'
}

export const PASTE = {
  label: i18n.t('editor.paste'),
  id: 'pasteMenuItem',
  role: 'paste'
}

export const COPY_AS_MARKDOWN = {
  label: i18n.t('editor.copyAsMarkdown'),
  id: 'copyAsMarkdownMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-markdown')
  }
}

export const COPY_AS_HTML = {
  label: i18n.t('editor.copyAsHtml'),
  id: 'copyAsHtmlMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-copy-as-html')
  }
}

export const PASTE_AS_PLAIN_TEXT = {
  label: i18n.t('editor.pastAsPlainText'),
  id: 'pasteAsPlainTextMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-paste-as-plain-text')
  }
}

export const INSERT_BEFORE = {
  label: i18n.t('editor.insertParagraphBefore'),
  id: 'insertParagraphBeforeMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
  }
}

export const INSERT_AFTER = {
  label: i18n.t('editor.insertParagraphAfter'),
  id: 'insertParagraphAfterMenuItem',
  click (menuItem, targetWindow) {
    targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
  }
}

export const SEPARATOR = {
  type: 'separator'
}
