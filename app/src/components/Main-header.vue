<template lang="">
    <div class="wrapper">
        <div class="menu" @click="show()">
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <aside class="test">

        </aside>
    </div>
</template>
<script>
export default {
    data() {

    },
    methods: {
        show() {
            let el = document.querySelector(".test")
            let el2 = document.querySelector(".menu")
            el.classList.toggle('show')
            el2.classList.toggle('menu__onclick')
        }
    },
}
</script>
<style scoped>
.wrapper {
    background-image: url('/src/assets/eye.png');
    background-size:contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 98vh;
}
.menu {
    cursor: pointer;
    width: 70px;
    height: 70px;
    transition: all 0.3s;
    margin:10px;
    background-color: red;
}
.menu__onclick {
    transform: rotate(90deg);
    transition: all 0.3s;
}
ul {
    list-style-type: ""; /* почему none сносит все li? */
}
li {
    width: 100%;
    height: 18px;
    background-color: black;
    border-radius: 50px;
}
li:not(:last-child) {
    margin-bottom: 10%;
}
aside {
    height: 91vh;
    width: 30vw;
    background-color: grey;
    position: absolute;
    left: -30vw;
    transition: all 0.3s;
}
.show {
    left: 0px;
    transition: all 0.3s;
    
}
</style>