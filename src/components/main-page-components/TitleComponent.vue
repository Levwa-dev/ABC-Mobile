<template>
  <section class="title">
    <h2 class="title__second">Пройдите точный и быстрый</h2>
    <h1 class="title__first">тест на определение IQ</h1>
    <img class="title__brain" src="@/assets/common/brain.png"/>
    <v-button @click="$router.push('/test')" :isActive="true">Пройти тест</v-button>
    <p class="title__description"><span>и получите рекомендации<br/>по развитию своего интеллекта<br/></span> и улучшению финансового благосостояния и личной жизни</p>
    <router-link class="title__more-info" to="/">
        <div class="title__arrow">
            <img src="./../../assets/main-page/arrow.svg" alt = "Arrow">
        </div>
        подробнее
    </router-link>
  </section>
</template>

<script>
import MainPageButton from '../ui-components/buttons/MainPageButton.vue';

export default {
    name: 'TitleMainComponent',
    components:{
        'v-button': MainPageButton
    },
   
}
</script>

<style scoped>
    .title {
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('./../../assets/common/starry-sky.png');
    }
    .title__second {
        font-family: 'PT Serif';
        padding: 27px 0;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .title__first {
        margin: 0 auto;
        font-family: 'Yeseva One';
        font-weight: 400;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #FFC700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        width: 252px;
    }
    .title__brain {
        z-index: 0;
        display: block;
        width: 155px;
        height: 120px;
        margin:0 auto;
        margin-top: 10px;
        margin-bottom: 30px;
        filter: drop-shadow(0 0 6rem #2950C2);
    }
    .title__description {
        width: 286px;
        margin: 0 auto;
        margin-top: 22px;
        margin-bottom: 12px;
        font-family: 'PT Serif';
        font-weight: 700;
        font-size: 15px;
        line-height: 19px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .title__description > span {
        color: #FFC700;
    }
    .title__second::first-letter,
    .title__description::first-letter {
        text-transform: capitalize;
    }
    .title__more-info {
        display: block;
        margin: 0 auto;
        padding-bottom: 11px;
        cursor: pointer;
        font-family: 'PT Serif';
        font-weight: 400;
        font-size: 8px;
        line-height: 11px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-decoration: none;
    }
    .title__arrow {
        width: 16px;
        height: 16px;
        background-color: #FFFFFF;
        border-radius: 50%;
        margin: 0 auto;
        margin-bottom: 3px;
        display: grid;
        place-content: center;
    }
    @media screen and (min-width: 700px) {
        .title__second {
            font-size: 22px;
            line-height: 28px;
        }
        .title__first {
            font-size: 34px;
            line-height: 36px;
            width: 252px;
        }
        .title__brain {
            width: 205px;
            height: 160px;
        }
        .title__description {
            width: 326px;
            font-size: 18px;
            line-height: 24px;
        }
        .title__more-info {
            font-size: 12px;
            line-height: 14px;
        }
        .title__arrow {
            width: 20px;
            height: 20px;
        }
    }
</style>
