<template>
    <div>
        <template v-if="definedUser">
            <form class="main-form" @submit.prevent="onSubmit">
                <div class="main-form__input">
                    <input class="main-input" v-model="user.first_name" placeholder="Имя" type="text">
                </div>
                <div class="main-form__input">
                    <input class="main-input" v-model="user.second_name" placeholder="Фамилия" type="text">
                </div>
                <div class="main-form__input--wide">
                    <input class="main-input" v-model="user.patronymic" placeholder="Отчество" type="text">
                </div>
                <div class="main-form__input" v-if="isTrainer">
                    <input class="main-input" v-model="user.title" placeholder="Должность" type="text">
                </div>
                <div class="main-form__input">
                    <input class="main-input" v-model="user.phone" placeholder="Телефон" type="tel">
                </div>
                <div class="main-form__input--wide">
                    <textarea class="main-input main-textarea" v-model="user.description"
                        placeholder="Сообщение"></textarea>
                </div>
                <div class="main-form__input--wide">
                    <input class="main-input" v-model="user.vk_link" placeholder="Ссылка на соцсеть VK">
                </div>
                <div class="main-form__input--wide">
                    <input class="main-input" v-model="user.instagram_link" placeholder="Ссылка на соцсеть Instagram">
                </div>
                <div class="main-form__input--wide">
                    <input class="main-input" v-model="user.youtube_link" placeholder="Ссылка на соцсеть Youtube">
                </div>
                <div class="main-form__input">
                    <button class="text-button">Отправить</button>
                </div>
            </form>
        </template>
        <template v-else>
            <form class="main-form" @submit.prevent="onSubmit">
                <div class="main-form__input--wide">
                    <input class="main-input" placeholder="Просто текст" type="text">
                </div>
                <div class="main-form__input">
                    <button class="text-button">Это никуда не отправится)</button>
                </div>
            </form>
        </template>
    </div>
</template>

<script>
import { ref, computed } from 'vue';

import { useUserStore } from '@/stores/UserStore';

export default {
    props: {
        profile: Object,
        isTrainer: Boolean,
        isClient: Boolean,
    },
    setup(props, context) {
        const message = ref('');
        const userStore = useUserStore();

        const definedUser = computed(() => props.isTrainer || props.isClient);

        const user = computed(() => ({
            first_name: props.profile.first_name,
            second_name: props.profile.second_name,
            patronymic: props.profile.patronymic,
            phone: props.profile.phone,
            description: props.profile.description,
            title: props.isTrainer ? props.profile.trainer.title : '',
            vk_link: props.profile.vk_link,
            instagram_link: props.profile.instagram_link,
            youtube_link: props.profile.youtube_link,
            image: null,
        }));

        const onSubmit = async () => {
            try {
                const data = await userStore.editProfile(user.value);
                message.value = data.message;
                context.emit('onSubmit');
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        };

        return {
            message,
            definedUser,
            user,
            onSubmit,
        };
    },
};
</script>