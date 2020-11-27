<template>
  <div class="page">
    <!-- headCon -->
    <header class="headCon">
      <a href="cart.htmlz"></a>
      <p>确认订单</p>
      <p class="meau">
        <span></span>
        <span></span>
        <span></span>
      </p>
    </header>
    <!-- 地址 -->
    <div class="userinfo">
      <div class="txt">
        <div>
          <p>收货人&nbsp;:&nbsp;YouSu</p>
          <p>100000000</p>
        </div>
        <div>
          <p>收货地址</p>
          <p>:&nbsp;北京市海淀区隐泉路清林苑6号楼中公优就业总3层</p>
        </div>
      </div>
      <a href="#"
        ><img src="../../assets/images/arrowRight.jpg" alt="arrowRight"
      /></a>
    </div>
    <!-- item -->
    <div class="item">
      <div>
        <div>
          <img src="../../assets/images/shop_4.jpg" alt="shop_4" />
          <div class="info">
            <p>雅诗兰黛护肤霜</p>
            <p>规格&nbsp;:&nbsp;50g</p>
          </div>
        </div>
        <p>&yen;<span>123.00</span></p>
      </div>
      <div>
        <p>购买数量:</p>
        <div><span>-</span><input type="text" value="1" /><span>+</span></div>
      </div>
      <div>
        <p>配送方式</p>
        <p>xx快递</p>
      </div>
    </div>
    <!-- 优惠 -->
    <div class="count">
      <div>
        <p>优惠券</p>
        <p>无可用</p>
      </div>
      <div>
        <p>使用积分</p>
        <div>
          <input type="text" placeholder="使用积分" />
          <a href="#">使用</a>
          <p>可使用<span>50</span> 积分</p>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <div class="countinfo">
      <p>商品金额<span>&yen;123.00</span></p>
      <p>运费<span>+&yen;0.00</span></p>
      <p>优惠券<span>-&yen;0.00</span></p>
      <p>会员优惠<span>-&yen;0.00</span></p>
      <p>积分折扣<span>-&yen;0.00</span></p>
      <div>&nbsp;实付金额&nbsp;:&nbsp;<span>&yen;123.00</span></div>
      <a href="#">提交订单</a>
    </div>
  </div>
</template> 

<style scoped>
@import "../../assets/css/orders.css";
@import "../../assets/css/public.css";
</style>