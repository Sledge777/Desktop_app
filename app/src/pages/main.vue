<template lang="">
    <div>
        <MainHeader/>
    </div>
</template>
<script>
import MainHeader from '@/components/Main-header.vue';
export default {
    components: {
        MainHeader,
        
    },
}
</script>
<style scoped>
div {
    background-image: url('/src/assets/eye.png');
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 98vh;
}
</style>