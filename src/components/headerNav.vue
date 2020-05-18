<template>
  <div class="navHeaderWrapper">
    <div id="mainNav">
      <div id="loge"></div>
      <div id="menuWrapper">
        <div
          :class="[
            'singleMenu',
            currentPath == item.path ? 'currentSelectedPath' : ''
          ]"
          v-for="item in menuList"
          :key="item.path"
          @click="navigate(item.path)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
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
      menuList: [
        { title: "首页", path: "home" },
        { title: "酒店论坛", path: "forum" },
        { title: "联系我们", path: "contact" },
        { title: "身份证上传", path: "IDCard" },
        { title: "ai视觉解决方案", path: "solution" }
      ],
      currentPath: "home"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    navigate(path) {
      console.log(path);
      this.currentPath = path;
    }
  },
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
.navHeaderWrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2020;
  background-color: #fff;
  #mainNav {
    height: 0.9rem;
    line-height: 0.9rem;
    width: 11rem;
    margin: 0 auto;
    font-size: 0.19rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.12rem;
    #loge {
      width: 1.5rem;
      height: 0.74rem;
      background: url("../../public/images/hotelLogo.png");
      background-size: 100% 100%;
    }

    #menuWrapper {
      display: inline-flex;
      min-width: 6rem;
      height: 100%;
    }

    #menuWrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

    .singleMenu {
      display: flex;
      height: 100%;
      color: #4e4e4e;
      cursor: pointer;
      line-height: 1.1rem;
      padding: 0 0.1rem;
    }

    .currentSelectedPath {
      background: #0b1762;
      color: white;
      position: relative;
    }
    .currentSelectedPath::before {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      width: calc(100% - 0.2rem);
      margin: 0 auto;
      background-color: #ffe017;
      top: 0.3rem;
      left: 0.1rem;
    }
  }
}
</style>
