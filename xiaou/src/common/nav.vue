<template>
  <!-- footer -->
  <footer class="footer">
    <router-link to="/home" activeClass="select">
      <a href="javascript:;">
        <span class="iconfont icon-fangzi"></span>
        <p>首页</p>
      </a>
    </router-link>
    <router-link to="/cart" activeClass="select">
      <a href="javascript:;">
        <span class="iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </a>
    </router-link>
    <router-link to="/mine" active-class="select">
      <a href="javascript:;">
        <span class="iconfont icon-wode2"></span>
        <p>我的</p>
      </a>
    </router-link>
  </footer>
</template>

<style scoped>
@import "../assets/css/footer.css";
.select p,
.select span{
  color: tomato !important;
}
</style>