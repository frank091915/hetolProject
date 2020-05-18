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
          src="../../public/images/rcmd-center-bcImage.jpg"
          class="rcmd-center-wrapper-image"
        />
        <p class="rcmd-center-name">7天优品Premium · 深圳科技园店</p>
      </div>
      <div class="picAndInstructionBlock">
        <div class="blockOne block">
          <div class="left">
            <div class="icon iconOne">
              <div class="whiteStripe"></div>
              <p class="iconDesciption">7Days</p>
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
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from "@/components/swiper";
import InvestmentService from "@/components/investmentService";
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
  }

  .blockOne {
    height: 9.46rem;
    border: 1px solid lightblue;

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
      background: url("../../public/images/block-one-rightBc.jpg");
      background-size: 100%;
    }
  }
}
</style>
