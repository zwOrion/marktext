import { Menu } from 'electron'
import { minimizeWindow, toggleAlwaysOnTop, toggleFullScreen } from '../actions/window'
import { zoomIn, zoomOut } from '../../windows/utils'
import { isOsx } from '../../config'
import i18n from '../../../common/lang/index'

export default function (keybindings) {
  const menu = {
    label: i18n.t('window.root'),
    role: 'window',
    submenu: [{
      label: i18n.t('window.minimize'),
      accelerator: keybindings.getAccelerator('window.minimize'),
      click (menuItem, browserWindow) {
        minimizeWindow(browserWindow)
      }
    }, {
      id: 'alwaysOnTopMenuItem',
      label: i18n.t('window.alwaysTop'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('window.toggle-always-on-top'),
      click (menuItem, browserWindow) {
        toggleAlwaysOnTop(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('window.zoomIn'),
      accelerator: keybindings.getAccelerator('window.zoom-in'),
      click (menuItem, browserWindow) {
        zoomIn(browserWindow)
      }
    }, {
      label: i18n.t('window.zoomOut'),
      accelerator: keybindings.getAccelerator('window.zoom-out'),
      click (menuItem, browserWindow) {
        zoomOut(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('window.fullScreen'),
      accelerator: keybindings.getAccelerator('window.toggle-full-screen'),
      click (item, browserWindow) {
        if (browserWindow) {
          toggleFullScreen(browserWindow)
        }
      }
    }]
  }

  if (isOsx) {
    menu.submenu.push({
      label: i18n.t('window.bringAll2Front'),
      click () {
        Menu.sendActionToFirstResponder('arrangeInFront:')
      }
    })
  }
  return menu
}
