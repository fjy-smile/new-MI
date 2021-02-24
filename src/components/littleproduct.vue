<template>
    <div class="littleproduct" name="littleproduct">
        <a href="#">
            <div class="leftpart">
                <p class="title">{{boxtitle}}</p>
                <p class="price">{{boxprice}}</p>
                <slot name="more"></slot>
                <slot name="kinds"></slot>
            </div>
            <img  class="rightpart" :src="boximg">
        </a>        
    </div>
</template>
<style lang="scss" scoped>
    .littleproduct{
        width:234px;
        height:135px;
        margin-bottom: 10px;
        a{
            display: block;
            text-decoration: none;
            transition:all 0.1s linear 0s;
            width:234px;
            height:135px;
            background:#fff;
            .leftpart{
                margin:20px 0px auto 30px;
                font-size: 15px;
                float:left;
                width:100px;
                .title{
                    color:#000;
                    text-align: left;
                }
                .price{
                    text-align: left;
                    color:#ff7f29;
                    font-weight: bold;
                }
            }
            .rightpart{
                margin-top:20px;
                width:80px;
                height:80px;
            }
            &:hover{
                box-shadow: 0 10px 10px #f0f0f0;
                transform: translate(0,-5px);
            }
        }
    }
</style>
<script>
export default {
    name:"littleproduct",
    props:{
        boximg:String,
        boxtitle:String,
        boxprice:String
    }
}
</script>