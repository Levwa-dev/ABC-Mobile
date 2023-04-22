<template>
    <article class="description">
        <h2 class="description__title">Ваш результат рассчитан:</h2>
        <p class="description__profile"><span>вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! </p>
        <h2 class="description__action">Скорее получите свой результат!</h2>
        <p class="description__confidence">В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона</p>
    </article>
</template>

<script>
    export default {
        name: 'ResultDescription'
    }
</script>

<style scoped>
    .description {
        font-family: 'PT Serif';
        font-weight: 400;
    }
    .description__title {
        padding-top: 30px;
        font-weight: 700;
        font-size: 15px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .description__profile {
        margin-top: 13px;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        text-transform: lowercase;
        color: #FFFFFF;
    }
    .description__profile::first-letter {
        text-transform: capitalize;
    }
    .description__profile > span {
        text-decoration-line: underline;
    }
    .description__action {
        margin-top: 22px;
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #3BDE7C;
    }
    .description__confidence {
        width: 256px;
        padding: 15px;
        background: #1C2741;
        border-radius: 6px;
        margin: 0 auto;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 8px;
        line-height: 14px;
        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #FFFFFF;   
    }
    @media screen and (min-width: 400px) {
        .description__title {
            margin-bottom: 30px;
            font-size: 18px;
            line-height: 22px;
        }
        .description__profile {
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 20px;
        }
        .description__action  {
            margin-bottom: 30px;
            font-size: 22px;
            line-height: 30px;
        }
        .description__confidence {
            font-size: 12px;
            line-height: 18px;
        }
    }
</style>

