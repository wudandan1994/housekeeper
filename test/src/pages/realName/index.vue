<template>
    <div id="real-name">
        <header>
            <p>
                <span>
                    <van-icon name="arrow-left" />
                </span>
                <span>实名认证</span>
            </p>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" >
    #real-name {
        >header {
            background-color: #000;
            height: 46px;
            line-height:46px;
            width:100%;
            color:#fff;
            padding-left:20px;
            font-size: 30px;
            >p{
                >span {
                    &:nth-of-type(1){
                        float: left;
                        margin-top:3px;
                    }
                }
                >span {
                    &:nth-of-type(2){
                        float: left;
                        text-align: center;
                        margin-left:260px;
                    }
                }
            }
           

        }
    }
</style>
