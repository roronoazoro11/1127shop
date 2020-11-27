<template>
  <div class="page">
    <!-- 头 -->
    <header class="headCon">
      <a href="#"><img src="../../assets/images/logo.jpg" alt="logo" /></a>
      <input class="searec" type="text" placeholder="寻找商品" />
      <p class="meau">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- 导航 -->
    <nav class="nav">
      <ul>
        <li class="active"><a href="#">推荐</a></li>
        <li><a href="#">女装</a></li>
        <li><a href="#">鞋包</a></li>
        <li><a href="#">居家</a></li>
        <li><a href="#">母婴儿童</a></li>
        <li><a href="#">美食</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#">果脯</a></li>
        <li><a href="#" class="arrow"></a></li>
      </ul>
    </nav>
    <!-- banner -->
    <div class="banner">
      <a href="#"><img src="../../assets/images/banner.jpg" alt="banner" /></a>
    </div>
    <!-- icon -->
    <div class="icon">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon1.jpg" alt="icon" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon2.jpg" alt="icon" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../../assets/images/indexicon3.jpg" alt="icon" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link to="/sort">
            <a href="javascript:;">
            <img src="../../assets/images/indexicon4.jpg" alt="icon" />
            <p>商品分类</p>
          </a>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 限时抢购 -->
    <div class="limit">
      <div class="limTime">
        <h3><em></em>限时秒杀</h3>
        <p>每天零点场 好货秒不停</p>
        <div>
          <span>02</span>
          <span>16</span>
          <span>45</span>
          <span>秒杀</span>
        </div>
        <a href="#"
          ><img src="../../assets/images/shop_5.jpg" alt="shop_5" /><em
            >&yen;14.8</em
          ></a
        >
      </div>
      <div class="new">
        <div class="top">
          <div>
            <h3>新品上市<em>折</em></h3>
            <p>每日九点&nbsp;抢大牌</p>
            <img src="../../assets/images/brand.jpg" alt="brand" />
          </div>
          <div>
            <img src="../../assets/images/shop_1.jpg" alt="shop_1" />
          </div>
        </div>
        <div class="bottom">
          <div>
            <h3>每日十件</h3>
            <p>只为你选好货</p>
            <img src="../../assets/images/shop_2.jpg" alt="shop_2" />
          </div>
          <div>
            <h3>拼啊</h3>
            <p>超级好价拼团</p>
            <img src="../../assets/images/shop_3.jpg" alt="shop_3" />
          </div>
        </div>
      </div>
    </div>
    <!-- 广告 -->
    <div class="bar">
      <a href="#"><img src="../../assets/images/bar.jpg" alt="bar" /></a>
    </div>
    <!-- 推荐好货 -->
    <div class="find">
      <ul class="subnav">
        <li><a class="active" href="#">推荐好货</a></li>
        <li><a href="#">发现好货</a></li>
        <li><a href="#">只看专场</a></li>
        <li><a href="#">只看商品</a></li>
      </ul>
      <ul class="items">
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
        <li>
          <div class="left fl">
            <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          </div>
          <div class="right fl">
            <h4>雅诗兰黛染发膏60ml</h4>
            <p>&yen;123.00</p>
            <p>已售800件</p>
            <a href="#">立即抢购</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/public.css";
@import "../../assets/css/index.css";
</style>