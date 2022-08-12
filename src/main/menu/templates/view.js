import * as actions from '../actions/view'
import i18n from '../../../common/lang/index'

export default function (keybindings) {
  const viewMenu = {
    label: i18n.t('view.root'),
    submenu: [{
      label: i18n.t('view.commandPalette'),
      accelerator: keybindings.getAccelerator('view.command-palette'),
      click (menuItem, focusedWindow) {
        actions.showCommandPalette(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'sourceCodeModeMenuItem',
      label: i18n.t('view.sourceCodeMode'),
      accelerator: keybindings.getAccelerator('view.source-code-mode'),
      type: 'checkbox',
      checked: false,
      click (item, focusedWindow) {
        actions.toggleSourceCodeMode(focusedWindow)
      }
    }, {
      id: 'typewriterModeMenuItem',
      label: i18n.t('view.typewriterMode'),
      accelerator: keybindings.getAccelerator('view.typewriter-mode'),
      type: 'checkbox',
      checked: false,
      click (item, focusedWindow) {
        actions.toggleTypewriterMode(focusedWindow)
      }
    }, {
      id: 'focusModeMenuItem',
      label: i18n.t('view.focusMode'),
      accelerator: keybindings.getAccelerator('view.focus-mode'),
      type: 'checkbox',
      checked: false,
      click (item, focusedWindow) {
        actions.toggleFocusMode(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('view.showSidebar'),
      id: 'sideBarMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-sidebar'),
      type: 'checkbox',
      checked: false,
      click (item, focusedWindow) {
        actions.toggleSidebar(focusedWindow)
      }
    }, {
      label: i18n.t('view.showTabBar'),
      id: 'tabBarMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-tabbar'),
      type: 'checkbox',
      checked: false,
      click (item, focusedWindow) {
        actions.toggleTabBar(focusedWindow)
      }
    }, {
      label: i18n.t('view.toggleTableContents'),
      id: 'tocMenuItem',
      accelerator: keybindings.getAccelerator('view.toggle-toc'),
      click (_, focusedWindow) {
        actions.showTableOfContents(focusedWindow)
      }
    }, {
      label: i18n.t('view.reloadImages'),
      accelerator: keybindings.getAccelerator('view.reload-images'),
      click (item, focusedWindow) {
        actions.reloadImageCache(focusedWindow)
      }
    }]
  }

  if (global.MARKTEXT_DEBUG) {
    viewMenu.submenu.push({
      type: 'separator'
    })
    viewMenu.submenu.push({
      label: i18n.t('view.developerTools'),
      accelerator: keybindings.getAccelerator('view.toggle-dev-tools'),
      click (item, win) {
        actions.debugToggleDevTools(win)
      }
    })
    viewMenu.submenu.push({
      label: i18n.t('view.reloadWindow'),
      accelerator: keybindings.getAccelerator('view.dev-reload'),
      click (item, focusedWindow) {
        actions.debugReloadWindow(focusedWindow)
      }
    })
  }

  return viewMenu
}
