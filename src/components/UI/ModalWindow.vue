<template>
    <div class="modal">
        <div class="modal__overlay" :class="{ 'modal__overlay--visible': isModalOpened }" @click="closeModal"></div>
        <div class="modal__block" :class="{ 'modal__block--visible': isModalOpened }">
            <span class="close-button modal__close-button" @click="closeModal"> </span>
            <div class="modal__header">
                <slot name="header" />
            </div>
            <div class="modal__content">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isModalOpened: { type: Boolean, default: false }
    },
    methods: {
        closeModal() {
            this.$emit('update:isModalOpened', false);
        }
    }
}
</script>