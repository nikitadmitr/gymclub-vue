<template>
    <div class="auth-modal">
        <ModalWindow :isModalOpened="isModalOpened" @update:isModalOpened="closeModal">
            <template #header>
                <ul class="auth-modal__buttons">
                    <li class="auth-modal__button" :class="{ 'auth-modal__button--active': activeWindow == 'signIn' }"
                        @click="setActiveButton('signIn')">Войти
                    </li>
                    <li class="auth-modal__button" :class="{ 'auth-modal__button--active': activeWindow == 'signUp' }"
                        @click="setActiveButton('signUp')">создать
                    </li>
                </ul>
            </template>
            <template #content>
                <div ref="modalContent" class="auth-modal__content">
                    <div ref="signUp" class="auth-modal__form auth-modal__sign-up-form"
                        :class="{ 'auth-modal__sign-up-form--active': activeWindow == 'signUp' }">
                        <div class="modal__container">
                            <AppRegister />
                        </div>
                    </div>
                    <div ref="signIn" class="auth-modal__form auth-modal__sign-in-form"
                        :class="{ 'auth-modal__sign-in-form--active': activeWindow == 'signIn' }">
                        <div class="modal__container">
                            <AppLogin @onSubmit="closeModal" />
                        </div>
                    </div>
                </div>
            </template>
        </ModalWindow>
    </div>
</template>

<script>
import AppRegister from '@/components/AppRegister.vue'
import AppLogin from '@/components/AppLogin.vue'

export default {
    components: {
        AppRegister,
        AppLogin
    },
    props: {
        isModalOpened: Boolean
    },
    data() {
        return {
            activeWindow: '',
        }
    },
    methods: {
        setActiveButton(buttonName) {
            this.$refs.modalContent.style.height = this.$refs[buttonName].offsetHeight + 'px'
            this.activeWindow = buttonName;
        },
        closeModal() {
            this.$emit('update:isModalOpened', false);
        },
    },
    mounted() {
        this.setActiveButton('signIn')
    }
}
</script>