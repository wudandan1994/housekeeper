-<template>
    <div id="switch_component">
        <div class="switch">
            <div v-for="(item,index) in options" :key="index" class="title" :class="item.id == '0' ? 'end-center' : 'start-center'">
                <div class="check" :class="item.checked ? 'checked' : ''" @click="changeChecked(item)">{{item.title}}</div>
            </div>
            <div class="date" @click="handleCheckDate"><van-icon name="calender-o" size="32px" color="#666"/></div>
        </div>
        <transition name="van-fade">
            <div class="datePicker_container center" v-if="showDate" v-on:click.self="showDate = false">
                <div class="datePicker">
                    <div class="title start-center">请选择统计时间：{{date[0]}}-{{date[1]}}</div>
                    <Calendar @choseDay="clickDay" @changeMonth="changeDate"></Calendar>
                </div>
            </div>
        </transition>
    </div>    
</template>
<script>
import Calendar from 'vue-calendar-component';
export default {
    data(){
        return{
            showDate: false,
            start: '',
            end: '',
            watch: '0',
            date: [],
        }
    },
    components: {
        Calendar
    },
    props: {
        options: {
            type: Array,
            default: () =>{}
        }
    },
    methods:{
        changeChecked(obj){
            // console.log('传递参数',obj);
            this.$emit('changeChecked',obj);
        },
        clickDay(date) {
            (this.date).push(date);
            this.date = (this.date).slice(-2);
            // console.log('所选择的时间',this.date);
            if((this.watch)%2 != '0'){
                setTimeout(() =>{
                    this.showDate = false;
                    this.date = [];
                },800);
            }
            this.watch = parseInt(this.watch + 1);
            // 时间排序
            var newArray = (this.date).sort((a,b) =>{
                return Date.parse(a) - Date.parse(b);
            });
            this.date = newArray;
            if(newArray.length == '2'){
                this.$emit('changeTime',{
                    startdate: newArray[0],
                    enddate: newArray[1],
                })
            }
        },
        changeDate(data) {
            // console.log(data); //左右点击切换月份
        },
        clickToday(data) {
            // console.log(data); //跳到了本月
        },
        handleCheckDate(){
            this.showDate = true;
        }
    },
    watch: {
        watch(newVal,oldVal){
            // console.log(newVal,oldVal);
        }
    }
}
</script>
<style lang="less">
    #switch_component{
        position: relative;
        z-index: 2;
        .switch{
            width: 100%;
            height: 100px;
            border-bottom: solid 1px #f2f2f2;
            display: flex;
            display: -webkit-flex;
            justify-content: space-between;
            -webkit-justify-content: space-between;
            align-items: center;
            -webkit-align-items: center;
            position: relative;
            z-index: 1;
            .title{
                width: 45%;
                height: 100%;
                // border: solid 1px red;
                font-size: 32px;
                font-weight: 700;
                .check{
                    font-size: 32px;
                    font-weight: 700;
                    padding: 15px;
                }
                .checked{
                    color: #4b66af;
                    border-bottom: solid 4px #4b66af;
                }
            }
            .date{
                position: absolute;
                right: 40px;
                z-index: 2;
            }
        }
        .datePicker_container{
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            position: fixed;
            left: 0%;
            top: 0%;
            z-index: 4;
            .datePicker{
                width: 80%;
                height: auto;
                margin-left: auto;
                margin-right: auto;
                .title{
                    width: calc(100% - 2px);
                    height: 60px;
                    padding-left: 2px;
                    font-size: 28px;
                    background: #f2f2f2;
                }
            }
        }
    }
</style>
