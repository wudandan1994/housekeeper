<template>
    <div id="rate">
        <header>
            <span @click="goBack"><van-icon name="arrow-left" /></span>
            <span>我的费率</span>
            <span></span>
        </header>
        <div class="container">
            <div class="partner">
                <div class="detail">
                    <p><span><van-icon :name="headimg"/></span></p>
                    <div class="internship">
                        <p>{{nickname}}</p>
                        <p>推荐码：{{recommendedcode}}</p>
                    </div>
                </div>
            </div>
            <div class="rate-explain"> 
                <p> <span ><van-icon name="label" /></span> &nbsp;&nbsp;<span>费率说明</span></p>
                <div class="reduce"  v-show="rateyz">
                    <p v-if="level=='0'">当前收款费率：<span>{{levelpt.sd2}}</span>元/笔</p>
                    <p v-if="level=='1'">当前收款费率：<span>{{levelhj.sd2}}</span>元/笔</p>
                    <p v-if="level=='2'">当前收款费率：<span>{{levelzs.sd2}}</span>元/笔</p>
                </div>
                 <div class="reduce" v-show="ratept" >
                    <p v-if="level=='0'">当前收款费率：<span>{{levelpt.sd1}}</span>元/笔</p>
                    <p v-if="level=='1'">当前收款费率：<span>{{levelhj.sd1}}</span>元/笔</p>
                    <p v-if="level=='2'">当前收款费率：<span>{{levelzs.sd1}}</span>元/笔</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {axiosPost} from '@/lib/http'

export default {
    data() {
        return {
            nickname:"",
            recommendedcode:"",
            headimg:"",
            level:"",
            rateyz:false,
            ratept:false,
            type:"",
            rates:[],
            levelpt:{},
            levelhj:{},
            levelzs:{},
           
        }
    },
    methods:{
        goBack() {
            this.$router.go(-1)
        },
         getRate(){
           axiosPost("/content/getRate")
           .then(res=>{
            //    console.log(res,"费率")
            //    console.log(res.data.data,'feilv')
               if(res.data.success){
                   this.rates=res.data.data
                   this.rates=JSON.parse(this.rates)
                   this.levelhj=this.rates[1]
                   this.levelzs=this.rates[2]
                   this.levelpt=this.rates[0]
               } else {
                   this.$toast(res.data.message)
               }
           })
       }

    },
     created(){
         this.type=this.$route.query.type
         this.getRate()
         if(this.type=='1'){
             this.rateyz=true
             this.ratept=false
         } else if(this.type=='2'){
             this.ratept=true
             this.rateyz=false
         }
        this.nickname=this.$store.state.wechat.nickname
        this.headimg=this.$store.state.wechat.headimg
        this.recommendedcode=this.$store.state.wechat.recommendedcode
        this.level=this.$store.state.wechat.level
    }
}
</script>

<style lang="less">
  #rate {
      >header {
          height: 86px;
          line-height: 86px;
          font-size:28px;
          padding-top:10px;
          background-color:#4B66AF;
          color:#fff;
          z-index:999;
          display: flex;
          justify-content: space-between;
          padding-left:10px;
          padding-right: 10px;
      }
      >.container {
          >.partner {
              width:100%;
              height: 300px;
              background-color: #4B66AF;
              position: relative;
              box-sizing: border-box;
              >.detail {
                  width:90%;
                  position: absolute;
                  background-color: #fff;
                  top:180px;
                  left:5%;
                  border-radius: 10px;
                  box-sizing: border-box;
                  box-shadow: 0px 2px 8px 3px #ccc;
                  display: flex;
                  padding:30px;
                  > p {
                      font-size: 100px;
                      margin-top:20px;
                      .van-icon--image img {
                          border-radius: 50%;
                      }
                  }
                  >.internship {
                      margin-left:30px;
                      >p {
                          margin-top:50px;
                          &:nth-of-type(2) {
                              color:#ccc;
                              padding-bottom: 30px;
                          }
                      }
                  }
              }
          }
          >.rate-explain {
              padding-left:50px;
              >p {
                  padding-top:200px; 
                  padding-bottom: 20px;
                  >span {
                      &:nth-of-type(1) {
                          color:#F37344;
                      }
                      &:nth-of-type(2) {
                          font-weight: bolder;
                          font-size:38px;
                      }
                  }
              }
              >.reduce {
                  margin-top:30px;
                  border:3px solid #ccc;
                  margin-right: 30px;
                  padding:30px 20px;
                //   color:#C8C8C8;
                  border-radius:12px;
                  >p {
                      &:nth-of-type(2) {
                          padding-top: 20px;
                          >span {
                              color:#000;
                          }
                      }
                  }
              }
            }

      }
  }
</style>
