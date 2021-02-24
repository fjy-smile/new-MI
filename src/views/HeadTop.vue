<template>
    <div>
      <div class="headtop" name="HeadTop">
        <div class="topbarBannerWrapper">
          <a href="#" class="link block"></a>
        </div>
        <div class="site-topbar">
          <div class="container">
            <div class="topbar-nav">
                <ul>
                    <li v-for="item in nav" :key="item.title">
                      <a :href="item.url">{{item.title}}</a></li>
                </ul>
            </div>
            <div class="topbar-cart" @mouseover="showCarmenu" @mouseleave="hideCarmenu">
              <div class="container"><img src="../assets/car.svg"><span>购物车(0)</span>
              </div>
            </div>
            <div class="topbar-info">
              <a href="#">登录</a>
              <span>|</span>
              <a href="#">注册</a>
              <span>|</span>
              <a href="#">消息通知</a>
            </div>
          </div>
        </div>
        <div class="site-header">
          <div class="container">
            <div class="header-logo">
              <div class="logo"></div>
            </div>
            <div class="header-nav">
              <ul>
                <li v-for="item in headernav" :key="item.index" @mouseover="showItemchild(item.index)"
                  class="nav-item-active">{{item.title}}</li>
              </ul>
              <div v-if="showcarmenu==false" class="header-search carmenu-search">
                <input type="text" class="subm">
                <input type="submit" class="btn" value=" " >
              </div>
              <div v-show="showcarmenu==true" class="header-carmenu carmenu-search"></div>
            </div>
          </div>
          <itemChild v-show="itemchild" @hideItemchild="hideItemchild"
            :showItemchildindex="showItemchildindex"></itemChild>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
$minwidth :1342px;
*{
  padding:0;
  margin:0;
  }
.headtop{
  min-width: $minwidth;
  .topbarBannerWrapper{
    .link{
      display: block;
      width:100%;
      height: 120px;
      background-image:url(../../public/image/topbarBannerWrapper.jpg);
    }
  }
  .site-topbar{
    width:100%;
    height: 40px;
    background:#333;
    .container{
      width:90%;
      margin:0 auto;
      .topbar-nav,.topbar-info,.topbar-cart{
        height:40px;
      }
      .topbar-cart,.topbar-info{
        float:right;
      }
      .topbar-nav{
        width:60%;
        float:left;
        ul{
          height:100%;
          display:flex;
          justify-content: space-around;
          li{
            list-style: none;
            font-size:12px;
            height:100%;
            a{
              display: block;
              line-height: 40px;
              text-decoration: none;
              color:#b0b0b0;
            }
            a:hover{
              color:#fff;
            }
          }
        }
      }
      .topbar-info{
        width:12%;
        display: flex;
        justify-content: space-around;
        line-height: 40px;
        color: #b0b0b0;
        a{
          text-decoration: none; 
          color: #b0b0b0;
          font-size: 12px;       
        }
        a:hover{
          color:#fff;
        }
      }
      .topbar-cart{
        width:10%;
        margin-left:10px;
        background:#424242;
        .container{
          width:80%;
          height: 40px;
          text-align: center;
          cursor: pointer;
          img{
            vertical-align: middle;
            height: 40px;
            width:25px;
            margin:auto;
          }
          span{
            font-size: 12px;
            vertical-align: middle;
            color:#b0b0b0;
          }
        }        
      }
      .topbar-cart:hover{
          background: #fff;
      }
    }
  }
  .site-header{
    .container{
      height:100px;
      width:90%;
      margin:auto;
      .header-logo{
          height:54px;
          width:54px;
          float:left;
          margin-top:22.5px;
        .logo{
					position: relative;
					display: block;
					overflow: hidden;
					background: #ff6700;
					height: 54px;
					width:55px;
				}
				.logo::before,.logo::after{
					position: absolute;
					left:0;
					top:0;
					height: 55px;
					width:54px;
					content:'';
					transition: transform .4s;
				}
        .logo::after{
          background:url("../../public/image/alogo.jpg")no-repeat 50% 50%;
          margin-left: -55px;
        }
        .logo::before{
          background:url("../../public/image/blogo.jpg")no-repeat 50% 50%;
        }
        .logo:hover:after,.logo:hover:before{
          transform:translate(54px);
        }
      }
      
      .header-nav{
        float:right;
        height:100%;
        width:80%;
        ul{
          height:80px;
          margin-top:20px;
          float:left;
          li{
            list-style: none;
            float:left;
            height:80px;
            padding-left:10px;
            padding-right: 10px;
            cursor: pointer;
            &:hover{
              color: #ff6700;
            }
          }
        }
        .carmenu-search{
          width:30%;
          float:right;
        }
        .header-search{
          height:55px;
          margin-top:30px;
          input{
            outline:none;
            width:100%;
            border:1px solid #c9ccd4;
          }
          .subm{
            height:45px;
            width:70%;
          }
          .subm:hover{
            border-color:gray;
          }
          .subm:focus{
            border-color:#ff6700;
          }
          .btn{
            border-left:none;
            height:47px;
            width:20%;
            background:url('../../public/image/search.png')no-repeat 50% 50%;
          }
        }
        .header-carmenu{
          background:#ddd;
          height:100px;
          position:relative;
        }
      }      
    }
  }
}
</style>
<script>
import itemChild from '../components/itemChild'

export default {
    name:"HeadTop",
    components:{
      itemChild
    },
    data(){
      return{
        showcarmenu:false,
        nav:[],
        index:"",
        itemchild:false,
        navitem:"",
        showItemchildindex:0,
        headernav:[
          {index:0,title:"小米手机"},
          {index:1,title:"Redmi红米"},
          {index:2,title:"电视"},
          {index:3,title:"笔记本"},
          {index:4,title:"家电"},
          {index:5,title:"路由器"},
          {index:6,title:"智能硬件"},
          {index:7,title:"服务"},
          {index:8,title:"社区"},
        ]
      }
    },
    methods:{
      showCarmenu(){
        this.showcarmenu = true;
      },
      hideCarmenu(){
        this.showcarmenu = false;
      },
      showItemchild(index){
        this.itemchild = true;
        this.showItemchildindex = index;
      },
      hideItemchild(){
        this.itemchild = false;
      }
    },
    created:function(){
      var _this = this;
      this.$axios.get("json/nav-data.json").then(function(res){
          _this.nav = res.data;
      })
    }
}
</script>