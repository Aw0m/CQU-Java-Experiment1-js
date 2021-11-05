<template>
  <div>
    <el-container>
      <el-header>
        欢迎，{{userName}} <br><br>
        <el-button @click="backHome">Back Home</el-button>
        <el-button @click="layout">退出</el-button>
      </el-header>
      <el-main>

        <el-card class="box-card" style="width: 1000px" v-for="(article, index) in articlesData" v-bind:key="index">
          <template #header>
            <div class="card-header">
              <span>{{article.articleTitle}}</span>
            </div>
          </template>
          <div class="text-item">
            <div class="article-text">
              {{article.articleContent}}<br>
            </div>
          </div>
          <span>
            <br>
            <el-divider></el-divider>
          {{article.createTime}}
          </span>
        </el-card>
      </el-main>

    </el-container>
  </div>
</template>

<script>
import {showAllArticle} from "../../api/api";

export default {
  name: "articles",
  data() {
    return {
      userName: window.localStorage.getItem("username"),
      articlesData: [{
        articleTitle: '',
        articleContent: '',
        createTime: ''
      }]
    }
  },
  methods: {
    // getUserName() {
    //   this.userName
    // },
    layout() {
      window.localStorage.setItem("token", "");
      alert("退出登陆");
      this.$router.push('/login')
    },
    backHome() {
      this.$router.push('/home')
    },
    showAllArticleHelp() {
      showAllArticle().then((myData) => {
        console.log("show all article(print my data");
        console.log(myData);
        if (myData === "") {
          this.$router.push('/login');
          alert("请先登陆")
        }
        this.articlesData = myData
        console.log("start");
        console.log(this.articlesData);
      });
    }
  },
  created() {
    this.showAllArticleHelp();
  }
}
</script>

<style scoped>


.card-header {
  font-size:18px;
  font-family: "Microsoft YaHei", Arial,sans-serif;
  font-weight: bold;
}

.box-card {
  width: 480px;
  font-size:18px;
  font-family: "Microsoft YaHei", Arial,sans-serif;
  font-weight: bold;
  text-align: center;
  left: 0;
  right:0;
  margin: auto;
}

</style>