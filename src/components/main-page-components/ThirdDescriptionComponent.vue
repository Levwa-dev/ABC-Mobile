<template>
    <section class="description-three">
        <div class="description-three__text-content">
            <p class="description-three__first-text">Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span></p>
            <p class="description-three__second-text">Профессиональная интерпретация и детально <b>проработанные рекомендации</b> позволят вам качественно <b>изменить все аспекты своей жизни:</b> от финансового до любовного.</p>
        </div>
        <router-link to="/test" class="description-three__link">Пройти тест</router-link>
        <span class="description-three__year" >{{ year }}</span>
    </section>
</template>
  
<script>
export default {
    data () {
        return {
            year: 2023
        }
    },
    name: 'ThirdDescription',
    methods: {
        getCurrentYear() {
            const date = new Date()
            this.year = date.getFullYear()
        }
    },
    mounted () {
        this.getCurrentYear()
    }
}
</script>
  
<style scoped>
    .description-three {
        position: relative;
        font-family: 'Merriweather';
        font-weight: 400;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('../../assets/common/starry-sky.png');
    }
    .description-three::after {
        content: url('../../assets/main-page/lightning-right.png');
        position: absolute;
        top: 66px;
        right: 0px;
        height: 165px;
    }
    .description-three::before {
        content: url('../../assets/main-page/lightning-left.png');
        position: absolute;
        top: 274px;
        left: 0px;
        height: 155px;
    }
    .description-three__text-content {
        width: 304px;
        margin: 0 auto
    }
    .description-three__first-text {
        width:268px;
        padding-top: 56px;
        padding-bottom: 15px;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
    .description-three__first-text > span {
        color: #FFC700;
        font-weight: 700;
    }

    .description-three__second-text {
        margin: 0 auto;
        width: 274px;
        background: rgba(243, 243, 242, 0.8);
        border-radius: 20px;
        padding: 30px 15px;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #181818;
    }
    .description-three__link {
        display: block;
        margin: 0 auto;
        margin-top: 30px;

        width: 200px;
        height: 44px;
        border: 1px solid #FFFFFF;
        border-radius: 50px;

        font-weight: 700;
        font-size: 14px;
        line-height: 44px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #FFFFFF;
        text-decoration: none;
    }
    .description-three__year {
        padding-top: 50px;
        padding-bottom: 13px;
        width: 100px;
        text-align: center;
        display: block;
        margin: 0 auto;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 10px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: rgba(255, 255, 255, 0.5);
    }
    .description-three__year::before {
        content: '\00A9';
    }

    @media screen and (min-width: 700px) {
        .description-three__text-content {
            width: 474px;
        }
        .description-three__first-text {
            width:368px;
            font-size: 18px;
        }
        .description-three__second-text {
            width: 444px;
            font-size: 20px;
        }
    }
</style>
  