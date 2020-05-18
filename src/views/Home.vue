<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="swiperWrapper">
      <Swiper></Swiper>
      <InvestmentService></InvestmentService>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="recommend-header-bg">
      </div>
      <div class="recommendTip">
      </div>
      <div class="rcmd-center-wrapper">
        <img src='../../public/images/rcmd-center-bcImage.jpg' class="rcmd-center-wrapper-image">
        <p class="rcmd-center-name">7天优品Premium · 深圳科技园店</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService"
export default {
  name: "Home",
  components: {
    Swiper,
    InvestmentService
  }
};
</script>

<style lang="scss">
.home {
  font-size: 0.2rem;
}
.recommend{
  position: relative;
}
.recommend-header-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6.09rem;
    background-image: url('../../public/images/recommend-header-bg.png');
    background-size: cover;
}
.recommendTip{
  width: 1.93rem;
  height: 1.09rem;
  display: inline-block;
  z-index: 2;
  position: absolute;
  top: .58rem;
  left: 50%;
  margin-left: -0.965rem;
  background-image: url('../../public/images/recommendTip.png');
  background-size: cover;
}

.rcmd-center-wrapper{
    width: 12rem;
    height: 5.3rem;
    border-radius: .47rem;
    position: absolute;
    top: 2.19rem;
    left: 50%;
    margin-left: -6.1rem;
    z-index: 998;
    // background: url('../../public/images/recommendTip.png') no-repeat;
    background-size: contain;
    text-align: center;
    background-color: #2156AF;

    .rcmd-center-wrapper-image{
        width: 10.3rem;
        height: 3.93rem;
        background: rgba(255, 255, 255, 1) ;
        // background-image: url('../../public/images/rcmd-center-bcImage.jpg');
        border: 1px solid rgba(236, 236, 236, 1);
        border-radius: 10px;
        display: block;
        margin: .42rem auto;
        cursor: pointer;
    }
    .rcmd-center-name{
      font-size: 0.25rem;
      color: #fff;
    }
}

</style>
