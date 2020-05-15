<template>
  <div class="home">
    首页
    <div class="swiperWrapper">
      <Swiper></Swiper>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/swiper'
export default {
  name: "Home",
  components:{
    Swiper
  }
};
</script>

<style lang="scss">
.home {
  font-size: 0.20rem;
}
</style>
