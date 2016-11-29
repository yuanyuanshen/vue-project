<template>
    <div class="tab tab1">this is{{message}}</div>
</template>
<script>
    export default{
        props:['message'],
        route:{
            data(){
                if(this.message===''){
                    this.message='empty';
                }
                console.log(this.message);
            }
        }
    }
</script>
