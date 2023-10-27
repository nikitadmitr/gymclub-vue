<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">О нас</h1>
        </HeroPreview>
        <section class="section about-us-main-info">
            <div class="container">
                <AboutUsMainInfo />
            </div>
        </section>
        <section class="section about-us-reviews">
            <ReviewsSlider />
        </section>
        <section class="section about-us-creators">
            <div class="container">
                <CreatorsCards />
            </div>
        </section>
        <section class="section about-us-maps">
            <YandexMap />
        </section>
        <section class="section about-us-contact">
            <div class="container">
                <AboutUsContact />
            </div>
        </section>
    </main>
</template>

<script>
import AboutUsMainInfo from '@/components/AboutUsMainInfo.vue';
import ReviewsSlider from '@/components/ReviewsSlider.vue'
import CreatorsCards from '@/components/CreatorsCards.vue'
import YandexMap from '@/components/YandexMap.vue'
import AboutUsContact from '@/components/AboutUsContact.vue';

export default {
    components: {
        AboutUsMainInfo,
        ReviewsSlider,
        CreatorsCards,
        YandexMap,
        AboutUsContact,
    },
}
</script>