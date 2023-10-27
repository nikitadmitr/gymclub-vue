<template>
    <div>
        <form class="main-form" @submit.prevent="handleRegister">
            <div class="main-form__input--wide">
                <input class="main-input" v-model="username" name="username" type="text" placeholder="Логин">
            </div>
            <div class="main-form__input--wide">
                <input class="main-input" v-model="email" name="email" type="email" placeholder="Почта">
            </div>
            <div class="main-form__input--wide">
                <input class="main-input" v-model="password" name="password" type="password" placeholder="Пароль">
            </div>
            <div>
                <vue-recaptcha @verify="getCaptcha" :sitekey="recaptchaKey"></vue-recaptcha>
            </div>
            <div>
                <button class="text-button">Зарегистрироваться</button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha'

import { useUserStore } from '@/stores/UserStore';

export default {
    components: {
        VueRecaptcha
    },
    setup() {
        const userStore = useUserStore();

        const recaptchaKey = import.meta.env.V_RECAPTCHA_SITE_KEY
        const username = ref('');
        const email = ref('');
        const password = ref('');
        const captchaToken = ref('');
        const message = ref('');

        const user = computed(() => ({
            username: username.value,
            email: email.value,
            password: password.value,
            captcha: captchaToken.value
        }))

        function getCaptcha(response) {
            captchaToken.value = response
        }

        async function handleRegister() {
            try {
                const data = await userStore.register(user.value);
                message.value = data.message;
                window.alert(message.value);
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        }

        return {
            username,
            email,
            password,
            getCaptcha,
            handleRegister,
            recaptchaKey
        }
    }
}
</script>
