<template lang="">
    <div>
        <section>
            <my-button @click="$router.push('/')" class="back">Назад</my-button>
            <form>
                <input type="email" v-model="login" placeholder="Введите почту">
                <input type="password" v-model="password" placeholder="Введите пароль">
                <my-button @click="auth()">Войти</my-button>
            </form>
        </section>
    </div>
</template>
<script>
import MyButton from '@/components/my-button.vue';


export default {
    components: {
        MyButton
    },
    data() {
        return {
            login: '',
            password: '',
        }
    },
    methods: {
        auth() {

        }
    }
}
</script>
<style scoped>
div {
    display:flex;
    justify-content: center;
}
section {
    height: 50vh;
    width: 50vw;
    background-color: grey;
    margin-top: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    position: relative;
}
form {
    display: flex;
    flex-direction: column;
    gap:15px;
}
.back {
    position: absolute;
    top:0;
    left: 0;
    margin-top: 12px;
    margin-left: 12px;
}
input {
    padding: 5px;
}
</style>