<template lang="">
    <div>
        <my-button @click="$router.push('/')">Назад</my-button>
        <div class="input__wrapper">
            <form>
                <input type="text" placeholder="Кому" v-model="name">
                <textarea name="" id="" cols="30" rows="10" placeholder="Введите сообщение" v-model="messege"></textarea>
                <button type="submit" @click="send()">Отправить</button>
            </form>
        </div>
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
            name: '',
            messege: '',
        }
    },
    methods: {
        send() {
            
        }
    }
}
</script>
<style scoped>
form {
    display: flex;
    width: 60%;
    flex-direction: column;
}
.input__wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>