<template>
  <div id='authorName' class="author" @mouseout='mouseout1' @mouseover='mouseover1'>
    hello,{{name}}
  </div>
</template>
<script>
export default{
    data(){
        return{
            name:'shenyuanyuan'
        }
    },
    methods:{
      mouseover1() {
            var obj = document.getElementById('authorName');
            obj.style.fontSize = '48px';
            obj.style.color = 'red';
        },
      mouseout1() {
        var obj = document.getElementById('authorName');
        obj.style.fontSize = '24px';
        obj.style.color = '#0bb20c';
      }
    },
    route:{
        data() {
            /*每次切换路由，在渲染出页面前都会执行*/
        }
    }
}
</script>
<style>
  .author{
    color: #0bb20c;
    font-size: 24px;
    font-weight: bolder;
  }
</style>
