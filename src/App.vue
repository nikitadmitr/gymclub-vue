<template>
    <AppHeader />
    <RouterView v-slot="{ Component }">
        <transition name="router-transition" mode="out-in">
            <component :key="$route.fullPath" :is="Component" />
        </transition>
    </RouterView>
    <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>