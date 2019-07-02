<template>
    <div id="component_scroll">
        <div class="Odometer2 OdometerBg"></div>
    </div>
</template>
<script>
import {Odometer} from "@/lib/scroll"
export default {
    data(){
        return{
            
        }
    },
    methods:{
        handleRun(){
            var num = 231365789,num2 = 345
            var odo1 = new Odometer('.Odometer',{
                num : num
            });
            var odo2 = new Odometer('.Odometer2',{
                num : num2
            });


            //改变数值
            setInterval(()=>{
                num +=117,odo1.update(num);

                num2 +=230,odo2.update(num2);
            },1300)
        }
    },
    created(){
        this.handleRun();
    }
}
</script>
<style lang="less" scoped>
    #component_scroll{
        .OdometerBg{
            margin:40px;
            .number-animate{
                .number-animate-dom{
                     background: #222;
                     color: yellow;
                     border-left: 1px solid #fff;
                    .OdometerBg{
                        .number-animate{
                                .number-animate-dot{
                                    width: 40px;
                                }
                        }
                    }
                }
                .number-animate-dot {
                    span{  
                        background: #222;
                        color: yellow;
                        border-left: 
                        1px solid #fff;
                    }
                }
            }
        }
    }
</style>
