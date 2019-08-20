<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-24 16:19:10
 * @LastEditTime: 2019-08-16 11:09:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <transition name="van-fade">
    <div id="loading-components" class="center" v-if="componentload">
        <div class="out">
            <div class="fade-in">
                <div class="container_loading">
                    <div class="one common"></div>
                    <div class="two common"></div>
                    <div class="three common"></div>
                    <div class="four common"></div>
                    <div class="five common"></div>
                    <div class="six common"></div>
                    <div class="seven common"></div>
                    <div class="eight common"></div>
                </div>
            </div>
        </div>
    </div>  
  </transition> 
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        componentload:{
            type: Boolean,
            default: true
        }
    }
}
</script>
<style>
#loading-components {
    background: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
}

.container_loading {
  width: 40vw;
  height: 40vw;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;
   animation: container 5s linear infinite;
  -moz-animation: container 5s linear infinite;
  /* Firefox */
  -webkit-animation: container 5s linear infinite;
  /* Safari and Chrome */
  -o-animation: container 5s linear infinite;
  /* Opera */
}
@keyframes container {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.common {
  height: 5vw;
  max-height: 100%;
  overflow: auto;
  width: 2vw;
  margin: auto;
  max-width: 100%;
  position: absolute;
  background-color: transparent;
  border-radius: 0vw 10vw 0vw 10vw;
  box-shadow: inset 0vw 0vw 0vw .1vw #E645D0, 0vw 0vw 1.5vw 0vw #E645D0;
  border: solid 1px white;
}

.one {
  transform: rotate(45deg);
  left: 0;
  right: 0;
  top: 0;
  bottom: 7.5vw;
}

.two {
  transform: rotate(90deg);
  left: 5.5vw;
  right: 0;
  top: 0;
  bottom: 5.5vw;
}

.three {
  transform: rotate(135deg);
  left: 7.5vw;
  right: 0;
  top: 0;
  bottom: 0;
}

.four {
  transform: rotate(180deg);
  left: 5.5vw;
  right: 0;
  top: 5.5vw;
  bottom: 0;
}

.five {
  transform: rotate(225deg);
  left: 0;
  right: 0;
  top: 7.5vw;
  bottom: 0;
}

.six {
  transform: rotate(270deg);
  left: 0;
  right: 5.5vw;
  top: 5.5vw;
  bottom: 0;
}

.seven {
  transform: rotate(315deg);
  left: 0;
  right: 7.5vw;
  top: 0;
  bottom: 0;
}

.eight {
  transform: rotate(360deg);
  left: 0;
  right: 5.5vw;
  top: 0;
  bottom: 5.5vw;
}


.one {
  animation: one 1s ease infinite;
  -moz-animation: one 1s ease infinite;
  /* Firefox */
  -webkit-animation: one 1s ease infinite;
  /* Safari and Chrome */
  -o-animation: one 1s ease infinite;
  /* Opera */
}

@keyframes one {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.two {
  animation: two 1s .125s ease infinite;
  -moz-animation: two 1s .125s ease infinite;
  /* Firefox */
  -webkit-animation: two 1s .125s ease infinite;
  /* Safari and Chrome */
  -o-animation: two 1s .125s ease infinite;
  /* Opera */
}

@keyframes two {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.three {
  animation: three 1s .25s ease infinite;
  -moz-animation: three 1s .25s ease infinite;
  /* Firefox */
  -webkit-animation: three 1s .25s ease infinite;
  /* Safari and Chrome */
  -o-animation: three 1s .25s ease infinite;
  /* Opera */
}

@keyframes three {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.four {
  animation: four 1s .375s ease infinite;
  -moz-animation: four 1s .375s ease infinite;
  /* Firefox */
  -webkit-animation: four 1s .375s ease infinite;
  /* Safari and Chrome */
  -o-animation: four 1s .375s ease infinite;
  /* Opera */
}

@keyframes four {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.five {
  animation: five 1s .5s ease infinite;
  -moz-animation: five 1s .5s ease infinite;
  /* Firefox */
  -webkit-animation: five 1s .5s ease infinite;
  /* Safari and Chrome */
  -o-animation: five 1s .5s ease infinite;
  /* Opera */
}

@keyframes five {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.six {
  animation: six 1s .625s ease infinite;
  -moz-animation: six 1s .625s ease infinite;
  /* Firefox */
  -webkit-animation: six 1s .625s ease infinite;
  /* Safari and Chrome */
  -o-animation: six 1s .625s ease infinite;
  /* Opera */
}

@keyframes six {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.seven {
  animation: seven 1s .750s ease infinite;
  -moz-animation: seven 1s .750s ease infinite;
  /* Firefox */
  -webkit-animation: seven 1s .750s ease infinite;
  /* Safari and Chrome */
  -o-animation: seven 1s .750s ease infinite;
  /* Opera */
}

@keyframes seven {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

.eight {
  animation: eight 1s .875s ease infinite;
  -moz-animation: eight 1s .875s ease infinite;
  /* Firefox */
  -webkit-animation: eight 1s .875s ease infinite;
  /* Safari and Chrome */
  -o-animation: eight 1s .875s ease infinite;
  /* Opera */
}

@keyframes eight {
  0%,
  100% {}
  50% {
    background: #4b66af;
    box-shadow: inset 0vw 0vw 0vw .1vw #17E1E6, 0vw 0vw 1.5vw 0vw #17E1E6;
  }
}

/* .container {
  animation: container 5s linear infinite;
  -moz-animation: container 5s linear infinite;
  -webkit-animation: container 5s linear infinite;
  -o-animation: container 5s linear infinite;
} */

/* @keyframes container {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
} */


.fade-in {
  animation: fade-in 2s ease;
  -moz-animation: fade-in 2s ease;
  /* Firefox */
  -webkit-animation: fade-in 2s ease;
  /* Safari and Chrome */
  -o-animation: fade-in 2s ease;
  /* Opera */
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.out {
  animation: out 2s 15s ease;
  -moz-animation: out 2s 15s ease;
  /* Firefox */
  -webkit-animation: out 2s 15s ease;
  /* Safari and Chrome */
  -o-animation: out 2s 15s ease;
  /* Opera */
}

@keyframes out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
