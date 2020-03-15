 <template>
  <div>
    <h2>商品列表</h2>
    <i class="icon icon-huawei_hover"></i>
    <ul>
      <li v-for="good in goods"
          :key="good.id">
        <!-- <nuxt-link :to="`/detail/${good.id}`">
          <span>{{good.text}}</span> <span>¥{{good.price}}</span>
          <button @click.prevent="addCart(good)">加购物车</button>
        </nuxt-link> -->
        <nuxt-link :to="{name:'index-id',params:{id:good.id}}">
          <span>{{good.text}}</span> <span>¥{{good.price}}</span>
          <button @click.prevent="addCart(good)">加购物车</button>
        </nuxt-link>
      </li>
    </ul>
    <nuxt-child></nuxt-child>
  </div>
</template>
<style lang="scss">
@import '../assets/scss/spr.scss'; //引入方式
</style>
<script>
export default {
  async asyncData({ $axios, error }) {
    // 运行时间是在组件创建前，这时候this是不能用的
    const { ok, goods } = await $axios.$get('/api/goods')
    if (ok) {
      return { goods }
    }
    // 错误处理  重定向到错误页面
    error({ statusCode: 400, message: '数据查询失败' })
  },
  head() {
    return {
      title: '课程列表',
      meta: [
        { name: 'description', hid: 'description', content: 'set page meta' }
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }]
    }
  },
  data() {
    /* return {
      goods: [
        { id: 1, text: 'Web全栈架构师', price: 8999 },
        { id: 2, text: 'Python全栈架构师', price: 8999 }
      ]
    } */
  },
  methods: {
    addCart() {}
  }
}
</script>
