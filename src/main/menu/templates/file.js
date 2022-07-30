import { app } from 'electron'
import * as actions from '../actions/file'
import { userSetting } from '../actions/marktext'
import { isOsx } from '../../config'
import i18n from '../../../common/lang/index'
export default function (keybindings, userPreference, recentlyUsedFiles) {
  const { autoSave } = userPreference.getAll()
  const fileMenu = {
    label: i18n.t('file.root'),
    submenu: [{
      label: i18n.t('file.newTab'),
      accelerator: keybindings.getAccelerator('file.new-tab'),
      click (menuItem, browserWindow) {
        actions.newBlankTab(browserWindow)
      }
    }, {
      label: i18n.t('file.newWindow'),
      accelerator: keybindings.getAccelerator('file.new-window'),
      click (menuItem, browserWindow) {
        actions.newEditorWindow()
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('file.openFile'),
      accelerator: keybindings.getAccelerator('file.open-file'),
      click (menuItem, browserWindow) {
        actions.openFile(browserWindow)
      }
    }, {
      label: i18n.t('file.openFioder'),
      accelerator: keybindings.getAccelerator('file.open-folder'),
      click (menuItem, browserWindow) {
        actions.openFolder(browserWindow)
      }
    }]
  }

  if (!isOsx) {
    const recentlyUsedMenu = {
      label: i18n.t('file.openRecent.root'),
      submenu: []
    }

    for (const item of recentlyUsedFiles) {
      recentlyUsedMenu.submenu.push({
        label: item,
        click (menuItem, browserWindow) {
          actions.openFileOrFolder(browserWindow, menuItem.label)
        }
      })
    }

    recentlyUsedMenu.submenu.push({
      type: 'separator',
      visible: recentlyUsedFiles.length > 0
    }, {
      label: i18n.t('file.openRecent.clearRecently'),
      enabled: recentlyUsedFiles.length > 0,
      click (menuItem, browserWindow) {
        actions.clearRecentlyUsed()
      }
    })
    fileMenu.submenu.push(recentlyUsedMenu)
  } else {
    fileMenu.submenu.push({
      role: 'recentdocuments',
      submenu: [
        {
          role: 'clearrecentdocuments'
        }
      ]
    })
  }

  fileMenu.submenu.push({
    type: 'separator'
  }, {
    label: i18n.t('file.save'),
    accelerator: keybindings.getAccelerator('file.save'),
    click (menuItem, browserWindow) {
      actions.save(browserWindow)
    }
  }, {
    label: i18n.t('file.saveAs'),
    accelerator: keybindings.getAccelerator('file.save-as'),
    click (menuItem, browserWindow) {
      actions.saveAs(browserWindow)
    }
  }, {
    label: i18n.t('file.autosave'),
    type: 'checkbox',
    checked: autoSave,
    id: 'autoSaveMenuItem',
    click (menuItem, browserWindow) {
      actions.autoSave(menuItem, browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    label: i18n.t('file.move'),
    accelerator: keybindings.getAccelerator('file.move-file'),
    click (menuItem, browserWindow) {
      actions.moveTo(browserWindow)
    }
  }, {
    label: i18n.t('file.rename'),
    accelerator: keybindings.getAccelerator('file.rename-file'),
    click (menuItem, browserWindow) {
      actions.rename(browserWindow)
    }
  }, {
    type: 'separator'
  }, {
    label: i18n.t('file.import'),
    click (menuItem, browserWindow) {
      actions.importFile(browserWindow)
    }
  }, {
    label: i18n.t('file.export'),
    submenu: [
      {
        label: 'HTML',
        click (menuItem, browserWindow) {
          actions.exportFile(browserWindow, 'styledHtml')
        }
      }, {
        label: 'PDF',
        click (menuItem, browserWindow) {
          actions.exportFile(browserWindow, 'pdf')
        }
      }
    ]
  }, {
    label: i18n.t('file.print'),
    accelerator: keybindings.getAccelerator('file.print'),
    click (menuItem, browserWindow) {
      actions.printDocument(browserWindow)
    }
  }, {
    type: 'separator',
    visible: !isOsx
  }, {
    label: i18n.t('file.preferences.root'),
    accelerator: keybindings.getAccelerator('file.preferences'),
    visible: !isOsx,
    click () {
      userSetting()
    }
  }, {
    type: 'separator'
  }, {
    label: i18n.t('file.closeTab'),
    accelerator: keybindings.getAccelerator('file.close-tab'),
    click (menuItem, browserWindow) {
      actions.closeTab(browserWindow)
    }
  }, {
    label: i18n.t('file.closeWindow'),
    accelerator: keybindings.getAccelerator('file.close-window'),
    click (menuItem, browserWindow) {
      actions.closeWindow(browserWindow)
    }
  }, {
    type: 'separator',
    visible: !isOsx
  }, {
    label: i18n.t('file.quit'),
    accelerator: keybindings.getAccelerator('file.quit'),
    visible: !isOsx,
    click: app.quit
  })
  return fileMenu
}
