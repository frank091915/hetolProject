<!--  -->
<template>
  <div id="swiperWrapper">
    <el-carousel height="635px" direction="vertical" :autoplay="true">
      <el-carousel-item
        v-for="item in swiperData"
        :key="item.key"
        :class="item.className"
      >
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      swiperData: [
        { key: 1, className: "homeSwiperFirst" },
        { key: 2, className: "homeSwiperSecond" },
        { key: 3, className: "homeSwiperThird" }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss">
/* @import url(); 引入公共css类*/
#swiperWrapper {
  width: 100%;

  .el-carousel__item {
    height: 635px;
    background-size: 100% 100%;
  }
  .homeSwiperFirst {
    background-image: url("../assets/swiperHomeOne.jpg");
  }
  .homeSwiperSecond {
    background-image: url("../assets/swiperHomeSecond.jpg");
  }
  .homeSwiperThird {
    background-image: url("../assets/swiperHomeThird.jpg");
  }
}
#test {
  height: 200px;
  background-image: url("../assets/swiperHomeOne.jpg");
}
</style>
