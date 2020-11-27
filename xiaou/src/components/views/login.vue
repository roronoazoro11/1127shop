<template>
  <div class="page">
    <!-- headCon -->
    <header class="headCon">
      <a class="arrow" href="#"></a>
      <p>登录</p>
      <a href="javascrpt:;">注册</a>
    </header>
    <div class="form" id="app">
      <form action="#">
        <input
          type="tel"
          :placeholder="tip.telTip"
          v-model="userInfo.telNum"
          @blur="checkTel"
        />
        <input
          type="password"
          :placeholder="tip.psdTip"
          v-model="userInfo.psd"
          @blur="checkPsd"
        />
        <div class="clearfix">
          <a class="fr" href="javascript:;">忘记密码</a>
        </div>
        <input type="submit" value="登陆" @click="login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        telNum: "",
        psd: "",
      },
      tip: {
        telTip: "",
        psdTip: "",
      },
    };
  },
  methods: {
    checkTel() {
      if (this.userInfo.telNum.trim() == "") {
        this.tip.telTip = "手机号为空";
      }
    },
    checkPsd() {
      if (this.userInfo.psd.trim() == "") {
        this.tip.psdTip = "密码为空";
      }
    },
    login() {
      let hasuser = JSON.parse(localStorage.getItem("userInfo"));
      if (
        hasuser.telNum == this.userInfo.telNum &&
        hasuser.psd == this.userInfo.psd
      ) {
        console.log("登录成功");
      }
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/login.css";
@import "../../assets/css/public.css";
</style>