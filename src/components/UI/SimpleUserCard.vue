<template>
    <div class="user-card user-card-social-networks">
        <div class="image-container">
            <div class="user-card__social-networks">
                <a v-for="(socialLink, index) in user.socialLinks" :key="index"
                    class="user-card__social-network-link icon-button" :href="socialLink.url">
                    <component :is="socialLink.iconComponent" />
                </a>
            </div>
            <div class="user-card__content">
                <p class="user-card__name">{{ user.name }}</p>
                <p class="user-card__title">{{ user.title }}</p>
            </div>
            <div class="image-container__image">
                <img :src="user.imageSrc">
                <div class="image-container__overlay-color-tint-darken"></div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        user: Object
    }
}
</script>
  