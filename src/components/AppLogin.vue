<template>
    <div>
        <form class="main-form" @submit.prevent="handleLogin">
            <div class="main-form__input--wide">
                <input class="main-input" v-model="user.username" name="username" type="text" placeholder="Логин">
            </div>
            <div class="main-form__input--wide">
                <input class="main-input" v-model="user.password" name="password" type="password" placeholder="Пароль">
            </div>
            <button class="text-button">Войти</button>
        </form>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/UserStore';

export default {
    setup(props, context) {
        const username = ref('');
        const password = ref('');
        const message = ref('');

        const { login } = useUserStore();

        const router = useRouter();

        const user = computed(() => ({
            username: username.value,
            password: password.value,
        }));

        const handleLogin = async () => {
            if (user.value.username && user.value.password) {
                try {
                    await login(user.value);
                    context.emit('onSubmit');
                    router.push(`/profile/${useUserStore().userId}`);
                } catch (error) {
                    console.error(error);
                    message.value = (error.response && error.response.data.message) || error.message || error.toString();
                    window.alert(message.value);
                }
            }
        };

        return {
            user,
            username,
            password,
            message,
            handleLogin,
        };
    },
};
</script>
  