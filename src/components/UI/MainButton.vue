<template>
    <button class="text-button" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    methods: {
        onClick(event) {
            this.$emit('onClick', event)
        }
    }
}
</script>