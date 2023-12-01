<script>
import { mapState, mapActions } from 'pinia'
import counter from '../stores/counter'
export default {
  data() {
    return {
      prism: null
    }
  },
  methods: {
    showSignup() {
      // const prism = document.querySelector(".rec-prism")
      this.prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
    },
    showLogin() {
      this.prism.style.transform = "translateZ(-100px)";
    },
    showForgotPassword() {
      this.prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
    },
    showSubscribe() {
      this.prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
    },
    showContactUs() {
      this.prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
    },
    showThankYou() {
      this.prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
    },
    ...mapActions(counter, ["setLocation"])
  },
  mounted() {
    this.setLocation(1)
    this.prism = document.querySelector(".rec-prism");
  }
}

</script>

<template>
  <ul class="nav">
    <li @click="showLogin()">Icon</li>
    <li @click="showSignup()">項目經歷</li>
    <li @click="showForgotPassword()">獲獎經歷</li>
    <li @click="showContactUs()">簡介</li>
    <li @click="showSubscribe()">About me</li>
  </ul>
  <div class="wrapper">
    <div class="rec-prism">
      <div class="face face-top">
        <div class="content">
          <h2>關於我</h2>
          <small>About me</small>

          <div class="field-wrapper">
            姓名 : 劉芊孜
          </div>
          <div class="field-wrapper">
            年齡 ： 23
          </div>
          <div class="field-wrapper">
            生日 ： 2000 / 08 / 10
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>終わり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-front">
        <div class="content">
          <h2>頭像</h2>
          <small>Head portrait</small>

          <div class="field-wrapper tc head">
            <img src="../../GOODS-04345412-removebg-preview.png" alt="头像">
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>終わり</span></a>
          </div>
          <span class="psw" @click="showForgotPassword()">獲獎經歷</span>
          <span class="signup" @click="showSignup()">項目經歷</span>
        </div>
      </div>
      <div class="face face-back">
        <div class="content">
          <h2>獲獎經歷</h2>
          <small>Award-winning experience</small>
          <div class="field-wrapper">
            无獲獎經歷。
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>終わり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-right">
        <div class="content">
          <h2>項目經歷</h2>
          <small>Project experience</small>

          <div class="field-wrapper">
            ‘XXXXXX’
          </div>
          <div class="field-wrapper">
            ‘XXXXXXXXXXXXXXXXX’
          </div>
          <div class="field-wrapper">
            ‘XXXXXXXXXXXXXXXXXXXXX’
          </div>
          <div class="field-wrapper">
            ‘********************’
          </div>
          <div class="field-wrapper">
            ‘XXXXXXXXXXXXXXXXXXXXXX’
          </div>
          <div class="field-wrapper">
            ...
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>終わり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-left">
        <div class="content">
          <h2>簡介</h2>
          <small>Brief introduction</small>

          <div class="field-wrapper">
            在校有两年项目实战经验，培养了较强的独立分析及解决问题的能力，养成了良好而规范的编程习惯，在团队协作中建立起了良好的团队沟通协作能力及服务意识，逻辑思维缜密，执行力及抗压能力强。
          </div>
          <div class="field-wrapper">
            本人热爱运动，在校期间，担任篮球院队队长，带领队伍取得校运动会第三名的成绩。
          </div>
          <div class="field-wrapper">
            <a class="btn-7" href="#" @click="showThankYou()"><span>終わり</span></a>
          </div>
        </div>
      </div>
      <div class="face face-bottom">
        <div class="content">
          <div class="thank-you-msg">
            Thank you!
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
* {
  box-sizing: border-box;

  -webkit-touch-callout: none;
  /* iOS Safari */

  -webkit-user-select: none;
  /* Chrome/Safari/Opera */
  /* Konqueror */

  -moz-user-select: none;
  /* Firefox */

  -ms-user-select: none;
  /* Internet Explorer/Edge */

  user-select: none;
  /* Non-prefixed version, currently not supported by any browser */
}

html {
  height: 100%;
}

body {
  width: 100%;
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  font-size: 14px;
  background: #f6fffd;
  margin: 0;
  text-align: center;
  overflow: auto;
}

.face .content {
  color: #666;
}

.face .content h2 {
  font-size: 1.2em;
  color: rgb(92, 69, 40);
}

.face .content .field-wrapper {
  margin-top: 30px;
  position: relative;
}

.face .content .field-wrapper label {
  position: absolute;
  pointer-events: none;
  font-size: 0.85em;
  top: 40%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  transition: all ease-in 0.25s;
  color: #999999;
}

.face .content .field-wrapper textarea {
  resize: none;
  line-height: 1em;
}

.face .content .field-wrapper textarea:focus+label,
.face .content .field-wrapper textarea:not(:placeholder-shown)+label {
  top: -25%;
}

.face .thank-you-msg {
  position: absolute;
  width: 80%;
  height: 130px;
  text-align: center;
  font-size: 2em;
  color: rgb(237, 214, 214);
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
}

.face .thank-you-msg:after {
  position: absolute;
  content: '';
  width: 50px;
  height: 25px;
  border: 10px solid rgb(237, 214, 214);
  border-right: 0;
  border-top: 0;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(0deg) scale(0);
  transform: translate(-50%, -50%) rotate(0deg) scale(0);
  -webkit-animation: success ease-in 0.15s forwards;
  animation: success ease-in 0.15s forwards;
  -webkit-animation-delay: 2.5s;
  animation-delay: 2.5s;
}


.nav {
  margin: 0 0 20px 36%;
  padding: 0;
  padding-top: 30px;

}

.nav li {
  display: inline-block;
  list-style-type: none;
  font-size: 25px;
  margin: 0 10px;
  color: #8d6d52;
  position: relative;
  cursor: pointer;
}

.nav li:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20px;
  border-bottom: 1px solid #8d6d52;
  transition: all ease-in 0.25s;
}

.nav li:hover:after {
  width: 100%;
}

.psw,
.signup,
.singin {
  display: block;
  margin: 20px 0;
  font-size: 0.75em;
  text-align: center;
  color: #8d6d52;
  cursor: pointer;
}

small {
  font-size: 0.7em;
}

@-webkit-keyframes success {
  from {
    -webkit-transform: translate(-50%, -50%) rotate(0) scale(0);
  }

  to {
    -webkit-transform: translate(-50%, -50%) rotate(-45deg) scale(1);
  }
}


.tc {
  text-align: center;
}

.tc img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: all .2s cubic-bezier(0, 0.97, 0.77, 1.34) .1s;

  -webkit-animation: circle 5s linear infinite;
  animation: circle 5s linear infinite;
}

@-webkit-keyframes circle {


  0% {
    opacity: .5;
  }


  50% {
    opacity: 1;
  }

  100% {
    opacity: .5;
  }


}

@keyframes circle {

  0% {
    opacity: .5;
  }


  50% {
    opacity: 1;
  }

  100% {
    opacity: .5;
  }


}

html *,
html *:before,
html *:after {
  box-sizing: border-box;
  transition: 0.5s;
}

html i,
html em,
html b,
html strong,
html span {
  transition: none;
}

*:before,
*:after {
  z-index: -1;
}

a {
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  color: black;
}

[class^="btn-"] {
  position: relative;
  display: block;
  margin: 20px auto;
  width: 100%;
  height: 30px;
  max-width: 250px;
  text-transform: uppercase;
  overflow: hidden;
  border: 1px solid currentColor;
}

.btn-7 {
  color: rgb(237, 214, 214);
  height: 40px;
  border-radius: 5px;
}

.btn-7:before,
.btn-7:after,
.btn-7 span:before,
.btn-7 span:after {
  content: '';
  position: absolute;
  top: 0;
  width: 63.5px;
  height: 0;
  background: rgb(237, 214, 214);
}

.btn-7:before {
  left: 0;
}

.btn-7:after {
  left: 125px;
}

.btn-7 span:before,
.btn-7 span:after {
  top: auto;
  bottom: 0;
}

.btn-7 span:before {
  left: 62.5px;
}

.btn-7 span:after {
  left: 187.5px;
}

.btn-7:hover {
  color: #fff;
}

.btn-7:hover:before,
.btn-7:hover:after,
.btn-7:hover span:before,
.btn-7:hover span:after {
  height: 80px;
}

.btn-7:active {
  background: rgb(92, 69, 40);
}

@-webkit-keyframes put {
  0% {
    -webkit-transform: scale(.1, .1);
    transform: scale(.1, .1);
  }

  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

@keyframes put {
  0% {
    -webkit-transform: scale(.1, .1);
    transform: scale(.1, .1);
  }

  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }
}

.wrapper {
  width: 350px;
  height: 500px;
  margin: 60px auto;
  /* 设置路径 */
  -webkit-perspective: 600px;
  perspective: 600px;
  text-align: left;

  -webkit-animation: put 1s cubic-bezier(0.29, 1.18, 0.91, 1.68) 1;

  animation: put 1s cubic-bezier(0.29, 1.18, 0.91, 1.68) 1;
}


.rec-prism {
  width: 100%;
  height: 100%;
  position: absolute;
  /* 设置3D场景*/
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: translateZ(-100px);
  transform: translateZ(-100px);
  transition: -webkit-transform 0.5s ease-in;
  transition: transform 0.5s ease-in;
  transition: transform 0.5s ease-in, -webkit-transform 0.5s ease-in;
}

.face {
  position: absolute;
  width: 350px;
  height: 500px;
  padding: 20px;
  background: rgba(250, 250, 250, .88);
  border: 3px solid rgb(237, 214, 214);
  border-radius: 3px;
  /*每一面的背面是否可以见*/
  backface-visibility: hidden;
}

/* 正面 */
.face-front {
  -webkit-transform: rotateY(0deg) translateZ(175px);
  transform: rotateY(0deg) translateZ(175px);
}

/* 上面 */
.face-top {
  height: 350px;
  -webkit-transform: rotateX(90deg) translateZ(175px);
  transform: rotateX(90deg) translateZ(175px);
}

/* 背面 */
.face-back {
  -webkit-transform: rotateY(180deg) translateZ(175px);
  transform: rotateY(180deg) translateZ(175px);
}

/* 右面 */
.face-right {
  -webkit-transform: rotateY(90deg) translateZ(175px);
  transform: rotateY(90deg) translateZ(175px);
}

/* 左面 */
.face-left {
  -webkit-transform: rotateY(-90deg) translateZ(175px);
  transform: rotateY(-90deg) translateZ(175px);
}

/* 底面 */
.face-bottom {
  height: 350px;
  -webkit-transform: rotateX(-90deg) translateZ(325px);
  transform: rotateX(-90deg) translateZ(325px);
}
</style>
