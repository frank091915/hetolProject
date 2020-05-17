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
</style>
