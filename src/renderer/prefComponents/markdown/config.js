import i18n from '../../../common/lang/index'
export const bulletListMarkerOptions = [{
  label: '*',
  value: '*'
}, {
  label: '-',
  value: '-'
}, {
  label: '+',
  value: '+'
}]

export const orderListDelimiterOptions = [{
  label: '.',
  value: '.'
}, {
  label: ')',
  value: ')'
}]

export const preferHeadingStyleOptions = [{
  label: i18n.t('file.preferences.markdown.preferHeadingStyleOptions.atx'),
  value: 'atx'
}, {
  label: i18n.t('file.preferences.markdown.preferHeadingStyleOptions.setext'),
  value: 'setext'
}]

export const listIndentationOptions = [{
  label: i18n.t('file.preferences.markdown.listIndentationOptions.dfm'),
  value: 'dfm'
}, {
  label: i18n.t('file.preferences.markdown.listIndentationOptions.tab'),
  value: 'tab'
}, {
  label: i18n.t('file.preferences.markdown.listIndentationOptions.space1'),
  value: 1
}, {
  label: i18n.t('file.preferences.markdown.listIndentationOptions.space2'),
  value: 2
}, {
  label: i18n.t('file.preferences.markdown.listIndentationOptions.space3'),
  value: 3
}, {
  label: i18n.t('file.preferences.markdown.listIndentationOptions.space4'),
  value: 4
}]

export const frontmatterTypeOptions = [{
  label: 'YAML',
  value: '-'
}, {
  label: 'TOML',
  value: '+'
}, {
  label: 'JSON (;;;)',
  value: ';'
}, {
  label: 'JSON ({})',
  value: '{'
}]

export const sequenceThemeOptions = [{
  label: i18n.t('file.preferences.markdown.sequenceThemeOptions.hand'),
  value: 'hand'
}, {
  label: i18n.t('file.preferences.markdown.sequenceThemeOptions.simple'),
  value: 'simple'
}]
