<template>
  <div class="articleWrapper">
    <div class="singleArticle" v-for="item in articles" :key="item.author">
      <!-- {{ +   + item.author}} -->

      <div
        :class="[
          'comment',
          selectedComment.indexOf(item.key) != -1 ? 'activeComment' : ''
        ]"
      >
        <div class="title">
          <span>{{ item.title }}</span>
          <div class="commentWrapper">
            <a-icon type="user" class="commentorIcon" />
            <div class="commentorName">{{ item.author }}</div>
          </div>
          <a-button
            class="selection"
            @click="toggle(item.key)"
            size="small"
            type="primary"
          >
            <span>{{ buttonText(item.key) }}</span>
          </a-button>
        </div>
        <div class="content">
          <div class="mainText">
            {{ item.main }}
          </div>
        </div>

        <div class="comments">
          <div class="commentBody">
            <a-list item-layout="horizontal" :data-source="data">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                >
                  <a slot="title" href="https://www.antdv.com/">{{
                    item.title
                  }}</a>
                  <a-avatar
                    slot="avatar"
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </div>

        <a-collapse
          default-active-key="1"
          @change="changeActivekey"
          v-model="activeKey"
          v-if="false"
        >
          <a-collapse-panel :key="item.key" :show-arrow="false">
            <div slot="header" class="article">
              <p class="title">
                {{ item.title }}
              </p>
              <div class="content">
                <div class="mainText">
                  {{ item.main }}
                </div>
                <div class="infomation">
                  {{ item.author }}
                </div>
              </div>
            </div>
            <p>{{ text }}</p>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];
export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    articles: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {},
  data() {
    //这里存放数据
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: [],
      selectedComment: [],
      data
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    changeActivekey(key) {
      console.log(key);
    },
    toggle(key) {
      console.log(
        key,
        "selectedComment",
        this.selectedComment,
        this.selectedComment.indexOf(key)
      );
      if (this.selectedComment.indexOf(key) == -1) {
        this.selectedComment.push(key);
      } else {
        this.selectedComment = this.selectedComment.filter(item => {
          return item != key;
        });
      }
      console.log(this.selectedComment);
    },
    buttonText(key) {
      if (this.selectedComment.indexOf(key) == -1) {
        return "展开评论";
      } else {
        return "隐藏评论";
      }
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
.articleWrapper {
  .ant-collapse {
    border: none !important;
    background-color: #fff !important;
    padding: 0.2rem 0;
  }

  .ant-collapse > .ant-collapse-item {
    border: none !important;
  }
}

.singleArticle {
  min-height: 0.5rem;
  width: 10.6rem;
  padding: 0.3rem 0;
  border: 1px solid #e6e6e6;
  border-top: none;
  margin: 0 auto;
  position: relative;
  .title {
    font-size: 0.15rem;
    color: #2d64b3;
    text-align: left;
    padding-left: 0.1rem;
    margin-bottom: 0.05rem;
    position: relative;
    font-weight: 600;

    .commentWrapper {
      font-size: 0.12rem;
      position: absolute;
      width: 0.55rem;
      top: 0;
      right: 1.8rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .commentorName {
        width: 0.4rem;
        height: 12px;
        font-size: 12px;
        line-height: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .content {
    .mainText {
      font-size: 0.16rem;
      text-align: left;
      padding-left: 0.1rem;
    }

    .infomation {
      font-size: 0.15rem;
    }
  }

  .selection {
    // opacity: 0;
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
  }

  // &:hover{
  //     .selection{
  //         display: block;
  //         opacity: 1;
  //     }
  // }
}

.comments {
  height: 0;
  transition: height 0.3s;

  .commentBody {
    display: none;
  }
}

.activeComment {
  .comments {
    height: 1.5rem;

    .commentBody {
      display: block;
      height: 1.8rem;
      overflow-y: scroll;
      border-top: 1px solid #e6e6e6;
      margin-top: 5px;
    }
  }
}
</style>
