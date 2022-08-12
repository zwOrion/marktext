import editIcon from '../../assets/pngicon/imageEdit/2.png'
import inlineIcon from '../../assets/pngicon/inline_image/2.png'
import leftIcon from '../../assets/pngicon/algin_left/2.png'
import middleIcon from '../../assets/pngicon/algin_center/2.png'
import rightIcon from '../../assets/pngicon/algin_right/2.png'
import deleteIcon from '../../assets/pngicon/image_delete/2.png'
import i18n from '../../../../common/lang/index'
const icons = [
  {
    type: 'edit',
    tooltip: i18n.t('misc.image.edit'),
    icon: editIcon
  },
  {
    type: 'inline',
    tooltip: i18n.t('misc.image.inline'),
    icon: inlineIcon
  },
  {
    type: 'left',
    tooltip: i18n.t('misc.image.left'),
    icon: leftIcon
  },
  {
    type: 'center',
    tooltip: i18n.t('misc.image.center'),
    icon: middleIcon
  },
  {
    type: 'right',
    tooltip: i18n.t('misc.image.right'),
    icon: rightIcon
  },
  {
    type: 'delete',
    tooltip: i18n.t('misc.image.delete'),
    icon: deleteIcon
  }
]

export default icons
