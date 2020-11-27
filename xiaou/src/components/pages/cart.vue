<template>
  <div class="page">
    <!-- headCon -->
    <header class="headCon">
      <go-back></go-back>
      <p>购物车</p>
      <p class="meau">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- main -->
    <div class="main">
      <ul>
        <li>
          <div class="left">
            <div><img src="../../assets/images/ture.jpg" alt="ture" /></div>
            <div>
              <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
            </div>
            <div>
              <h3>欧莱雅面霜</h3>
              <p>规格:50g</p>
              <p>&yen;123.00</p>
            </div>
          </div>
          <div class="right clearfix">
            <span>-</span><input type="text" value="1" /><span>+</span>
            <div class="delete">删除</div>
          </div>
        </li>
        <li>
          <div class="left">
            <div><img src="../../assets/images/ture.jpg" alt="ture" /></div>
            <div>
              <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
            </div>
            <div>
              <h3>欧莱雅面霜</h3>
              <p>规格:50g</p>
              <p>&yen;123.00</p>
            </div>
          </div>
          <div class="right clearfix">
            <span>-</span><input type="text" value="1" /><span>+</span>
            <div class="delete">删除</div>
          </div>
        </li>
        <li>
          <div class="left">
            <div><img src="../../assets/images/ture.jpg" alt="ture" /></div>
            <div>
              <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
            </div>
            <div>
              <h3>欧莱雅面霜</h3>
              <p>规格:50g</p>
              <p>&yen;123.00</p>
            </div>
          </div>
          <div class="right clearfix">
            <span>-</span><input type="text" value="1" /><span>+</span>
            <div class="delete">删除</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="sum">
      <div class="left">
        <img src="../../assets/images/ture.jpg" alt="arrowRight" />
        全选
      </div>
      <div class="right">
        <div>
          <h4>总计: <span>163.00</span></h4>
          <p>不含运费,已优惠&yen;0.00</p>
        </div>
        <div>
          <router-link to="/order"
            ><a href="javascript:;">去结算(2件)</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/css/cart.css";
@import "../../assets/css/public.css";
</style>