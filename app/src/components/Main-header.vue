<template lang="">
    <div>
        <div class="flex">
            <div class="menu" @click="show()">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <img src="@/assets/plus.png" @click="$router.push('/send')">
            <div class="wrapper_auth">
                <my-button @click="$router.push('/reg')">Зарегистрироваться</my-button>
                <my-button @click="$router.push('/auth')">Войти</my-button>
            </div>
        </div>
        <div>
            <aside class="sideBar">
                <Adress>{{ name }}</Adress>
            </aside> 
        </div>
    </div>
</template>
<script>
import Adress from './Adress.vue';
import MyButton from './my-button.vue';



export default {
    components: {
        Adress,MyButton
    },
    data() {
        return {
            name: '',
        }
    },
    methods: {
        show() {
            let el = document.querySelector(".sideBar")
            let el2 = document.querySelector(".menu")
            el.classList.toggle('show')
            el2.classList.toggle('menu__onclick')
        }
    },
}
</script>
<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
}
.menu {
    cursor: pointer;
    width: 70px;
    height: 70px;
    transition: all 0.3s;
    margin:1%;
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
    height: 91% ;
    width: 30vw;
    background-color: grey;
    position: absolute;
    left: -30vw;
    transition: all 0.3s;
}
.wrapper_auth {
    display: flex;
    flex-direction: column;
    gap:10px;
    margin: 1%;
    align-items: center;
}
.show {
    left: 0px;
    transition: all 0.3s;
}
img {
    margin: 1%;
    height: 5%;
    width: 5%;
    cursor: pointer;
}
</style>