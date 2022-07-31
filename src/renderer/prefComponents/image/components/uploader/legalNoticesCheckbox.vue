<template>
  <div class="pref-cb-legal-notices">
    <el-checkbox v-model="uploaderService.agreedToLegalNotices"></el-checkbox>
    <span>
      {{ $t('file.preferences.image.upload.noticesCheck[0]') }} {{ uploaderService.name }}{{ $t('file.preferences.image.upload.noticesCheck[1]') }} {{ uploaderService.name }}{{ $t('file.preferences.image.upload.noticesCheck[2]') }}
      <span class="link" @click="openUrl(uploaderService.privacyUrl)">{{ $t('file.preferences.image.upload.noticesCheck[3]') }}</span>
      {{ $t('file.preferences.image.upload.noticesCheck[4]') }}
      <span class="link" @click="openUrl(uploaderService.tosUrl)">{{ $t('file.preferences.image.upload.noticesCheck[5]') }}</span>.
      <span v-if="!uploaderService.isGdprCompliant">{{ $t('file.preferences.image.upload.noticesCheck[6]') }}</span>
    </span>
  </div>
</template>

<script>
import { shell } from 'electron'

export default {
  data () {
    return {}
  },
  props: {
    uploaderService: Object
  },
  methods: {
    openUrl (link) {
      if (link) {
        shell.openExternal(link)
      }
    }
  }
}
</script>

<style>
.pref-cb-legal-notices {
  border: 1px solid transparent;
  padding: 3px 5px;
  & .el-checkbox {
    margin-right: 0;
  }
}
</style>
