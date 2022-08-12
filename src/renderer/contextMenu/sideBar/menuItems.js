import * as contextMenu from './actions'
import i18n from '../../../common/lang/index'
// NOTE: This are mutable fields that may change at runtime.

export const SEPARATOR = {
  type: 'separator'
}

export const NEW_FILE = {
  label: i18n.t('sideBar.newFile'),
  id: 'newFileMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newFile()
  }
}

export const NEW_DIRECTORY = {
  label: i18n.t('sideBar.newDir'),
  id: 'newDirectoryMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.newDirectory()
  }
}

export const COPY = {
  label: i18n.t('sideBar.copy'),
  id: 'copyMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.copy()
  }
}

export const CUT = {
  label: i18n.t('sideBar.cut'),
  id: 'cutMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.cut()
  }
}

export const PASTE = {
  label: i18n.t('sideBar.paste'),
  id: 'pasteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.paste()
  }
}

export const RENAME = {
  label: i18n.t('sideBar.rename'),
  id: 'renameMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.rename()
  }
}

export const DELETE = {
  label: i18n.t('sideBar.move2Trash'),
  id: 'deleteMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.remove()
  }
}

export const SHOW_IN_FOLDER = {
  label: i18n.t('sideBar.showInFolder'),
  id: 'showInFolderMenuItem',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder()
  }
}
