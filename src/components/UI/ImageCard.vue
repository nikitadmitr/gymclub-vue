<template>
    <div class="img-card">
        <div class="img-card__content-wrapper">
            <div class="img-card__content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="img-card__image">
            <div class="image-container">
                <div class="image-container__image">
                    <img :src="imagePath">
                </div>
                <div class="image-container__overlay-subtle-darken">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imagePath: String
    }
}
</script>