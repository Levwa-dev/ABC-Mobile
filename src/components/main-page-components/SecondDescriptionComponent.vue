<template>
    <section class="description-two">
        <p class="description-two__text">Также по результатам теста
            <br/><span>вы получите</span> подробные <span>советы</span> по определению наиболее перспективной <span>для вашего типа</span> <b>интеллекта</b> <span>сферы деятельности</span>,<br/> 
            которая принесет вам скорейший финансовый результат.
        </p>
        <img class="description-two__img" src="@/assets/main-page/brain-analisys.png" alt="Brain analysis">
        <router-link to="/test" class="description-two__btn">Пройти тест</router-link>
   </section>
</template>

<script>
  
export default {
    name: 'SecondDescription',
}
</script>
  
<style scoped>
    .description-two__text{
        padding: 40px 0;
        width: 298px;
        margin: 0 auto;
        font-family: 'PT Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: #272727;
    }
    .description-two__text > span {
        text-transform: uppercase;
        font-weight: 700;
    }
    .description-two__img {
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
    }
    .description-two__btn {
        text-decoration: none;
        display: block;
        margin: 0 auto;
        margin-bottom: 40px;
        width: 200px;
        height: 44px;
        background: #FFC700;
        border-radius: 50px;

        font-family: 'Merriweather';
        font-weight: 700;
        font-size: 14px;
        line-height: 44px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #0D0C11;
    }
    @media screen and (min-width: 700px) {
        .description-two__text{
            width: 498px;
            font-size: 19px;
            line-height: 28px;
        }
        .description-two__img {
            width: 340px;
            height: 250px;
        }
    }
</style>
  