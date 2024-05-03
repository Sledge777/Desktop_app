<template lang="">
    <div>
        <button><slot></slot></button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
button {
    background-color:cyan;
    border: 3% solid grey;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 90%;
}
</style>