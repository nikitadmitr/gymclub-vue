<template>
    <div class="reviews-slider">
        <Swiper :slides-per-view="slidesPerView" :pagination="pagination" :loop="loop" :space-between="spaceBetween"
            :speed="speed" :autoplay="false" :modules="modules" class="reviews-slider__swiper">
            <SwiperSlide v-for="(review, index) in reviews" :key="index">
                <div class="image-container">
                    <div class="image-container__content container">
                        <div class="reviews-slider__review">
                            <div class="reviews-slider__quote">
                                <p class="reviews-slider__quote-text">{{ review.text }}</p>
                                <p class="reviews-slider__quote-author">{{ review.author }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="image-container__image">
                        <img :src="review.imageSrc">
                        <div class="image-container__overlay-intense-darken"></div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    methods: {
        onSwiper(swiper) {
        },
        onSlideChange() {
        },
    },
    data() {
        return {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 50,
            speed: 700,
            pagination: {
                clickable: true,
                bulletClass: 'reviews-slider__pagination-bullet',
                bulletActiveClass: 'reviews-slider__pagination-bullet--active',
                horizontalClass: 'reviews-slider__pagination-horizontal'
            },
            autoplay: { delay: 10000 },
            modules: [Pagination, Autoplay],
            reviews: [
                {
                    text: "Я присоединилась к GymClub несколько месяцев назад, и это было одно из лучших решений, которые я когда-либо принимала! Великолепная команда тренеров, которые всегда поддерживают и мотивируют меня на каждой тренировке. Я видела значительные результаты в своей физической форме и чувствую себя более энергичной и уверенной в себе. Рекомендую GymClub всем, кто хочет достичь своих фитнес-целей!",
                    author: "Анастасия Иванова",
                    imageSrc: "src/assets/images/image-review-background1.jpg"
                },
                {
                    text: "Присоединился к GymClub пару месяцев назад, и это действительно изменило мою жизнь. Тренеры здесь - настоящие профессионалы, всегда готовые поддержать и помочь. Мои результаты в фитнесе улучшились, я стал более крепким и энергичным. Спасибо GymClub, рекомендую всем!",
                    author: "Никита Дмитриев",
                    imageSrc: "src/assets/images/image-review-background1.jpg"
                },
                {
                    text: "Не могу достаточно похвалить GymClub! Здесь не только потрясающие тренеры, но и дружелюбная атмосфера. Мои фитнес-цели стали ближе благодаря им, и я почувствовал прилив энергии и уверенности. Если ищете место для тренировок, это лучший выбор!",
                    author: "Артемий Лебедев",
                    imageSrc: "src/assets/images/image-review-background1.jpg"
                },
            ],
        };
    },
};
</script>