<template>
    <div class="tool-bar" name="toolBar">
        <div class="topBar">
            <div class="uiconitem" v-for="item in items" :key="item.index" 
                @mouseover="itemlight(item.index,true)" 
                @mouseleave="itemlight(item.index,false)">
                <a class="iconitem" :class="{returntop:(item.index==5&&(!scrolltop))}" href="#">
                    <img :src="item.flag?item.newimage:item.image" 
                    width="30px" height="30px">
                    <p>{{item.name}}</p>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.tool-bar{
    position: fixed;
    right:0px;
    top:80px;
    height:500px;
    width:80px;
    .topBar{
        width:100%;
        .uiconitem{
            height:80px;
            width:100%;
            a{
                height:65px;
                display: block;
                background: #fff;
                text-decoration: none;
                padding-top: 15px;
                margin-bottom:1px;
                color:#757575;
                p{
                    font-size: 10px;
                }
            }
            &:last-child{
                margin-top:15px;
            }
            .returntop{
                display: none;
            }
        }
    }
  }
</style>
<script>
import flashsaleVue from './flashsale.vue';
export default {
    name:"toolBar",
    data(){
        return{
            items:[
                {  
                    index:0,name:"手机APP",
                    image:require("../assets/tools/phoneb.svg"),
                    newimage:require("../assets/tools/phonea.svg"),
                    flag:false
                },
                {  
                    index:1,name:"个人中心",
                    image:require("../assets/tools/personalb.svg"),
                    newimage:require("../assets/tools/personala.svg"),
                    flag:false
                },
                {  
                    index:2,name:"售后服务",
                    image:require("../assets/tools/afterserveb.svg"),
                    newimage:require("../assets/tools/afterservea.svg"),
                    flag:false
                },
                {  
                    index:3,name:"人工服务",
                    image:require("../assets/tools/serveb.svg"),
                    newimage:require("../assets/tools/servea.svg"),
                    flag:false
                },
                {  
                    index:4,name:"购物车",
                    image:require("../assets/tools/shoppingcarb.svg"),
                    newimage:require("../assets/tools/shoppingcara.svg"),
                    flag:false
                },
                {  
                    index:5,name:"回顶部",
                    image:require("../assets/tools/returntopb.svg"),
                    newimage:require("../assets/tools/returntopa.svg"),
                    flag:false
                }
            ]
        }
    },
    methods:{
        itemlight(index,bool){
            let item = document.getElementsByClassName("iconitem")[index];
            let flag = bool;
            this.items[index].flag = bool;
            console.log(this.items[index].flag)
            if(!flag){
                item.style.color = "#757575"
            }else{
                item.style.color = "#ff6700"
            }
        }
    },
    props:{
        scrolltop:Boolean
    },
    watch:{
        
    }

}
</script>