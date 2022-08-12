import GeneralIcon from '@/assets/icons/pref_general.svg'
import EditorIcon from '@/assets/icons/pref_editor.svg'
import MarkdownIcon from '@/assets/icons/pref_markdown.svg'
import ThemeIcon from '@/assets/icons/pref_theme.svg'
import ImageIcon from '@/assets/icons/pref_image.svg'
import SpellIcon from '@/assets/icons/pref_spellcheck.svg'
import KeyBindingIcon from '@/assets/icons/pref_key_binding.svg'

import preferences from '../../../main/preferences/schema'
import i18n from '../../../common/lang/index'

export const category = [{
  name: i18n.t('file.preferences.general.root'),
  label: 'general',
  icon: GeneralIcon,
  path: '/preference/general'
}, {
  name: i18n.t('file.preferences.editor.root'),
  label: 'editor',
  icon: EditorIcon,
  path: '/preference/editor'
}, {
  name: i18n.t('file.preferences.markdown.root'),
  label: 'markdown',
  icon: MarkdownIcon,
  path: '/preference/markdown'
}, {
  name: i18n.t('file.preferences.spelling.root'),
  label: 'spelling',
  icon: SpellIcon,
  path: '/preference/spelling'
}, {
  name: i18n.t('file.preferences.theme.root'),
  label: 'theme',
  icon: ThemeIcon,
  path: '/preference/theme'
}, {
  name: i18n.t('file.preferences.image.root'),
  label: 'image',
  icon: ImageIcon,
  path: '/preference/image'
}, {
  name: i18n.t('file.preferences.keybindings.root'),
  label: 'keybindings',
  icon: KeyBindingIcon,
  path: '/preference/keybindings'
}]

export const searchContent = Object.keys(preferences).map(k => {
  const { description, enum: emums } = preferences[k]
  let [category, preference] = description.split('--')
  if (Array.isArray(emums)) {
    preference += ` optional values: ${emums.join(', ')}`
  }
  return {
    category,
    preference
  }
})
  .filter(({ category: ca }) => category.some(c => c.label === ca.toLowerCase()))
