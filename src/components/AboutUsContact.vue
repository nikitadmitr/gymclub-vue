<template>
    <div class="about-us-contact__row">
        <div class="about-us-contact__info">
            <div class="about-us-contact__info-row">
                <h2 class="subtitle section-title">Информация</h2>
                <div class="about-us-contact__info-row__content">
                    <p class="footer__info-item-block footer__phone">Телефон: +7 (988) 245 63-25</p>
                    <p class="footer__info-item-block footer__email">Электронная почта: gymclub@gmail.com</p>
                </div>
            </div>
            <div class="about-us-contact__info-row">
                <h2 class="subtitle section-title">Адрес</h2>
                <div class="about-us-contact__info-row__content">
                    <p class="footer__info-item-block footer__address">Адрес: ул. Спортивная, 10, г. Москва</p>
                </div>
            </div>
        </div>
        <div class="about-us-contact__form">
            <h2 class="subtitle section-title">Напишите нам</h2>
            <form class="main-form" @submit.prevent="submitForm">
                <div class="main-form__input">
                    <input class="main-input" v-model="formData.name" placeholder="Имя" type="text">
                </div>
                <div class="main-form__input">
                    <input class="main-input" v-model="formData.email" placeholder="Email" type="email">
                </div>
                <div class="about-us-contact__form-textarea main-form__input--wide">
                    <textarea class="main-input" v-model="formData.report" placeholder="Сообщение"></textarea>
                </div>
                <div class="main-form__input">
                    <input class="text-button" type="submit" value="Отправить">
                </div>
            </form>
        </div>
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
            report: '',
        });

        return { formData };
    },
};
</script>