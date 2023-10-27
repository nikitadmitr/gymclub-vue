<template>
    <section class="hero-preview">
        <div class="image-container">
            <div class="image-container__content container">
                <slot></slot>
            </div>
            <div class="image-container__image">
                <img :src="imagePath">
                <div class="image-container__overlay-color-tint-darken"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        imagePath: String
    }
}
</script>