<template>
  <body>
  <div class="background">
    <form action="" class="login">
      <p>好没想好名字</p>
      <p id="warn">&nbsp;</p>
      <input type="text" v-model="userName" placeholder="用户名">
      <input type="password" v-model="userPassword" placeholder="密码">
      <br>
      <br>
      <el-button type="submit" class="btn btn1" @click="toSignUp"> 注  册 </el-button>
    </form>
  </div>
  </body>
</template>

<script>

import {signUp} from "../../api/api";

export default {
  name: "signup",
  data() {
    return {
      msg: 'null',
      userName: '',
      userPassword: ''
    }
  },
  methods: {
    async toSignUp() {
      let userInfo = {"username": this.userName, "password": this.userPassword};
      let res = await signUp(userInfo);
      console.log(res);
      if (res.result === "ok") {
        window.sessionStorage.setItem("token", res.token);
        window.sessionStorage.setItem("username", this.userName);
        alert("登陆成功")
        await this.$router.push('/login');
      } else {
        alert("登陆失败")
        console.log("failed");
      }
      // this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
*{
  user-select: none;
  /* 无法选中，整体感更强 */
}
body{
  background: #353b65 url("../../assets/img.png") no-repeat;
  background-size: 120%;
  min-height: 279px;
  margin-top: -70px;
  margin-left: -20px;
  margin-right: -25px;
  height: 850px;
  width:2000px;
}
.login{
  position: absolute;
  top: 50%;
  margin-top: -200px;
  left: 50%;
  margin-left: -200px;
  /* absolute居中的一种方法 */
  background-color: rgba(255,255,255,0.7);
  width: 400px;
  height: 400px;
  border-radius: 25px;
  text-align: center;
  padding: 5px 40px;
  box-sizing: border-box;
  /* 这样padding就不会影响大小 */
}
p{
  font-size: 42px;
  font-weight: 600;
}

input{
  background-color: rgba(0,0,0,0);
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid silver;
  /* 下面的会覆盖上面的步伐 */
  outline: none;
  font-size: 22px;
}

.btn{
  display: block;
  background-color:#3399CC ;
  width: 42%;
  height: 52px;
  border-radius: 23px;
  margin-top: 30px;
  font-size: 31px;
  color: rgba(255,255,255,0.6);
  float:left;
}
.btn1
{
  margin-left: 40px;
  margin-top: 30px;
}

.btn:hover{
  background-color:#17D3AD;
  color: rgba(255,255,255,1);
}
#warn{
  font-size: small;
  color:red;
}
</style>