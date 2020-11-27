<template>
  <div class="page">
    <!-- headCon -->
    <header class="headCon">
      <a class="arrow" href="#"></a>
      <p>注册</p>
      <a href="./register.html">登陆</a>
    </header>
    <div class="form">
      <form action="#">
        <div>
          <p>昵称:&nbsp;</p>
          <input type="text" v-model.trim="userInfo.nico" @blur="checkNico" />
        </div>
        <div>
          <p>手机号:&nbsp;</p>
          <input type="text" v-model.trim="userInfo.telNum" @blur="checkTel" />
        </div>
        <div>
          <p>密码:&nbsp;</p>
          <input type="password" v-model.trim="userInfo.psd" @blur="checkPsd" />
        </div>
        <div>
          <p>验证码:&nbsp;</p>
          <input type="text" /><a href="javascript:;">发送验证码</a>
        </div>
        <input type="submit" value="注册" @click="sub" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        nico: "",
        telNum: "",
        psd: "",
      },
    };
  },
  methods: {
    checkNico() {
      if (this.userInfo.nico == "") {
        console.log("昵称不能为空");
      }
    },
    checkTel() {
      if (this.userInfo.telNum == "") {
        console.log("电话不能为空");
      }
    },
    checkPsd() {
      if (this.userInfo.telNum == "") {
        console.log("密码不能为空");
      }
    },
    sub() {
      console.log(this.userInfo);
      localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/register.css";
@import "../../assets/css/public.css";
</style>