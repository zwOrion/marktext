import * as actions from '../actions/edit'
import { isOsx } from '../../config'
import { COMMANDS } from '../../commands'
import i18n from '../../../common/lang/index'

export default function (keybindings) {
  return {
    label: i18n.t('edit.root'),
    submenu: [{
      label: i18n.t('edit.undo'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_UNDO),
      click: (menuItem, browserWindow) => {
        actions.editorUndo(browserWindow)
      }
    }, {
      label: i18n.t('edit.redo'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_REDO),
      click: (menuItem, browserWindow) => {
        actions.editorRedo(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.cut'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_CUT),
      click (menuItem, browserWindow) {
        actions.nativeCut(browserWindow)
      }
    }, {
      label: i18n.t('edit.copy'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY),
      click (menuItem, browserWindow) {
        actions.nativeCopy(browserWindow)
      }
    }, {
      label: i18n.t('edit.paste'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_PASTE),
      click (menuItem, browserWindow) {
        actions.nativePaste(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.copyAsMarkdown'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY_AS_MARKDOWN),
      click (menuItem, browserWindow) {
        actions.editorCopyAsMarkdown(browserWindow)
      }
    }, {
      label: i18n.t('edit.copyAsHtml'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY_AS_HTML),
      click (menuItem, browserWindow) {
        actions.editorCopyAsHtml(browserWindow)
      }
    }, {
      label: i18n.t('edit.pastePlainText'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_PASTE_AS_PLAINTEXT),
      click (menuItem, browserWindow) {
        actions.editorPasteAsPlainText(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.selectAll'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_SELECT_ALL),
      click (menuItem, browserWindow) {
        actions.editorSelectAll(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.duplicate'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_DUPLICATE),
      click (menuItem, browserWindow) {
        actions.editorDuplicate(browserWindow)
      }
    }, {
      label: i18n.t('edit.createParagraph'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_CREATE_PARAGRAPH),
      click (menuItem, browserWindow) {
        actions.editorCreateParagraph(browserWindow)
      }
    }, {
      label: i18n.t('edit.deleteParagraph'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_DELETE_PARAGRAPH),
      click (menuItem, browserWindow) {
        actions.editorDeleteParagraph(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.find'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND),
      click (menuItem, browserWindow) {
        actions.editorFind(browserWindow)
      }
    }, {
      label: i18n.t('edit.findNext'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_NEXT),
      click (menuItem, browserWindow) {
        actions.editorFindNext(browserWindow)
      }
    }, {
      label: i18n.t('edit.findPrevious'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_PREVIOUS),
      click (menuItem, browserWindow) {
        actions.editorFindPrevious(browserWindow)
      }
    }, {
      label: i18n.t('edit.replace'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_REPLACE),
      click (menuItem, browserWindow) {
        actions.editorReplace(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.findInFolder'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_IN_FOLDER),
      click (menuItem, browserWindow) {
        actions.findInFolder(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('edit.screenshot'),
      id: 'screenshot',
      visible: isOsx,
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_SCREENSHOT),
      click (menuItem, browserWindow) {
        actions.screenshot(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      // TODO: Remove this menu entry and add it to the command palette (#1408).
      label: i18n.t('edit.lineEnding.root'),
      submenu: [{
        id: 'crlfLineEndingMenuEntry',
        label: i18n.t('edit.lineEnding.crlf'),
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'crlf')
        }
      }, {
        id: 'lfLineEndingMenuEntry',
        label: i18n.t('edit.lineEnding.lf'),
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'lf')
        }
      }]
    }]
  }
}
