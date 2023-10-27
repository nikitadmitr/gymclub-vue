<template>
    <main>
        <HeroPreview :imagePath="'src/assets/images/default-header-img.jpg'">
            <h1 class="title">Новости</h1>
        </HeroPreview>
        <section class="section news-series">
            <div class="container">
                <div class="img-cards-block">
                    <ImageCard v-for="(singleNews, index) in totalNews" :key="index" :imagePath="singleNews.imagePath"
                        :class="{ 'img-card--reverse': index % 2 === 1 }">
                        <template #content>
                            <h1 class="subtitle section-subtitle">{{ singleNews.title }}</h1>
                            <p class="text">{{ singleNews.text }}</p>
                        </template>
                    </ImageCard>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

export default {
    data() {
        return {
            totalNews: [
                {
                    imagePath: 'src/assets/images/default-card-img.jpg',
                    title: 'Новый Филиал GymClub в Центре Города!',
                    text: 'GymClub открывает новый филиал в центре города! Мы рады объявить о расширении нашей сети фитнес клубов и предоставить вам еще больше возможностей для тренировок и достижения ваших целей.',
                },
                {
                    imagePath: 'src/assets/images/default-card-img.jpg',
                    title: 'Благотворительный Марафон в Поддержку Борьбы с Раком Груди',
                    text: 'У нас прошел благотворительный марафон в поддержку борьбы с раком груди. Благодарим всех участников, которые присоединились к этому важному событию и помогли нам собрать средства для поддержки исследований и лечения.',
                },
                {
                    imagePath: 'src/assets/images/default-card-img.jpg',
                    title: 'Расширенное Расписание Групповых Тренировок в GymClub',
                    text: 'Мы рады объявить о расширении нашего расписания групповых тренировок! Теперь вы можете выбрать из новых программ, таких как HIIT Blast, Yoga Flow и Functional Strength. Приходите и попробуйте их уже сегодня!',
                },
            ],
        };
    },
}
</script>