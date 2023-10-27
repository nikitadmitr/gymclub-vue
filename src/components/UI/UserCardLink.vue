<template>
    <RouterLink :to="{ name: 'profileView', params: { id } }" class="user-card user-card-link">
        <div class="image-container">
            <div class="user-card__content user-card-link__content">
                <p class="user-card__name">{{ name }}</p>
                <p class="user-card__title">{{ title }}</p>
                <p class="user-card-link__description">{{ description }}</p>
            </div>
            <div class="image-container__image">
                <img :src="imagePath">
                <div class="image-container__ovarley-intense-darken"></div>
            </div>
        </div>
    </RouterLink>
</template>

<script>
export default {
    props: {
        id: Number,
        name: String,
        title: String,
        description: String,
        imagePath: String
    }
}
</script>