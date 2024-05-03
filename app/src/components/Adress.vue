<template lang="">
    <div class="wrapp">
        <div class="wrapp__box">
            Имя: <slot></slot>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {

    },
    methods: {

    }
}
</script>
<style scoped>
.wrapp {
    width:100%;
    height:10%;
    background-color:green;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items: center;
} 
</style>