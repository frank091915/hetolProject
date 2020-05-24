<template>
  <div class="home">
    <!-- 轮播 -->
    <div class="swiperWrapper">
      <Swiper></Swiper>
      <InvestmentService></InvestmentService>
    </div>
    <!-- 推荐 -->
    <div class="recommend">
      <div class="recommend-header-bg"></div>
      <div class="recommendTip"></div>
      <div class="rcmd-center-wrapper">
        <img
          src="../../public/images/center-Bc.png"
          class="rcmd-center-wrapper-image"
        />
        <p class="rcmd-center-name">Fashare·AI智能酒店</p>
      </div>
      <div class="picAndInstructionBlock">
        <div class="blockOne block">
          <div class="left">
            <div class="icon iconOne">
              <div class="whiteStripe"></div>
              <p class="iconDesciption">Fashare</p>
            </div>
            <div class="description">
              <div class="title">
                <p class="singleTitle">所有的坚持</p>
                <p class="singleTitle">都只为一个梦</p>
              </div>
              <div class="features">
                <div class="singleFeature block-one">
                  <div class="singleFeatureIcon icon-one"></div>
                  <span class="singleFeatureOne">星级优眠床垫</span>
                </div>
                <div class="singleFeature block-one">
                  <div class="singleFeatureIcon icon-two"></div>
                  <span class="singleFeatureOne">洁净封包洗具</span>
                </div>
                <div class="singleFeature block-one">
                  <div class="singleFeatureIcon icon-three"></div>
                  <span class="singleFeatureOne">开放WIFI</span>
                </div>
                <div class="singleFeature block-one">
                  <div class="singleFeatureIcon icon-four"></div>
                  <span class="singleFeatureOne">速热10秒淋浴</span>
                </div>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
        <div class="blockTwo block">
          <div class="right"></div>
          <div class="left">
            <div class="icon iconOne">
              <div class="whiteStripe"></div>
              <div class="whiteStripe"></div>
              <p class="iconDesciption">Fashare</p>
            </div>
            <div class="description">
              <div class="title">
                <p class="singleTitle">每一次的旅程</p>
                <p class="singleTitle">留下你独特的回忆</p>
              </div>
              <div class="features">
                <div class="singleFeature block-one">
                  <span class="singleFeatureOne">智慧自助餐厅</span>
                  <!-- <div class="singleFeatureIcon icon-one"></div> -->
                </div>
                <div class="singleFeature block-one">
                  <span class="singleFeatureOne">共享健身房</span>
                  <!-- <div class="singleFeatureIcon icon-two"></div> -->
                </div>
                <div class="singleFeature block-one">
                  <span class="singleFeatureOne">豪华室内游泳池</span>
                  <!-- <div class="singleFeatureIcon icon-three"></div> -->
                </div>
                <!-- <div class="singleFeature block-one">
                  <span class="singleFeatureOne">速热10秒淋浴</span>
                  <div class="singleFeatureIcon icon-four"></div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hotelFooter></hotelFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService";
import hotelFooter from "@/components/footer";
export default {
  name: "Home",
  components: {
    Swiper,
    InvestmentService,
    hotelFooter
  }
};
</script>

<style lang="scss">
.home {
  font-size: 0.2rem;
}
.recommend {
  position: relative;
}
.recommend-header-bg {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  height: 6.09rem;
  background-image: url("../../public/images/recommend-header-bg.png");
  background-size: cover;
}
.recommendTip {
  width: 1.93rem;
  height: 1.09rem;
  display: inline-block;
  z-index: 2;
  position: absolute;
  top: 0.58rem;
  left: 50%;
  margin-left: -0.965rem;
  background-image: url("../../public/images/recommendTip.png");
  background-size: cover;
}

.rcmd-center-wrapper {
  width: 12rem;
  height: 5.3rem;
  border-radius: 0.47rem;
  position: absolute;
  top: 2.19rem;
  left: 50%;
  margin-left: -6.1rem;
  z-index: 998;
  // background: url('../../public/images/recommendTip.png') no-repeat;
  background-size: contain;
  text-align: center;
  background-color: #2156af;

  .rcmd-center-wrapper-image {
    width: 10.3rem;
    height: 3.93rem;
    background: rgba(255, 255, 255, 1);
    // background-image: url('../../public/images/rcmd-center-bcImage.jpg');
    border: 1px solid rgba(236, 236, 236, 1);
    border-radius: 10px;
    display: block;
    margin: 0.42rem auto;
    cursor: pointer;
  }
  .rcmd-center-name {
    font-size: 0.25rem;
    color: #fff;
  }
}

// 7天通用标志样式
.icon {
  width: 1.15rem;
  position: absolute;
  text-align: center;
}

.iconDesciption {
  font-size: 0.29rem;
  line-height: 0.54rem;
  font-family: SourceHanSansCN;
  font-weight: 400;
  color: #fff;
  margin-top: 0.1rem;
}

.whiteStripe {
  width: 100%;
  height: 0.29rem;
  background: #fff;
  margin-bottom: 0.1rem;
}

.singleFeature {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 0.48rem;
}

.singleFeatureIcon {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.09rem;
}

.picAndInstructionBlock {
  .block {
    position: relative;
    height: 9.46rem;
  }

  .blockOne {
    .left {
      width: 50%;
      height: 100%;
      float: left;
      box-sizing: border-box;
      background-color: #eaa39e;

      .iconOne {
        top: 0.86rem;
        left: 0.73rem;
      }

      .description {
        position: absolute;
        top: 1.68rem;
        left: 4.16rem;

        .title {
          height: 1.18rem;
          font-size: 0.42rem;
          line-height: 0.42rem;
          color: #fff;
          font-family: SourceHanSansCN;
          border-left: 0.21rem solid #fff;
          margin-bottom: 0.88rem;
          text-indent: 0.29rem;

          .singleTitle {
            text-align: left;
            margin-bottom: 0.38rem;
          }
        }

        .features {
          font-size: 0.29rem;
          color: #fff;
          font-family: SourceHanSansCN;

          .icon-one {
            background: url("../../public/images/block-one-icon-star.png");
            background-size: 100%;
          }
          .icon-two {
            background: url("../../public/images/block-one-icon-washing.png");
            background-size: 100%;
          }
          .icon-three {
            background: url("../../public/images/block-one-icon-wifi.png");
            background-size: 100%;
          }
          .icon-four {
            background: url("../../public/images/block-one-icon-shower.png");
            background-size: 100%;
          }
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      float: right;
      background: url("../../public/images/home-page-leftBc.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  .blockTwo {
    .left {
      width: 50%;
      height: 100%;
      float: right;
      box-sizing: border-box;
      background-color: #2657ad;

      .iconOne {
        top: 0.86rem;
        right: 0.62rem;
      }

      .description {
        position: absolute;
        top: 1.98rem;
        right: 4.2rem;

        .title {
          height: 1.18rem;
          font-size: 0.42rem;
          line-height: 0.42rem;
          color: #fff;
          font-family: SourceHanSansCN;
          border-right: 0.21rem solid #fff;
          margin-bottom: 0.88rem;
          text-indent: 0.29rem;

          .singleTitle {
            text-align: right;
            margin-bottom: 0.38rem;
            margin-right: 0.2rem;
          }
        }

        .features {
          font-size: 0.29rem;
          color: #fff;
          font-family: SourceHanSansCN;

          .singleFeature {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            margin-bottom: 0.48rem;
          }

          .singleFeatureIcon {
            width: 0.4rem;
            height: 0.4rem;
            margin-right: 0;
            margin-left: 0.09rem;
          }

          .icon-one {
            background: url("../../public/images/block-one-icon-star.png");
            background-size: 100%;
          }
          .icon-two {
            background: url("../../public/images/block-one-icon-washing.png");
            background-size: 100%;
          }
          .icon-three {
            background: url("../../public/images/block-one-icon-wifi.png");
            background-size: 100%;
          }
          .icon-four {
            background: url("../../public/images/block-one-icon-shower.png");
            background-size: 100%;
          }
        }
      }
    }

    .right {
      width: 50%;
      height: 100%;
      float: left;
      background: url("../../public/images/left-cilped.jpg");
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
</style>
