<template>
    <div name="homeMain" class="homeMain">
        <div class="box-hd">
  			<p class="phonetitle">家电</p>
  			<div class="more">
                <span class="more-hot" id="more-hot" @mouseover="choseMore(hot_tv=1)">热门</span>
                <span class="more-tv" id="more-tv" @mouseover="choseMore(hot_tv=2)">电视影音</span>
            </div>
  		</div>
        <div class="box-bd">
            <div class="leftimg">
                <div class="leftopict"><a href="#"></a></div>
                <div class="lefbotpict"><a href="#"></a></div>
            </div>
            <div class="rightpict">
                <ul class="outerBox">
                    <li class="innerBox" v-for="site in household" :key="site.index">
                        <product v-if="site.index<7" class="product" :boxUrl = "site.img" 
                        :boxTitle="site.name" :boxDesc="site.desc" :boxPrice="site.discount">
                            <span class="discount" slot="discount">&nbsp;{{site.price}}</span>
                        </product>
                        <div v-else class="other_box">
                            <littleproduct :boxtitle="site.name" :boxprice = "site.price" 
                            :boximg = "site.img"></littleproduct>
                            <littleproduct class="littleproduct" :boximg = "nextPage">
                                <p class="littlemore" slot="more">{{browserMore}}</p>
                                <p class="kinds" slot="kinds">{{kinds}}</p>
                            </littleproduct>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .homeMain{
        height: 670px;
        width: 100%;
        min-width: 1230px;
        .box-hd{
            height: 58px;
            width: 1230px;
            position: relative;
            line-height: 58px;
            margin:auto;
            .phonetitle{
                color:#000;
                font-size:20px;
                height:58px;
                width:50px;
                font-weight: bold;
                }
            .more{
                position: absolute;
                font-size: 16px;
                width:180px;
                top:0;
                right: 10px;
                span{
                    color:#000;
                    margin-right:10px;
                    cursor: pointer;
                }
            }
        }
        .box-bd{
        height: 648px;
        width: 1230px;
        margin:auto;
        .leftimg{      
          clear:both;
          height: 614px;
          width: 234px;
          float: left;
          background:#f5f5f5;
          .leftopict,.lefbotpict{
            height:300px;
            width:234px;
            margin-bottom: 14px;
            transition:all 0.1s linear 0s;           
            &:hover{
                box-shadow:0 10px 10px #f0f0f0;
                transform: translate(0,-5px);
            }
          }
          .leftopict{
            background: url("../../public/image/homeMainSecond/lb.jpg");            
          }
          .lefbotpict{
            background: url("../../public/image/homeMainSecond/lt.jpg");
          }
          a{
            display: block;
            height: 300px;
            width: 100%;
          }
        }
        .rightpict{
          height: 614px;
          width:  992px;
          float: left;
          .outerBox{
            height: 614px;
            width: 992px;
            padding-left: 0px;
            margin-top:0px;
            .innerBox{
              list-style: none;
              float: left;
              background:#fff;
              margin-bottom: 14px;
              margin-left: 14px;
              padding-top: 20px;
              .product{
                .discount{
                    color:#c2b0b7;
                    font-size: 15px;
                    text-decoration:line-through;
                    }
                }
            &:last-child{
                height:143px;
            }
            }
            .other_box{
                background:#f5f5f5;
                .littleproduct{
                    .littlemore{
                        margin-top:20px;
                        color:#000;
                        text-align: left;
                        font-size: 18px;
                    }
                    .kinds{
                        color:#757575;
                        text-align: left;
                    }
                }

            }
          }
        }
      }   

    }
</style>
<script>
import littleproduct from '../components/littleproduct.vue';
import product from "../components/product.vue"

export default {
    name:"homeMain",
    data(){
        return{
            hotkind:[],
            tvkind:[],
            household:[],
            browserMore:"浏览更多",
            kinds:"热门",
            nextPage:require("../assets/nextpage.svg"),
            more_hot:true,
            more_tv:false,
            hot_tv:1
        }
    },
    components:{
        product,
        littleproduct
    },
    methods:{
        choseMore(index){
            let hot = this.more_hot;
            let tv = this.more_tv;
            let morehot = document.getElementById("more-hot")
            let moretv = document.getElementById("more-tv")
            if(index==1){
                hot = true;
                tv = false;
                this.household = this.hotkind;
                this.kinds = "热门"
            }else{
                hot = false;
                tv = true;
                this.household = this.tvkind;
                this.kinds = "电视影音"
            }
            if(hot){
                morehot.style.borderBottom="thin solid #ff6700"
                morehot.style.color = "#ff6700"
            }else{
                morehot.style.borderBottom="none"
                morehot.style.color = "#000"
            }
            if(tv){
                moretv.style.borderBottom="thin solid #ff6700"
                moretv.style.color = "#ff6700"
            }else{
                moretv.style.borderBottom="none"
                moretv.style.color = "#000"
            }
        }
    },
    created:function(){
        let _this = this;
        this.$axios.get("json/homemainsecond-data.json").then(function(res){
            _this.hotkind = res.data;
            _this.household = res.data;
        })
        this.$axios.get("json/homemainsecond2-data.json").then(function(res){
            _this.tvkind = res.data;
        })
    },
    watch:{

    },
    mounted:function(){
        this.choseMore(1)
    }
}
</script>