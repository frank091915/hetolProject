<template>
  <div class="">
    <!-- 轮播 -->
    <div class="swiperWrapper">
      <Swiper></Swiper>
      <InvestmentService></InvestmentService>
    </div>

    <div class="content">
      <div class="content-head">
        <h3 class="content-head-title">
          <span>随心所欲</span>
          <span>自由组合</span>
          <span>一键调控</span>
        </h3>
        <div class="content-head-paragraph">
          <p>
            场景面板采用OLED显示，提供多种场景选择，可以通过UIOT超级智慧家APP与场景面板双向通讯，在千里之外随心调控设备。
            <br />
            用户可以根据自身需要和生活习惯，配置相应的场景，满足高端定制需求
          </p>
        </div>
      </div>
      <!-- 图片展示区 -->
      <div class="forumImgWrapper">
        <div class="singlePic">
          <img src="../../public/images/room1.jpg" />
          <div class="hoverPic">
            <div class="hoverTitle">
              <div class="hoverTitleBox">
                <p class="singleHoverTitle hoverTitleOne">智能刷脸</p>
                <p class="singleHoverTitle hoverTitleTwo">智能刷脸</p>
              </div>
            </div>
          </div>
        </div>
        <div class="singlePic">
          <img src="../../public/images/room1.jpg" />
        </div>
        <div class="singlePic">
          <img src="../../public/images/room1.jpg" />
        </div>
        <div class="singlePic">
          <img src="../../public/images/room1.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    InvestmentService
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
<style lang="scss">
/* @import url(); 引入公共css类*/
.content-head-title {
  background-color: white;
  margin: 10px auto;
  width: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.3rem;
  }
}

.content-head-paragraph {
  p {
    font-size: 0.18rem;
    font-weight: normal;
  }
}

.forumImgWrapper {
  width: 12rem;
  height: 5.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  .singlePic {
    width: 3.86rem;
    height: 2.56rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }

    .hoverPic {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.4s;

      .hoverTitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      .hoverTitleBox {
        display: none;

        .singleHoverTitle {
          width: 100%;
          color: #d5d4d3;
          font-size: 0.18rem;
          margin: 0;
        }

        .hoverTitleOne {
          font-weight: 600;
          font-size: 0.21rem;
          margin-bottom: 0.1rem;
        }
      }
    }

    &:hover {
      .hoverPic {
        width: 100%;
        height: 100%;
        background-color: #38332d;
        opacity: 0.6;
        z-index: 99;
      }
      .hoverTitleBox {
        display: block;
      }
    }
  }
}
</style>
