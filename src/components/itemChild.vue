<template>
    <div name="itemChild"  @mouseleave="hideItemchild()">
        <div class="item-child" >
            <div class="ccontainer">
              <ul v-show="showlist" class="child-list">
                  <li v-for="item in navchilditem" :key="item.index">
                      <a href="#">
                          <div class="pict"><img :src="item.image" alt=""
                            height="120" width="120"></div>
                          <p class="itemname">{{item.name}}</p>
                          <p class="itemprice">{{item.price}}</p>
                      </a>                      
                  </li>
              </ul>
           </div>
        </div>
    </div>
</template>
<style lang="scss">
.item-child{
    height:200px;
    width:100%;
    box-shadow: 1px 2px 2px gray;
    .ccontainer{
        width:90%;
        height:200px;
        margin:auto auto;
        ul{
          display:flex;
          li{
            list-style: none;
            font-size:12px;
            width:200px;
            height:200px;
            a{
                display: block;
                height:130px;
                width:160px;
                text-decoration: none;
                margin:auto;
                margin-top:20px;
                border-right:1px solid #e4e4e4;                
                .pict{
                    height:120px;
                    width:120px;
                    margin:auto;
                    padding-top:4px;
                }
                .itemname{
                    font-weight:bold;
                    color:#000;
                }
                .itemprice{
                    font-weight:bold;
                    color:#ff6700;
                }
            }

          }
        }
    }
}
</style>
<script>
export default {
    name:"itemChild",
    data(){
        return{
            navitem:[],
            navchilditem:[],
            showlist:true
        }
    },
    methods:{
      hideItemchild(){
        this.$emit('hideItemchild');        
      }
    },
    props:{
        showItemchildindex:Number
    },
    created:function(){
        var _this = this;
        this.$axios.get("json/nav-item.json").then(function(res){
            _this.navitem = res.data;
        })
    },
    watch:{
        showItemchildindex(){
            if(this.showItemchildindex==0){
                this.navchilditem = this.navitem.slice(0,5);
                this.showlist = true;
            }else if(this.showItemchildindex==1){
                this.navchilditem = this.navitem.slice(5,8);
                this.showlist = true;
            }else{
                this.showlist = false;
            }
        }
    }
}
</script>