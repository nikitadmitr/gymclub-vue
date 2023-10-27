<template>
    <div class="mobile-nav">
        <div @click="toggleNav" class="mobile-nav__overlay" :class="{ 'mobile-nav__overlay--visible': isNavOpened }"></div>
        <button for="burger-toggle" class="burger-button" @click="toggleNav">
            <span class="burger-button__icon" :class="{ 'burger-button__icon--active': isNavOpened }">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </span>
        </button>
        <nav class="mobile-nav__menu" :class="{ 'mobile-nav__menu--active': isNavOpened }">
            <template v-if="!loggedIn">
                <a class="mobile-nav__link" href="#" @click="openAuthModal">Войти в аккаунт</a>
            </template>
            <template v-else>
                <router-link :to="{ name: 'profileView', params: { id: userId } }" class="mobile-nav__link"
                    active-class="mobile-nav__link--active" href="#!">Профиль</router-link>
                <a class="mobile-nav__link" href="#!">Настройки</a>
            </template>
            <router-link :to="{ name: 'workoutsView' }" class="mobile-nav__link"
                active-class="mobile-nav__link--active">Тренировки</router-link>
            <router-link :to="{ name: 'trainersView' }" class="mobile-nav__link"
                active-class="mobile-nav__link--active">Тренеры</router-link>
            <router-link :to="{ name: 'newsView' }" class="mobile-nav__link"
                active-class="mobile-nav__link--active">Новости</router-link>
            <router-link :to="{ name: 'aboutUsView' }" class="mobile-nav__link" active-class="mobile-nav__link--active">О
                нас</router-link>
            <router-link :to="{ name: 'howWeWorkView' }" class="mobile-nav__link"
                active-class="mobile-nav__link--active">Как мы работаем</router-link>
        </nav>
    </div>
</template>
  
<script>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router'

import { useUserStore } from '@/stores/UserStore';

export default {
    setup(props, context) {
        const userStore = useUserStore();

        const isNavOpened = ref(false);

        const loggedIn = computed(() => userStore.loggedIn);
        const userId = computed(() => userStore.userId);

        const toggleNav = () => {
            isNavOpened.value = !isNavOpened.value;
        };

        const openAuthModal = () => {
            context.emit('openAuthModal')
        };

        watch(useRouter().currentRoute, () => {
            isNavOpened.value = false;
        });

        return {
            isNavOpened,
            loggedIn,
            userId,
            toggleNav,
            openAuthModal
        };
    }
};
</script>
  