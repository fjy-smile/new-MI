<template>
    <div name="homeContainer" class="homecontainer">
  		<div class="home-hero">
  			<div class="J_homeSwiper">  
  				<ul class="site-category-list">
  					<a href="#"  v-for="site in site_category_list" :key="site.index">
  					<li>{{site.name}}<span>&gt;</span></li></a>
  				</ul>
  				<div class="swiper-wrapper">
					<a href="#">
					  <img :src="dataList[currentIndex].url">
					</a></div>
  				<div class="swiper-pagination">
  					<li class="radius" v-for="item in dataList" :key="item.index"
  					@mouseover="gotoPage(item.index)"
  					:class="{'current':currentIndex == item.index}"></li></div>
  					<!-- 图片和圆点相同 -->
  				<div class="swiper-button-prev" @click="gotoPage(prevIndex)">&lt;</div>
  				<div class="swiper-button-next" @click="gotoPage(nextIndex)">&gt;</div>
  			</div>
  			<div class="home-hero-sub">
  				<div class="span4">
  					<div class="sspan" v-for="site in sspan4" :key="site.i" 
                      ref="sspan" @mouseover="spanLight(site.i)" @mouseleave="spanLightDown(site.i)">
                          <a href="#">
                              <div class="sspancon">
                                <img :src="site.spanlight?site.url:site.newurl"/><p>{{site.name}}</p>
                              </div>
                          </a>
                    </div>
  				</div>
  				<div class="span16">
  					<ul>
  						<li v-for="site in sspan16" :key="site.index"><a href="#"><img :src="site.url"></a></li>
  					</ul>
  				</div>
  			</div>
  		</div>
    </div>
</template>
<style lang="scss">
.homecontainer{
	height: 670px;
	width: 100%;
	margin-top: 30px;
	.home-hero{
		background: #123;
		height: 460px;
		width: 1230px;
		margin:auto;
		.J_homeSwiper{
			height: 460px;
			width:1230px;
			position: relative;
			.site-category-list{
				position:absolute;
				height: 420px;
				width:235px;
				background: #aaa;
				margin-top:0;
				padding-left:0;
				background:rgba(170,170,170,0.5);
				padding-top:40px;
				z-index: 20;
				a{
					font-size: 15px;
					text-decoration: none;
					height: 40px;
					width: 100%;
					display: block;
					line-height: 40px;
					li{
						display: block;
						color: #fff;
						list-style: none;
						margin-left: 25px;
					}
					span{
						margin-right: 40px;
						float:right;
					}
				}
				a:hover{
					background: #ff6700;
				}
				
			}
			.swiper-wrapper{
				height: 460px;
				width:1230px;
				position: absolute;
				background: #aaa;	
				img{
					display: block;
					width: 100%;
				}
			}
			.swiper-pagination{
				position: absolute;
				height: 20px;
				width: 150px;
				right: 10px;
				top:415px;
				right:30px;
				.radius{
					list-style: none;
					float: left;
					margin-right:10px;
					height: 10px;
					width:10px;
					background: #ddd;
					border-radius: 50%;
					box-shadow: 1px 1px 1px 1px #333;
				}
				.current{
					background: #fff;
				}
			}
			.swiper-button-prev,
			.swiper-button-next{
				position: absolute;
				height: 70px;
				width: 40px;
				top:50%;
				z-index:10;
				font-size: 45px;
				color: #fff;
				margin-top: -35px;
				cursor: pointer;
				opacity: 0.8;
			}
			.swiper-button-prev{
				left:234px;
			}
			.swiper-button-next{
				right: 2px;	
			}
			.swiper-button-prev:hover,
			.swiper-button-next:hover{
				background:#757678;
			}			
		}
		.home-hero-sub{
			width:1230px;
			height:171px;
			margin-top: 20px;
			.span4{
				height: 170px;
				width: 235px;
				float: left;
				.sspan{
					float: left;
					height: 85px;
					width: 78px;
					a{
                        display:block;
						height: 85px;
                        background:#5f5a55;
                        text-decoration: none;
                        .sspancon{
                            height: 44px;
                            width:78px;
                            padding-top:20px;
                            img{
                                height: 24px;
                                width: 24px;
                                margin:0 auto;
                            }
                            p{
                                font-size: 12px;
                                color:#cfccca;
                            }
                        }
						
					}
					
				}
			}
			.span16{
				height: 170px;
				width: 980px;
				float: right;
				ul{
					height: 170px;
					width: 100%;
					margin-top: 0px;
					padding-left: 0px;
					display: table;
					li{
						width: 316px;
						height: 170px;
						list-style: none;
						display: table-cell;
						padding-right: 15px;
					}
				}
				
			}
		}
	}
}
</style>
<script>
export default {
   name:"homeContainer" ,
   data(){
       return{
            dataList:[],
            currentIndex:0,		//默认图片从第一张
            timer:null,			//定时器
            dataFromFather:[],
            site_category_list:[
                {id:1 ,name:'手机 电话卡'},
                {id:2 ,name:'电视 盒子'},
                {id:3 ,name:'笔记本 显示器'},
                {id:4 ,name:'家电 插线板'},
                {id:5 ,name:'出行 穿戴'},
                {id:6 ,name:'智能 路由器'},
                {id:7 ,name:'电源 配件'},
                {id:8 ,name:'健康 儿童'},
                {id:9 ,name:'耳机 音响'},
                {id:10,name:'生活 箱包'}
            ],
            sspan4:[
                {i:0,url:require('../assets/msb.svg'),spanlight:true,
                    newurl:require('../assets/msa.svg'),name:"小米秒杀"},
                {i:1,url:require('../assets/qyb.svg'),spanlight:true,
                    newurl:require('../assets/qya.svg'),name:"企业团购"},
                {i:2,url:require('../assets/fmab.svg'),spanlight:true,
                    newurl:require('../assets/fmaa.svg'),name:"F码通道"},
                {i:3,url:require('../assets/simb.svg'),spanlight:true,
                    newurl:require('../assets/sima.svg'),name:"米粉卡"},
                {i:4,url:require('../assets/yjb.svg'),spanlight:true,
                    newurl:require('../assets/yja.svg'),name:"以旧换新"},
                {i:5,url:require('../assets/hfb.svg'),spanlight:true,
                    newurl:require('../assets/hfa.svg'),name:"话费充值"}] ,
            sspan16:[
                {i:1,url:require('../../public/image/span16/left.jpg')},
                {i:2,url:require('../../public/image/span16/middle.jpg')},
                {i:3,url:require('../../public/image/span16/right.jpg')}]
        }
   },
   methods:{
	gotoPage(index){
  		this.currentIndex=index;
      },
    spanLight(i){
        this.sspan4[i].spanlight = false;
    },
    spanLightDown(i){
        this.sspan4[i].spanlight = true;
    }

   },
    computed:{
  	    prevIndex(){
            if(this.currentIndex==0){
                return this.dataList.length - 1;
            }else{
                return this.currentIndex - 1;
            }
  	    },
        nextIndex(){
            if(this.currentIndex==this.dataList.length - 1){
                return 0;
            }else{
                return this.currentIndex + 1;
            }
        },
        runInv() {
            this.timer = setInterval(() => {
            this.gotoPage(this.nextIndex)
            }, 1000)
        }
  },
    created:function(){
      var _this = this;
      this.$axios.get("json/swiper-data.json").then(function(res){
          _this.dataList = res.data;
      })
    }
}
</script>