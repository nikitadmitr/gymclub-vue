<template>
    <div>
        <form class="main-form" @submit.prevent="onChangePassword">
            <div class="main-form__input--wide">
                <input class="main-input" v-model="oldPassword" name="password" type="password" placeholder="Старый пароль">
            </div>
            <div class="main-form__input--wide">
                <input class="main-input" v-model="newPassword" name="password" type="password" placeholder="Новый пароль">
            </div>
            <button class="text-button">Поменять</button>
            <button class="text-button" @click.prevent="logoutHandler">Выйти из аккаунта</button>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useUserStore } from '@/stores/UserStore';

export default {
    setup(props, context) {
        const userStore = useUserStore();
        const router = useRouter();

        const oldPassword = ref('');
        const newPassword = ref('');
        const message = ref('');

        const passwords = {
            oldPassword,
            newPassword,
        };

        const logoutHandler = () => {
            userStore.logout();
            router.push('/');
            onSubmit();
        };

        const onChangePassword = async () => {
            try {
                const data = await userStore.changePassword(passwords);
                message.value = data.message;
                context.emit('onSubmit');
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        };

        return {
            oldPassword,
            newPassword,
            message,
            passwords,
            logoutHandler,
            onChangePassword,
        };
    },
};
</script>
  