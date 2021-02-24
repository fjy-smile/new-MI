<template>
  <div class="home">
      <HeadTop></HeadTop>
      <homeContainer></homeContainer>
      <div class="home-main">
        <flashsale></flashsale>
        <homeMain></homeMain>
        <homeMainSecond></homeMainSecond>
      </div>
      <toolBar :scrolltop = show_totop></toolBar>
  </div>
</template>

<style lang="scss" scoped>
.home{
  .home-main{
    width:100%;
    height:2000px;
    background:#f5f5f5;
  }

}  
</style>
<script>
import HeadTop from './HeadTop.vue'
import homeContainer from './homeContainer.vue'
import homeMain from './homeMain';
import flashsale from './flashsale.vue'
import homeMainSecond from './homeMainSecond.vue'
import toolBar from './toolBar.vue'

export default {
  name: 'Home',
  components:{
    HeadTop,
    homeContainer,
    homeMain,
    flashsale,
    homeMainSecond,
    toolBar
  },
  data(){
    return{
      show_totop:false
    } 
  },
  methods: {
    handleScroll(){
      let top = document.documentElement.scrollTop ||document.body.scrollTop;
      if(top>=1000){
        this.show_totop = true;
      }else{
        this.show_totop = false;
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>
