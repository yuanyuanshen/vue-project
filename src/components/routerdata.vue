<template>
    <div class="routerdata">
        <div class="hd" style="height: 100%;">
            <h1 class="page_title">Vue</h1>
            <p class="page_desc">利用路由实现tab切换并传参数</p>
        </div>
        <div class="weui_tab">
            <ul class="weui_navbar">
                <router-link tag="li" class="weui_navbar_item" @click="random" to="/routerdata/tab1">Vuejs</router-link tag="li">
                <router-link tag="li" class="weui_navbar_item" to="/routerdata/tab2">VueTab</router-link>
            </ul>
            <div class="weui_tab_bd">
                <router-view :message="msg"></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
.weui_tab_bd{
    width:100%;
    height:200px;
}
</style>
<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        methods:{
            random(){
                this.msg=Math.random();
              console.log("11");
            }
        }
    }
</script>
