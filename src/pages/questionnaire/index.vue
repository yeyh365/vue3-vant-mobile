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
const list = ref([])
const loading1 = ref(false)
const finished = ref(false)
const router = useRouter()

function onLoad() {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading1.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
async function login(values: any) {
  const { redirect, ...othersQuery } = router.currentRoute.value.query
  router.push({
    name: 'responses',
    query: {
      ...othersQuery,
    },
  })
}
</script>

<template>
  <div class="m-x-a w-7xl text-center">
    <van-list
      v-model:loading1="loading1"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item">
        <span>问卷列表{{ item }}</span>
        <span>
          <van-button size="mini" type="primary" @click="login">
            完成问卷
          </van-button>
        </span>
      </van-cell>
    </van-list>
  </div>
</template>

<route lang="json5">
{
  name: 'questionnaire',
  meta: {
    i18n: 'menus.questionnaire'
  },
}
</route>
