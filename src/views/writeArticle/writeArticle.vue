<template>
  <div>
    题目：
    <div>
      <el-input v-model="article.articleTitle" placeholder="请输入内容"></el-input>
    </div>
    <div>
      <mavon-editor v-model="article.articleContent" default-open="edit"></mavon-editor>
    </div>
    <el-button type="primary" size="small" @click="submit" icon="el-icon-upload2">发表</el-button>
  </div>
</template>

<script>
import {addArticle} from "../../api/api";

export default {
  name: "writeArticle",
  data() {
    return {
      article: {
        articleContent: "请输入文章内容",
        articleTitle: "请输入题目"
      }
    }
  },
  methods: {
    submit() {
      addArticle(this.article)
      alert("已发送!")
      this.$router.push("/articles")
    }
  }
}
</script>

<style scoped>

</style>