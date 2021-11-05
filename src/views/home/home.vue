<template>
 <div>
   <el-button type="submit" class="btn" @click="toWrite"> 写文章 </el-button>
   <el-button type="submit" class="btn" @click="toArticle"> 看文章 </el-button>
 </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    toWrite() {
      this.$router.push('/writeArticle')
    },
    toArticle() {
      this.$router.push("/articles")
    }
  }
}
</script>

<style scoped>

</style>