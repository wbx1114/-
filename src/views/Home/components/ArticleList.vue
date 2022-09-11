<template>
  <div>
    <ArticleItem
      v-for="item in articles"
      :key="item.art_id"
      :article="item"
    ></ArticleItem>
  </div>
</template>

<script>
import { getNewsAPI } from '@/api'
import ArticleItem from './ArticleItem.vue'
export default {
  components: {
    ArticleItem
  },
  props: {
    id: [String, Number]
  },
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.getFirstNews()
  },
  methods: {
    async getFirstNews() {
      try {
        const { data } = await getNewsAPI(this.id, +new Date())
        // console.log(data.data.results)
        this.articles = data.data.results
      } catch (error) {
        const status = error.response?.status
        if (error.response || status === 507) {
          throw error
        } else {
          if (status === 400) {
            throw new Error(error.response.data.message)
          }
        }
      }
    }
  }
}
</script>

<style></style>
