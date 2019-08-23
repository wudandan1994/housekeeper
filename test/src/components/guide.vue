<template>

  <div class="guide" @click="guideNext"  v-show="showguide">
                <div class="arr">
                    <!-- <p @click="cancelguide"><van-icon size="40px" color="rgba(0,0,0,.6)"   name="clear" /></p> -->
                    <img  @click.self="cancelguide"  src="http://pay.91dianji.com.cn/cancel.png" alt="" srcset="">
                </div>
                <div class="guide-first" v-show="shouGuideFirst">
                     <div class="arrowred">
                         <div class="arrowright">
                             <img src="http://pay.91dianji.com.cn/arrow.png" alt="" srcset="">
                         </div>
                         <div class="light">
                             <img src="http://pay.91dianji.com.cn/guideauto.png" alt="" srcset="">
                         </div>
                     </div>
                     <div class="manguide">
                         <div class="person">
                             <img src="http://pay.91dianji.com.cn/guidecollect.png" alt="" srcset="">
                         </div>
                         <div class="text">
                             <img src="http://pay.91dianji.com.cn/guideonline.png" alt="" srcset="">
                         </div>
                     </div>
                </div>
                <div class="guide-second" v-show="shouGuideSecond">
                    <div class="payment">
                        <div class="guideman">
                             <img src="http://pay.91dianji.com.cn/guidecollect.png" alt="" srcset="">
                        </div>
                        <div class="guidepay">
                             <img src="http://pay.91dianji.com.cn/guiderepay.png" alt="" srcset="">
                        </div>
                    </div>
                    <div class="pay">
                        <div class="guidekuan">
                            <img src="http://pay.91dianji.com.cn/guidekuan.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
                <div class="guide-third" v-show="shouGuideThird">
                    <div class="guidelevel">
                        <div class="guideman">
                             <img src="http://pay.91dianji.com.cn/guidecollect.png" alt="" srcset="">
                        </div>
                        <div class="guidetxt">
                             <img src="http://pay.91dianji.com.cn/guidetxt.png" alt="" srcset="">
                        </div>
                    </div>
                    <div class="guidevip">
                        <!-- <div></div>
                        <div class="circle">
                             <img src="http://pay.91dianji.com.cn/guidecircle.png" alt="" srcset="">                           
                        </div>
                        <div class="arrowleft">
                             <img src="http://pay.91dianji.com.cn/guidearrow.png" alt="" srcset="">
                        </div>
                        <div></div> -->
                        <div class="vipcir">
                             <img src="http://pay.91dianji.com.cn/guidecircle.png" alt="" srcset="">                           
                        </div>
                        <div class="arrowleft">
                             <img src="http://pay.91dianji.com.cn/guidearrow.png" alt="" srcset="">
                        </div>
                    </div>
                </div>
            </div>

</template>

<script>
export default {
    data(){
        return {
            shouGuideFirst:true,
            shouGuideSecond:false,
            shouGuideThird:false,
            showguide:false,
            guidei:1,
        }
    },
    methods: {
        cancelguide(){
           this.showguide=false
           this.guidei=1
       },
        guideNext(){
            this.guidei++
            if(this.guidei>3){
                this.showguide=false
                this.guidei=1
            } else {
                if(this.guidei==1){
                    this.shouGuideFirst=true
                    this.shouGuideSecond=false
                    this.shouGuideThird=false
                } else if(this.guidei==2){
                    this.shouGuideFirst=false
                    this.shouGuideSecond=true
                    this.shouGuideThird=false
                } else if(this.guidei==3){
                    this.shouGuideFirst=false
                    this.shouGuideSecond=false
                    this.shouGuideThird=true
                } else {
                     this.showguide=false
                     this.guidei=1
                }
            }
           
        },
      
    },
    created () {
        setTimeout(()=>{
            this.showguide=true
        },4000)
        
    }

}
</script>


<style lang="less" scoped>

   .guide {
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0, 0, 0, .4);
    z-index:8888;
    .arr {
        width:400px;
        height:400px;
        margin:left;                                                                                                                         
        img {
            width:100%;
        }
    }
    .guide-first {
        width:100%;
        height:600px;
        .arrowred {
            width:100%;
            height:300px;
            margin-top:156px;
            display:flex;
            .arrowright,
            .light {
                width:50%;
                img {
                    width:100%;
                }
            }
        }
        .manguide {
            width:100%;
            height:500px;
                display:flex;
                .person,
                .text {
                    width:50%;
                    img {
                        width:100%;
                    }
                }
        }

        
    }
    .guide-second {
        width:100;
        height:800px;
            .pay {
            width:100%;
            height:100px;
            margin-right:0;
            .guidekuan {
                width:50%;
                height:100%;
                float:right;
                img {
                    width:100%;
                }
            }
            
            }
        .payment {
            width:100%;
            height:368px;
            display:flex;
            .guideman {
                width:50%;
                img {
                    width:100%;
                }
            }
            .guidepay {
                width:50%;
                img {
                    width:100%;
                }
            }

        }
    }
    .guide-third {
        width:100%;
        height:600px;
        .guidelevel {
            width:100%;
            height:300px;
            display:flex;
            .guideman,
            .guidetxt {
                width:50%;
                img {
                    width:100%;

                }
            }
        }
        .guidevip {
            margin-top:300px;
            width:100%;
            height:300px;
            // display:flex;
            // justify-content: space-around;
            // div {
            //     width:25%;
            // }
            // img {
            //     width:100%;
            // }
            .vipcir {
              
                width:130px;
                height:130px;
                // float:left;
                // margin-top:268px;
                // margin-left:210px;
                position: fixed;
                bottom:-10px;
                left:28%;
                img {
                    width:100%;
                }
            }
            .arrowleft {
                float:right;
                width:400px;
                height:100%;
                img {
                    width:100%;
                }
            }
        }
    }
 }
</style>