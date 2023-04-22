<template>
    <section class="loading">
        <h2 class="loading__title">обработка результатов</h2>
        <v-loading/>
        <p class="loading__text">Определение стиля мышления.......... .......................................................</p>
    </section>
</template>

<script>
    import LoadingAnimation from './LoadingAnimation.vue';

    export default {
        name: 'Loading',
        components: {
            "v-loading": LoadingAnimation
        }
    }
</script>

<style scoped>
    .loading {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .loading__title {
        width: 237px;
        font-size: 23px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        color: #FFFFFF;
    }
    .loading__title::first-letter {
        text-transform: capitalize;
    }
    .loading__text {
        width: 276px;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        color: #FFFFFF;
    }
    .loading__text::first-letter {
        text-transform: capitalize;
    }
</style>