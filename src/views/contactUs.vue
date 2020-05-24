<!--  -->
<template>
  <div>
    <Swiper />
    <div class="contactMain">
      <div class="contactHeader">
        联系我们
      </div>
      <div class="content">
        <div class="header">
          联系方式
        </div>
        <p class="companyName singleParagragh">
          Fashare·AI智能酒店
        </p>
        <p class="companyAddress singleParagragh">
          地址：XXXXXXXXXXXXXXXX
        </p>
        <p class="companyAddress singleParagragh">
          联系电话：XXX-XXXXXXXX
        </p>
        <p class="companyAddress singleParagragh">
          邮 箱：XXXXXXXX@XXX.com
        </p>
        <p class="companyAddress singleParagragh">
          微信公众号：XXXXXX
        </p>
      </div>
      <div class="map">
        <baidu-map id="mapDom" center="春熙路" :zoom="16"></baidu-map>
      </div>
    </div>
    <hotelFooter />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/swiper";
import hotelFooter from "@/components/footer";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    hotelFooter
  },
  data() {
    //这里存放数据
    return {};
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
<style scoped lang="scss">
.contactMain {
  width: 12rem;
  margin: 0 auto;
  margin-top: 0.5rem;

  .contactHeader {
    font-size: 0.4rem;
    margin-bottom: 0.3rem;
    border-bottom: 1px solid #cacaca;
  }

  .content {
    text-align: left;
    margin-bottom: 0.2rem;
    .header {
      font-size: 0.22rem;
      margin-bottom: 0.1rem;
    }

    .singleParagragh {
      margin-bottom: 0.1rem;
    }
  }

  .map {
    height: 300px;

    #mapDom {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
