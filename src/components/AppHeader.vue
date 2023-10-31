<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="header__row">
                    <RouterLink :to="{ name: 'homeView' }" class="header__logo">
                        <MainLogoIcon />
                    </RouterLink>
                    <nav class="nav">
                        <RouterLink :to="{ name: 'workoutsView' }" class="nav__link" active-class="nav__link--active">
                            Тренировки
                        </RouterLink>
                        <RouterLink :to="{ name: 'trainersView' }" class="nav__link" active-class="nav__link--active">
                            Тренеры
                        </RouterLink>
                        <RouterLink :to="{ name: 'newsView' }" class="nav__link" active-class="nav__link--active">Новости
                        </RouterLink>
                        <RouterLink :to="{ name: 'aboutUsView' }" class="nav__link" active-class="nav__link--active">О нас
                        </RouterLink>
                        <RouterLink :to="{ name: 'howWeWorkView' }" class="nav__link" active-class="nav__link--active">Как
                            мы
                            работаем
                        </RouterLink>
                    </nav>
                    <div class="header__actions">
                        <template v-if="!loggedIn">
                            <button class="icon-button" @click="openAuthModal">
                                <AuthIcon />
                            </button>
                        </template>
                        <template v-else>
                            <RouterLink :to="{ name: 'profileView', params: { id: userId } }"
                                active-class="icon-button--active" class="icon-button">
                                <ProfileIcon />
                            </RouterLink>
                            <div>
                                <div class="settings-modal">
                                    <ModalWindow :isModalOpened="isModalSettingsOpened"
                                        @update:isModalOpened="closeSettingsModal">
                                        <template #header>
                                            <div class="modal__container">
                                                <div class="base-modal__heading">
                                                    <h2 class="subtitle">Сменить пароль</h2>
                                                </div>
                                            </div>
                                        </template>
                                        <template #content>
                                            <div class="modal__container">
                                                <SettingsForm @onSubmit="closeSettingsModal" />
                                            </div>
                                        </template>
                                    </ModalWindow>
                                </div>
                                <button class="icon-button" @click="openSettingsModal">
                                    <SettingsIcon />
                                </button>
                            </div>
                        </template>
                    </div>
                    <AuthModal v-if="!loggedIn" :isModalOpened="isModalAuthOpened" @update:isModalOpened="closeAuthModal" />
                    <MobileNav @openAuthModal="openAuthModal" />
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
import { computed, ref } from 'vue';

import { useUserStore } from '@/stores/UserStore';

import MainLogoIcon from '@/assets/icons/MainLogoIcon.vue'
import ProfileIcon from '@/assets/icons/ProfileIcon.vue'
import SettingsIcon from '@/assets/icons/SettingsIcon.vue'
import AuthIcon from '@/assets/icons/AuthIcon.vue'
import AuthModal from '@/components/AuthModal.vue'
import MobileNav from '@/components/MobileNav.vue'
import SettingsForm from '@/components/SettingsForm.vue'

export default {
    components: {
        MainLogoIcon,
        ProfileIcon,
        SettingsIcon,
        AuthIcon,
        AuthModal,
        MobileNav,
        SettingsForm
    },
    setup() {
        const userStore = useUserStore();
        const isModalAuthOpened = ref(false);
        const isModalSettingsOpened = ref(false);

        const openAuthModal = () => {
            isModalAuthOpened.value = true;
        };

        const closeAuthModal = () => {
            isModalAuthOpened.value = false;
        };

        const openSettingsModal = () => {
            isModalSettingsOpened.value = true;
        };

        const closeSettingsModal = () => {
            isModalSettingsOpened.value = false;
        };

        const loggedIn = computed(() => userStore.loggedIn);
        const userId = computed(() => userStore.userId);

        return {
            isModalAuthOpened,
            isModalSettingsOpened,
            openAuthModal,
            closeAuthModal,
            openSettingsModal,
            closeSettingsModal,
            loggedIn,
            userId
        };
    }
}
</script>
  