<template>
    <section class="result">
        <v-loading v-if="resultState.isLoading" class="result__loader"/>
        <v-user-info v-else-if="resultState.result || resultState.error" :data="resultState"/>
        <div v-else class="result__wrapper">
            <v-result-description/>
            <v-timer/>
            <button @click="getUserResult" class="result__call">
                <p class="result__call-text">Позвонить и прослушать результат</p>
            </button>
        </div>
        <v-footer/>
    </section>
</template>

<script>
    import LoadingAnimation from './loading-component/LoadingAnimation.vue';
    import ResultDescription from './result-page-components/ResultDescription.vue';
    import TimerComponent from './result-page-components/TimerComponent.vue';
    import FooterComponent from '../components/footer-component/FooterComponent.vue'
    import UserInfo from './result-page-components/UserInfo.vue'

    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ResultPage',
        components: {
            'v-loading': LoadingAnimation,
            'v-footer': FooterComponent,
            'v-user-info': UserInfo,
            'v-timer': TimerComponent,
            'v-result-description': ResultDescription
        },
        computed: {
            ...mapGetters({
               resultState : 'result/getState'
            })
        },
        methods: {
            ...mapActions({
                getUserResult: 'result/fetchResult'
            })
        }
    }
</script>

<style scoped>
    .result {
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('@/assets/common/starry-sky.png');
        min-height: 99vh;
        min-height: calc(100vh - 47px);
    }
    .result__wrapper::before {
        content: url('@/assets/result-page/lightning-left.png');
        position: absolute;
        z-index: 0;
        top:54%;
        left: 0;
        width: 165px;
        height: 165px;
    }
    .result__wrapper::after {
        content: url('@/assets/result-page/lightning-right.png');
        position: absolute;
        top: 59%;
        z-index: 0;
        right: 1px;
        width: 85px;
        height: 165px;
    }
    .result__wrapper {
        width: 291px;
        margin: 0 auto;
    }
    .result__call {
        position: relative;
        width: 290px;
        height: 92px;
        background: #EB1B00;
        border: none;
        border-radius: 5px;
        margin-bottom: 160px;
        z-index: 5;
    }
    .result__call-text {
        width: 206px;
        position: relative;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        text-align: start;
        margin-left: 62px;
        cursor: pointer;
    }
    .result__call-text::before {
        position: absolute;
        content: url('@/assets/result-page/telephone.svg');
        width: 29px;
        height: 29px;
        top: 5px;
        left: -47px;
    }
    .result__loader {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media screen and (min-width: 400px) {
     .result__call-text {
        margin-left: 52px;
        width: 235px;
        font-size: 17px;
     }
     .result__call-text::before {
        left: -44px;
     }
     .result__wrapper::before {
        top:67%;
     }
    .result__wrapper::after {
        top: 70%;
     }
    }
</style>