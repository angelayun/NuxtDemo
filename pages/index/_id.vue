<template>
  <div>
    <div>显示传入的id:{{$route.params.id}}</div>
    <pre v-if="goodInfo">{{goodInfo}}</pre>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, params, error }) {
    if (params.id) {
      // asyncData中不能使用this获取组件实例
      // 但是可以通过上下文获取相关数据
      const { data: goodInfo } = await $axios.$get('/api/detail', { params })
      if (goodInfo) {
        return { goodInfo }
      }
      error({ statusCode: 400, message: '商品详情查询失败' })
    } else {
      return { goodInfo: null }
    }
  }
}
</script>