<template>
    <main>
        <section class="section home-hero">
            <MainSlider />
        </section>
        <section class="section home-welcome section-mt">
            <div class="container">
                <ImageCard :imagePath="'src/assets/images/default-card-img.jpg'">
                    <template #content>
                        <h1 class="subtitle section-subtitle">Добро пожаловать в GymClub</h1>
                        <p class="text">GymClub - современный фитнес клуб, который поможет вам достичь ваших целей в
                            области фитнеса и здорового образа жизни. Мы предлагаем широкий спектр тренировок,
                            профессиональных тренеров и удобные условия для достижения ваших целей. Независимо от вашего
                            уровня подготовки, у нас вы найдете все необходимое для эффективной тренировки и достижения
                            желаемых результатов.</p>
                    </template>
                </ImageCard>
            </div>
        </section>
        <section class="section home-reviews section-mt">
            <ReviewsSlider />
        </section>
        <section class="section home-tariffs section-mt">
            <div class="container">
                <AppTariffs />
            </div>
        </section>
        <section class="section home-concact-us section-mt">
            <div class="container">
                <ContactForm />
            </div>
        </section>
    </main>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue'
import ReviewsSlider from '@/components/ReviewsSlider.vue'
import AppTariffs from '@/components/AppTariffs.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
    components: {
        MainSlider,
        ReviewsSlider,
        AppTariffs,
        ContactForm,
    },
}
</script>