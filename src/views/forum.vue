<template>
    <div class=''>
        <!-- 轮播 -->
        <div class="swiperWrapper">
            <Swiper></Swiper>
            <InvestmentService></InvestmentService>
        </div>
        <div class="content">
            <div class="tab"  v-if="false">
                <div :class="['tabItem', activeTab == item.name ? 'activeTab' : '']" v-for='item in tabList' :key="item.name" @click="tabClick(item.name)">
                    <span>{{item.label}}</span>
                </div>
            </div>
            <div class="mainDescription" v-if="false">
                <div class="decHead">
                    <div class="text">
                        <p class="title">7天酒店</p>
                        <div class="splitLine"></div>
                        <p class="desctiption">天天睡好觉</p>
                    </div>
                    <img src="../../public/images/tab1-content-picture.png" alt="" class="content-image">
                </div>

                <div class="textDescription">
                    <p>2005年，7天酒店诞生于“让每一个人、每一天，都能有一个好梦”的梦想，秉持让消费者“天天睡好觉”的理念，15年来，7天酒店通过产品、服务的持续创新，吸引了超过1.6亿的粘性会员，成为了中国极具影响力的经济型连锁酒店品牌。</p>
                    <p>目前市面上的7天酒店坚持高性价比的产品思路，多年坚持采用优质品牌床垫、星级标准床品保证睡眠质量；双空气能热水机组+回水系统保证10秒速热的洗浴质量；以极致简约的房间布局，在精致空间内提供优质的基本服务：“洗好澡、睡好觉、上好网”。 现在，7天酒店拥有跨越国内370+个城市，国外10+个城市的2200余家门店，依托于锦江集团、铂涛集团的雄厚资源。在未来，7天品牌将继续深耕优眠体验，致力于成为全球优选的中国连锁酒店品牌。</p>
                </div>

                <div class="imageWrapper">
                    <img src="../../public/images/room1.jpg">
                    <img src="../../public/images/room2.jpg">
                    <img src="../../public/images/room3.jpg">
                </div>
            </div>
            <ArticleComponent :articles = 'articlesList' ></ArticleComponent>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService";
import ArticleComponent from "@/components/singleArticle"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Swiper,
    InvestmentService,
    ArticleComponent
},
data() {
//这里存放数据
return {
    tabList:[
        {name:'tab1',label:'7天'},
        {name:'tab2',label:'7天优品'}
    ],
    activeTab:'tab1',
    articlesList:[
        {   
            title:'28岁开个减肥贴，记录自己是怎么长这么胖的',
            main:'今天是母亲节，感谢妈妈把我生的这么好，放纵了一下，去吃了爱吃的鲍鱼鸡和腌牛肉，然后回家蒸了开锅肉丸。',
            author:'超脆',
            key:'1'
        },
        {   
            title:'28岁开个减肥贴，记录自己是怎么长这么胖的',
            main:'今天是母亲节，感谢妈妈把我生的这么好，放纵了一下，去吃了爱吃的鲍鱼鸡和腌牛肉，然后回家蒸了开锅肉丸。',
            author:'超脆的',
            key:'2'
        },
        {   
            title:'28岁开个减肥贴，记录自己是怎么长这么胖的',
            main:'今天是母亲节，感谢妈妈把我生的这么好，放纵了一下，去吃了爱吃的鲍鱼鸡和腌牛肉，然后回家蒸了开锅肉丸。',
            author:'超脆的嘞',
            key:'3'
        },
    ]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    tabClick(val){
        this.activeTab = val;
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss'>
/* @import url(); 引入公共css类*/
.tab{
    width: 11.92rem;
    margin: 0 auto;
    height: 1.06rem;
    z-index: 99;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;

    .tabItem{
        width: 50%;
        height: 100%;
        text-align: center;
        color: #6A6A6A;
        background: #F3F3F3;
        display:flex;
        flex-direction: column;
        justify-content: center;

        span{
            display: inline-block;
            font-size: 0.32rem;
            line-height: 1.06rem;
            height: 100%;
        }
    }
    .activeTab{
        background: #6A6A6A;
        color: #F3F3F3;
        text-align: center;
        
    }
}

.mainDescription{
    width: 11.92rem;
    min-height: 10rem;
    margin: 0 auto;
    background: #F3F3F3;
    box-sizing: border-box;
    padding-top: 1.25rem;

    .decHead{
        width: 11.92rem;
        margin: 0 auto;
        position: relative;
        height: 5.65rem;

        .text{
            position: absolute;
            height: 1.7rem;
            top: 0;
            left: 0.59rem;
            color: #6A6A6A;
            width: 1.6rem;

            .title{
                font-size: 0.44rem;
                font-weight: bold;
                margin:0 auto;
            }

            .splitLine{
                width: 100%;
                height: 1px;
                background: #4E4E4E;
                margin-top: 0.36rem;
                margin-bottom: 0.36rem;
            }

            .desctiption{
                font-size: 0.31rem;
            }
        }

        .content-image{
            width: 8.26rem;
            height: 5.65rem;
            float: right;
        }
    }

}

.textDescription{
    font-size: 0.21rem;
    font-family: SourceHanSansCN;
    font-weight: 400;
    margin: 0.64rem 0.6rem 0.46rem 0.6rem;
    line-height: 0.375rem;
    letter-spacing: 0.2px;

    p{
        margin-bottom: 0.3rem;
        text-align: left;
    }
} 

.imageWrapper{
    width: 100%;
    padding: 0 0.6rem;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img{
        width: 32%;
        height: 4.27rem;
        display: block;
        margin-bottom: 1.16rem;
    }
}
</style>