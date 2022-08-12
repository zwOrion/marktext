import i18n from 'common/lang'
import * as contextMenu from './actions'

// NOTE: This are mutable fields that may change at runtime.

export const SEPARATOR = {
  type: 'separator'
}

export const CLOSE_THIS = {
  label: i18n.t('tab.close'),
  id: 'closeThisTab',
  click (menuItem, browserWindow) {
    contextMenu.closeThis(menuItem._tabId)
  }
}

export const CLOSE_OTHERS = {
  label: i18n.t('tab.closeOtherTabs'),
  id: 'closeOtherTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeOthers(menuItem._tabId)
  }
}

export const CLOSE_SAVED = {
  label: i18n.t('tab.closeSavedTabs'),
  id: 'closeSavedTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeSaved()
  }
}

export const CLOSE_ALL = {
  label: i18n.t('tab.closeAllTabs'),
  id: 'closeAllTabs',
  click (menuItem, browserWindow) {
    contextMenu.closeAll()
  }
}

export const RENAME = {
  label: i18n.t('tab.renameFile'),
  id: 'renameFile',
  click (menuItem, browserWindow) {
    contextMenu.rename(menuItem._tabId)
  }
}

export const COPY_PATH = {
  label: i18n.t('tab.copyPath'),
  id: 'copyPath',
  click (menuItem, browserWindow) {
    contextMenu.copyPath(menuItem._tabId)
  }
}

export const SHOW_IN_FOLDER = {
  label: i18n.t('tab.showInFolder'),
  id: 'showInFolder',
  click (menuItem, browserWindow) {
    contextMenu.showInFolder(menuItem._tabId)
  }
}
