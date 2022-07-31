import { ENCODING_NAME_MAP } from 'common/encoding'
import i18n from '../../../common/lang/index'
export const tabSizeOptions = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}]

export const endOfLineOptions = [{
  label: i18n.t('file.preferences.editor.endOfLineOptions.default'),
  value: 'default'
}, {
  label: i18n.t('file.preferences.editor.endOfLineOptions.crlf'),
  value: 'crlf'
}, {
  label: i18n.t('file.preferences.editor.endOfLineOptions.lf'),
  value: 'lf'
}]

export const trimTrailingNewlineOptions = [{
  label: i18n.t('file.preferences.editor.trimTrailingNewlineOptions.all'),
  value: 0
}, {
  label: i18n.t('file.preferences.editor.trimTrailingNewlineOptions.one'),
  value: 1
}, {
  label: i18n.t('file.preferences.editor.trimTrailingNewlineOptions.preserve'),
  value: 2
}, {
  label: i18n.t('file.preferences.editor.trimTrailingNewlineOptions.nothing'),
  value: 3
}]

export const textDirectionOptions = [{
  label: i18n.t('file.preferences.editor.textDirectionOptions.ltf'),
  value: 'ltr'
}, {
  label: i18n.t('file.preferences.editor.textDirectionOptions.rtl'),
  value: 'rtl'
}]

let defaultEncodingOptions = null
export const getDefaultEncodingOptions = () => {
  if (defaultEncodingOptions) {
    return defaultEncodingOptions
  }

  defaultEncodingOptions = []
  for (const [value, label] of Object.entries(ENCODING_NAME_MAP)) {
    defaultEncodingOptions.push({ label, value })
  }
  return defaultEncodingOptions
}
