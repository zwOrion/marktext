import fs from 'fs'
import path from 'path'
import { ipcMain, app } from 'electron'
import log from 'electron-log'
// import { hasSameKeys } from '../../main/utils'
import { getPath } from '../../main/utils'
import { isDirectory } from 'common/filesystem'
import Store from 'electron-store'
const PREFERENCES_FILE_NAME = 'preferences'

// const getLanguage = function () {
//   return preference.getSetting().language
// }
const store = new Store({ name: 'languageTmp' })
const getLanauage = function () {
  let userSettingBase = {}
  log.info('获取路径')
  // let argv = process.argv.slice(1)
  let storeBase = store.get('storeBase')

  let basePath = ''
  if (!storeBase) {
    log.info('基础路径', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
      log.info('路径')
      // app.setAppLogsPath('C:\\workspace\\zw\\marktext\\marktext\\logs')
      log.info('开发环境', app.getPath('userData'))
      // Don't pass electron development arguments to MarkText and change user data path.
      basePath = path.join(getPath('appData'), 'marktext-dev')
      log.info(basePath)
    }
    log.info('非基础路径')
    // Check for portable mode and ensure the user data path is absolute. We assume
    // that the path is writable if not this lead to an application crash.
    if (!basePath) {
      log.info('正式环境')
      const portablePath = path.join(app.getAppPath(), '..', '..', 'marktext-user-data')
      if (isDirectory(portablePath)) {
        basePath = portablePath
      }
    } else {
      log.info('非正式环境')
      basePath = path.resolve(basePath)
      log.info(basePath)
    }
    store.set('storeBase', basePath)
  } else {
    basePath = storeBase
  }

  let hasPreferencesFile = fs.existsSync(path.join(basePath, `./${PREFERENCES_FILE_NAME}.json`))
  let staticPath = path.join(__static, 'preference.json')
  let defaultSettings = null
  try {
    defaultSettings = JSON.parse(fs.readFileSync(staticPath, { encoding: 'utf8' }) || '{}')

    // Set best theme on first application start.
    // if (nativeTheme.shouldUseDarkColors) {
    //   defaultSettings.theme = 'dark'
    // }
  } catch (err) {
    log.error(err)
  }

  if (!defaultSettings) {
    throw new Error('Can not load static preference.json file')
  }

  // I don't know why `this.store.size` is 3 when first load, so I just check file existed.
  if (!hasPreferencesFile) {
    log.info('默认配置', defaultSettings)
    userSettingBase = defaultSettings
  } else {
    const userSetting = JSON.parse(fs.readFileSync(path.join(basePath, `./${PREFERENCES_FILE_NAME}.json`), { encoding: 'utf8' }) || '{}')
    log.info('自定义配置', userSetting)
    userSettingBase = userSetting
  }
  log.info('初始化结束')
  return userSettingBase.language
}
// 还是重启刷新吧，实时刷新，本地化内容分布在菜单栏、组件、以及后台代码中，刷新太复杂
const addLinsterSetting = function (i18n) {
  let isListen = store.get('isListen')
  log.info('监听')
  if (!isListen) {
    store.set('isListen', true)
    ipcMain.on('mt::set-user-preference-language', (e, settings) => {
      log.info('监听值', settings)
      // i18n.locale = settings.language
      // todo: 监听保存语言事件，实时修改界面内容
    })
  }
}

export { getLanauage, addLinsterSetting }
// export default PreferenceBase
