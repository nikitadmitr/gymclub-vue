<template>
    <main>
        <section class="section">
            <div class="container">
                <template v-if="profile">
                    <ImageCard :imagePath="getImagePath(profile)" class="profile-card">
                        <template #content>
                            <template v-if="isTrainer | isClient">
                                <div class="profile-card__header">
                                    <h1 class="profile-card__name">{{ profile.first_name }} {{ profile.second_name }}</h1>
                                    <div class="profile-card__socials">
                                        <a v-if="profile.vk_link" :href="profile.vk_link"
                                            class="icon-button profile-card__socials-button">
                                            <VkontakteIcon />
                                        </a>
                                        <a v-if="profile.instagram_link" :href="profile.instagram_link" href="#!"
                                            class="icon-button profile-card__socials-button">
                                            <InstagramIcon />
                                        </a>
                                        <a v-if="profile.youtube_link" :href="profile.youtube_link" href="#!"
                                            class="icon-button profile-card__socials-button">
                                            <YoutubeIcon />
                                        </a>
                                    </div>
                                </div>
                                <p v-if="isTrainer" class="profile-card__title">{{ profile.trainer.title }}</p>
                                <p class="profile-card__description">{{ profile.description }}</p>
                            </template>
                            <template v-else>
                                <template v-if="isUserProfile">
                                    <h1 class="profile-card__name">Вы ещё не являетесь членом клуба? Оформите карту!</h1>
                                </template>
                                <template v-else>
                                    <h1 class="profile-card__name">Информация отсутствует</h1>
                                </template>
                            </template>
                            <template v-if="isUserProfile">
                                <div class="profile-card__buttons">
                                    <div class="profile-card__edit-button">
                                        <button class="text-button" @click="openEditProfileModal">редактировать</button>
                                    </div>
                                    <div class="profile-card__upload">
                                        <input type="file" name="image" class="text-button file-input">
                                        <button class="text-button" @click="uploadImage">Загрузить фото</button>
                                    </div>
                                </div>
                                <ModalWindow :isModalOpened="isModalEditProfileOpened"
                                    @update:isModalOpened="closeEditProfileModal">
                                    <template #header>
                                        <div class="modal__container">
                                            <div class="base-modal__heading">
                                                <h2 class="subtitle">Редактирование профиля</h2>
                                            </div>
                                        </div>
                                    </template>
                                    <template #content>
                                        <div class="modal__container">
                                            <EditProfileForm @onSubmit="onEditProfile" :profile="profile"
                                                :isTrainer="isTrainer" :isClient="isClient" />
                                        </div>
                                    </template>
                                </ModalWindow>
                            </template>
                        </template>
                    </ImageCard>
                </template>
                <AppLoader v-else />
            </div>
        </section>
    </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

import { getImagePath } from '@/services/utils.js';
import { useUserStore } from '@/stores/UserStore';

import EditProfileForm from '@/components/EditProfileForm.vue';

import YoutubeIcon from '@/assets/icons/YoutubeIcon.vue'
import VkontakteIcon from '@/assets/icons/VkontakteIcon.vue'
import InstagramIcon from '@/assets/icons/InstagramIcon.vue'

export default {
    components: {
        EditProfileForm,
        YoutubeIcon,
        VkontakteIcon,
        InstagramIcon
    },
    setup() {
        const userStore = useUserStore();
        const route = useRoute();

        const profile = ref(null);
        const isModalEditProfileOpened = ref(false);
        const message = ref('');

        const profileId = computed(() => route.params.id);
        const isUserProfile = computed(() => profile.value && Number(profileId.value) === Number(userStore.userId));
        const isTrainer = computed(() => profile.value && profile.value.trainer !== null);
        const isClient = computed(() => profile.value && profile.value.client !== null);

        const getUserProfile = async (userId) => {
            try {
                const response = await axios.get(`${import.meta.env.V_SERVER_API_URL}/users/${userId}`);
                profile.value = response.data;
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        };

        const openEditProfileModal = () => {
            isModalEditProfileOpened.value = true;
        };

        const closeEditProfileModal = () => {
            isModalEditProfileOpened.value = false;
        };

        const onEditProfile = async () => {
            await getUserProfile(profileId.value);
            closeEditProfileModal();
        };

        const uploadImage = async () => {
            try {
                const formData = new FormData();
                const fileInput = document.querySelector('.file-input');
                formData.append('image', fileInput.files[0]);

                const response = await axios.put(
                    `${import.meta.env.V_SERVER_API_URL}/images/${profile.value.image_id}`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
                message.value = response.data.message;
                window.alert('Картинка загружена. Обновите страницу')

                await getUserProfile(profileId.value);
            } catch (error) {
                console.error(error);
                message.value = (error.response && error.response.data.message) || error.message || error.toString();
                window.alert(message.value);
            }
        };

        onMounted(() => {
            getUserProfile(profileId.value);
        });

        return {
            profile,
            isModalEditProfileOpened,
            isUserProfile,
            isTrainer,
            isClient,
            getImagePath,
            openEditProfileModal,
            closeEditProfileModal,
            onEditProfile,
            uploadImage,
        };
    },
};
</script>