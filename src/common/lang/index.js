import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './zh-CN.js'
import en from './en.js'
import { getLanauage, addLinsterSetting } from './PreferenceBase'
import log from 'electron-log'

Vue.use(VueI18n)

const local = getLanauage()
log.info('获取结果', local)
// 创建vue-i18n实例i18n
const i18n = new VueI18n({
  // 设置默认语言
  locale: local, // 语言标识
  fallbackLocale: 'en', // 回滚语言
  // 添加多语言（每一个语言标示对应一个语言文件）
  messages: {
    zhCN,
    en
  }
})
addLinsterSetting(i18n)
log.info('设置结果', i18n.locale)
// 暴露i18n
export default i18n
