import path from 'path'
import log from 'electron-log'
import Store from 'electron-store'
// 启动应用清除临时保存内容
log.info('清除临时文件')
const languageTmp = new Store({ name: 'languageTmp' })
languageTmp.clear()
// Set `__static` path to static files in production.
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}
