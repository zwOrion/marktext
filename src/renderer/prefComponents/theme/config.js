import i18n from '../../../common/lang/index'
export const themes = [
  {
    name: 'light'
  },
  {
    name: 'dark'
  },
  {
    name: 'graphite'
  },
  {
    name: 'material-dark'
  },
  {
    name: 'ulysses'
  },
  {
    name: 'one-dark'
  }
]

export const autoSwitchThemeOptions = [{
  label: i18n.t('file.preferences.theme.autoSwitchThemeOptions.startup'), // Always
  value: 0
}, /* {
  label: 'Only at runtime',
  value: 1
}, */ {
  label: i18n.t('file.preferences.theme.autoSwitchThemeOptions.never'),
  value: 2
}]
