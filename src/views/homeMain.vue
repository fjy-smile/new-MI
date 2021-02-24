<template>
    <div name="homeMain" class="homeMain">
        <div class="box-hd">
  			<p class="phonetitle">手机</p>
  			<div class="more"><a href="#">查看全部<div class="iconf">&gt;</div></a></div>
  		</div>
        <div class="box-bd">
            <div class="leftpict"><a href="#"></a></div>
            <div class="rightpict">
                <ul class="outerBox">
                    <li class="innerBox" v-for="site in phone" :key="site.i">
                        <product :boxUrl = "site.url" :boxTitle="site.title"
                                :boxDesc="site.desc" :boxPrice="site.price"></product>
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
                float:left;
                height:58px;
                width:50px;
                font-weight: bold;
                }
            .more{
            position: absolute;
            font-size: 16px;
            width:90px;
            top:0;
            right: 10px;
            a{
                text-decoration: none;
                color:#000;
                .iconf{
                    float: right;
                    font-size: 20px;
                }
            }
            a:hover{
                color: #ff6700;
            }
            }
        }
        .box-bd{
        height: 648px;
        width: 1230px;
        margin:auto;
        .leftpict{
          height: 614px;
          width: 234px;
          background: url("../../public/image/phone/brick-item.jpg");
          float: left;
          a{
            display: block;
            height: 614px;
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
              height: 280px;
              width: 234px;
              background: #fff;
              margin-bottom: 14px;
              margin-left: 14px;
              padding-top: 20px;
            }
          }
        }
      }   

    }
</style>
<script>
import product from "../components/product.vue"

export default {
    name:"homeMain",
    data(){
        return{
            phone:[]
        }
    },
    components:{
        product
    },
    created:function(){
        let _this = this;
        this.$axios.get("json/phone-data.json").then(function(res){
            _this.phone = res.data;
        })
    }
}
</script>