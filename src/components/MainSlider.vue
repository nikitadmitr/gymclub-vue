<template>
    <div class="main-slider">
        <div class="container">
            <div class="main-slider__content">
                <p class="main-slider__text">Получите месяц бесплатных тренировок при покупке годового абонемента!</p>
                <MainButton>Получить</MainButton>
            </div>
        </div>
        <Swiper :autoplay="autoplay" :speed="speed" :modules="modules" :pagination="pagination" :loop="loop"
            :navigation="navigation" :slides-per-view="slidesPerView" :space-between="spaceBetween" @swiper="onSwiper"
            @slideChange="onSlideChange" class="main-slider__swiper">
            <div class="swiper-button-prev main-slider__prev"></div>
            <div class="swiper-button-next main-slider__next"></div>
            <SwiperSlide v-for="(image, index) in sliderImages" :key="index">
                <div class="image-container">
                    <div class="image-container__image">
                        <img :src="image.src">
                    </div>
                    <div class="image-container__overlay-gradient-darken"></div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<script>
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
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
            navigation: { prevEl: '.main-slider__prev', nextEl: '.main-slider__next' },
            pagination: {
                clickable: true,
                bulletClass: 'main-slider__pagination-bullet',
                bulletActiveClass: 'main-slider__pagination-bullet--active',
                horizontalClass: 'main-slider__pagination-horizontal'
            },
            autoplay: { delay: 10000 },
            modules: [Navigation, Pagination, Autoplay],
            sliderImages: [
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
                { src: "src/assets/images/home-hero-slider-img1.jpg" },
            ],
        };
    },
};
</script>
