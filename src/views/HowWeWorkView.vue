<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">Как мы работаем</h1>
        </HeroPreview>
        <section class="section how-we-work-series">
            <div class="container">
                <div class="img-cards-block">
                    <ImageCard v-for="(stage, index) in stages" :key="index" :imagePath="stage.imagePath"
                        :class="cardClass(index)">
                        <template #content>
                            <div class="how-we-work-series__block-heading section-subtitle">
                                <div class="index-circle">
                                    <div class="index-circle__overlay" :style="calculateOverlayHeight(index)"></div>
                                    <div class="index-circle__circle"></div>
                                    <span class="index-circle__text">{{ formatIndex(index) }}</span>
                                </div>
                                <h1 class="how-we-work-series__block-heading-title subtitle">{{ stage.title }}</h1>
                            </div>
                            <p class="text">{{ stage.text }}</p>
                        </template>
                    </ImageCard>
                </div>
            </div>
        </section>
    </main>
</template>
  
<script>
import { ref } from "vue";

export default {
    setup() {
        const stages = ref([
            {
                imagePath: "src/assets/images/default-card-img.jpg",
                title: "Регистрация и получение абонемента",
                text: "На сайте GymClub вы можете зарегистрироваться и приобрести абонемент для доступа к нашим тренировкам и услугам. Вам предлагается два варианта регистрации: онлайн и офлайн.",
            },
            {
                imagePath: "src/assets/images/default-card-img.jpg",
                title: "Онлайн-регистрация",
                text: "На главной странице сайта заполните форму регистрации, введите имя, фамилию, адрес электронной почты и выберите абонемент. После регистрации вы получите электронное письмо с логином и паролем. Войдите в личный кабинет для доступа к онлайн-тренировкам и другим функциям.",
            },
            {
                imagePath: "src/assets/images/default-card-img.jpg",
                title: "Офлайн-регистрация",
                text: "При личной регистрации в клубе вы получите логин и пароль для доступа к онлайн-ресурсам GymClub.",
            },
            {
                imagePath: "src/assets/images/default-card-img.jpg",
                title: "Выбор тренировок и залов",
                text: "После регистрации и получения абонемента, вы сможете выбрать тренировки и залы, близкие к вам. На странице 'О продукции' представлено описание групповых, персональных и онлайн тренировок. Вы можете просмотреть расписание тренировок и выбрать удобное время и место. Для онлайн тренировок доступны видеозаписи и дополнительные материалы, а для залов – регулярные тренировки согласно расписанию.",
            },
            {
                imagePath: "src/assets/images/default-card-img.jpg",
                title: "Инструкции по использованию оборудования и безопасности",
                text: "В разделе 'Как мы работаем' предоставляются инструкции по использованию оборудования и правила безопасности для эффективных и безопасных тренировок.",
            },
        ]);

        const formatIndex = (index) => String(index + 1).padStart(2, "0");

        const calculateOverlayHeight = (index) => {
            const totalItems = stages.value.length;
            const height = ((totalItems - index - 1) / totalItems) * 100;
            return { height: `${height}%` };
        };

        const cardClass = (index) => ({
            "img-card--reverse": index % 2 === 1,
        });

        return {
            stages,
            formatIndex,
            calculateOverlayHeight,
            cardClass,
        };
    },
};
</script>
  