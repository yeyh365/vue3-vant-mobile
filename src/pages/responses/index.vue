<script setup lang="ts">
import { type RouteMap, useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

const dark = ref<boolean>(isDark.value)

watch(
  () => isDark.value,
  (newMode) => {
    dark.value = newMode
  },
)
</script>

<template>
  <div class="m-x-a w-7xl text-center">
    <h2>问卷填写</h2>
  </div>
</template>

<route lang="json5">
{
  name: 'responses',
  meta: {
    i18n: 'menus.responses'
  },
}
</route>
