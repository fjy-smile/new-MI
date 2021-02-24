<template>
    <div class="box" name="box">
        <a href="#">
  			<div class="figure"><img :src="boxUrl"></div>
  			<h4 class="title">{{boxTitle}}</h4>
  			<p class="desc">{{boxDesc}}</p>
            <div class="price-discount">
  			    <span class="price">{{boxPrice}}&nbsp;&nbsp;</span>
                <slot name="discount"></slot>
            </div>
  		</a>
    </div>
</template>

<style lang="scss" scoped>
.box{
    height:280px;
    width:234px;
    a{
        display: block;
        float:left;
        height: 280px;
        width: 234px;
        text-decoration: none;
        transition:all 0.1s linear 0s;
        background:#fff;
        .figure{
            height: 160px;
            width: 160px;
            margin:auto;
        }
        .title{
            font-weight: normal;
            text-align: center;
            color: #000;
            margin-bottom: 0px;
        }
        .desc{
            color:#b0b0b0;
            font-size: 12px;
            text-align: center;
        }
        .price-discount{
            margin:auto;
            .price{
                color: #ff6700;
                text-align: center;
                font-size: 14px;
                font-weight: bold;
            }
        }
    }
    a:hover{
        box-shadow:0 10px 10px #f0f0f0;
        transform: translate(0,-5px);
    }
}

</style>

<script>
export default {
    name:"box",
    data(){
        return{}
    },
    props:{
        boxUrl:String,
        boxTitle:String,
        boxDesc:String,
        boxPrice:String,
        boxDiscount:String
    }
}
</script>