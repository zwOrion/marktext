import i18n from '../../../common/lang/index'

export const pageSizeList = [
  {
    label: i18n.t('export.page.pageSizeList.a3'),
    value: 'A3'
  }, {
    label: i18n.t('export.page.pageSizeList.a4'),
    value: 'A4'
  }, {
    label: i18n.t('export.page.pageSizeList.a5'),
    value: 'A5'
  }, {
    label: i18n.t('export.page.pageSizeList.usLegal'),
    value: 'Legal'
  }, {
    label: i18n.t('export.page.pageSizeList.usLetter'),
    value: 'Letter'
  }, {
    label: i18n.t('export.page.pageSizeList.tabloid'),
    value: 'Tabloid'
  }, {
    label: i18n.t('export.page.pageSizeList.custom'),
    value: 'custom'
  }
]

export const headerFooterTypes = [
  {
    label: i18n.t('export.HF.headerFooterTypes.none'),
    value: 0
  }, {
    label: i18n.t('export.HF.headerFooterTypes.single'),
    value: 1
  }, {
    label: i18n.t('export.HF.headerFooterTypes.three'),
    value: 2
  }
]

export const headerFooterStyles = [
  {
    label: i18n.t('export.HF.headerFooterStyles.default'),
    value: 0
  }, {
    label: i18n.t('export.HF.headerFooterStyles.simple'),
    value: 1
  }, {
    label: i18n.t('export.HF.headerFooterStyles.style'),
    value: 2
  }
]

export const exportThemeList = [{
  label: i18n.t('export.theme.exportThemeList.academic'),
  value: 'academic'
}, {
  label: i18n.t('export.theme.exportThemeList.github'),
  value: 'default'
}, {
  label: i18n.t('export.theme.exportThemeList.liber'),
  value: 'liber'
}]
