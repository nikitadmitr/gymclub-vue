<template>
    <div>
        <h2 class="subtitle section-title">Напишите нам</h2>
        <form class="main-form home-contact-us__form" @submit.prevent="submitForm">
            <div class="main-form__input">
                <input v-model="formData.name" class="main-input" placeholder="Имя" type="text">
            </div>
            <div class="main-form__input">
                <input v-model="formData.email" class="main-input" placeholder="Email" type="email">
            </div>
            <div class="main-form__input">
                <input v-model="formData.phone" class="main-input" placeholder="Телефон" type="tel">
            </div>
            <div class="home-concact-us__textarea main-form__input--wide">
                <textarea v-model="formData.report" class="main-input" placeholder="Сообщение"></textarea>
            </div>
            <div class="main-form__input">
                <input class="text-button" type="submit" value="Отправить">
            </div>
        </form>
    </div>
</template>
  
<script>
import { ref } from 'vue';

import formMixin from '@/mixins/formMixin.js';

export default {
    mixins: [formMixin],
    setup() {
        const formData = ref({
            name: '',
            email: '',
            phone: '',
            report: '',
        });

        return { formData };
    },
};
</script>
  