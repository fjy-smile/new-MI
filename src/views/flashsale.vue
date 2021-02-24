<template>
    <div name="flashsale" class="flashsale">
        <div class="box-hd">
            <p class="mstitle">秒杀</p>
            <div class="msmore">
                <button @click="scrollstroges()">&lt;</button>
                <button @click="scrollstroges">&gt;</button>
            </div>
        </div>
        <div class="flashsalecon">
            <div class="countdown">
                <div class="time">{{mstime}}</div>
                <img src="../assets/mspict.svg" height=100px width=100px>
                <div class="desc">{{`距离${begin_end}还有`}}</div>
                <div class="countdown">
                    <span>{{hours}}</span><i>:</i>
                    <span>{{minutes}}</span><i>:</i>
                    <span>{{seconds}}</span>
                </div>
            </div> 
            <div class="fstroges" id="fstroges">
                <ul class="innerstroges" id="innerstroges">
                    <li class="fstroge" v-for="site in flashsalestroge" :key="site.index">
                        <product class="product" :boxUrl = "site.img" :boxTitle="site.name"
                        :boxDesc="site.desc" :boxPrice="site.discount">
                            <span class="discount" slot="discount">&nbsp;{{site.price}}</span>   
                        </product>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss">
.flashsale{
    height: 370px;
    width:100%;
    .box-hd{
            height: 58px;
            width: 1230px;
            position: relative;
            line-height: 58px;
            margin:auto;
            .mstitle{
                color:#000;
                font-size:20px;
                float:left;
                height:58px;
                width:50px;
                font-weight: bold;
            }
            .msmore{
                height:100%;
                width:100px;
                float:right;
                button{
                    font-size:18px;
                    width:30px;
                    height:25px;
                    outline:none;
                    font-weight: bold;
                    color:#b5b3b6;
                    border:1px solid #e4e4e4;
                    background:#f5f5f5;
                }
            }
    }
    .flashsalecon{
        height: 648px;
        width: 1230px;
        margin:auto;
        .countdown{
            clear:both;
            float:left;
            height: 300px;
            width: 234px;
            background:#f1eded;
            .time{
                height:40px;
                font-size: 20px;
                color:#e53934;
                padding-top:20px;
                margin-top:30px;
            }
            img{
                margin-left: 25px;
            }
            .desc{
                height:20px;
                font-size:15px;
                text-align: center;
            }
            .countdown{
                height:40px;
                width:100%;
                margin-top:25px;
                span{
                    background:#605751;
                    color:#fff;
                    font-size: 20px;
                    margin:0 5px;
                    padding:8px 8px;
                    font-weight: bold;
                }
                i{
                    font-style: normal;
                    font-size: 25px;
                }
            }
        }
        .fstroges{
            height:300px;
            width:996px;
            display:block;
            white-space:nowrap;
            overflow:hidden;
            position: relative;
            ul{
                height: 300px;
                position:absolute;
                li{
                    list-style: none;
                    height: 280px;
                    width: 234px;
                    background: #fff;
                    margin-bottom: 14px;
                    margin-left: 14px;
                    padding-top: 20px;
                    display:inline-block;
                    .product{
                        .discount{
                            color:#c2b0b7;
                            font-size: 15px;
                            text-decoration:line-through;
                        }
                    }
                }
            }
        }
    }
}
    
</style>
<script>
import product from '../components/product.vue'

export default {
    name:"flashsale",
    data(){
        return{
            flashsalestroge:[],
            mstime:"14:00场",
            begin_end:"结束",
            hours:0,
            minutes:0,
            seconds:0
        }
    },
    methods:{
        scrollstroges(){
            let el = document.getElementById("fstroges");
            let dy = el.scrollLeft;
            let len = el.width;
            if(dy<740){
                console.log(dy)
                el.scrollTo({ 
                    left: 1000, 
                    behavior: "smooth" 
                });
            }else{
                el.scrollTo({ 
                    left: -1000, 
                    behavior: "smooth" 
                });
            }
        },
        countdown(){
            let status = false;      //未开始
            const today = new Date();
            let now = Date.parse(new Date())
            let end = Date.parse(today.toDateString())
            let hour = today.getHours();
            let mstime = this.mstime;
            if(hour>=0&&hour<14){
                end +=14*60*60*1000;
                status = false;
            }else if(hour>=23){
                end +=38*60*60*1000;
                status = false;
            }else if(hour<16){
                end +=16*60*60*1000;
                status = true;
            }else if(hour<21){
                end +=21*60*60*1000;
                status = false;
            }else{      //21-23
                end +=23*60*60*1000;
                status = true;
            }
            if(status == true){
                this.begin_end = "结束"
            }else{
                this.begin_end = "开始"
            }
            if(hour<16||hour>23){
                this.mstime = "14:00场"
            }else{
                this.mstime = "21:00场"
            }
            const msec = end - now;
            let hours = parseInt(msec/1000/60/60%24);
            let minutes = parseInt(msec/1000/60%60);
            let seconds = parseInt(msec/1000%60);
            this.hours = hours > 9 ? hours : '0'+ hours
            this.minutes = minutes > 9 ? minutes : '0'+ minutes
            this.seconds = seconds > 9 ? seconds : '0'+ seconds
            const that = this;
            setTimeout(function(){
                 that.countdown()
             },1000)
        }
    },
    components:{
        product
    },
    created:function(){
        let _this = this;
        this.$axios.get("json/flashsale-data.json").then(res=>_this.flashsalestroge = res.data)
    },
    mounted:function(){
        this.countdown()
    }
}
</script>