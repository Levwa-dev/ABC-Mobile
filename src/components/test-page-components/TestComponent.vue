<template>
    <section class="test" :class="{test_done: done}">
        <progress :max="getQuestionsQuantity" :value="currentQuestionId" class="test__progress"></progress>
        <v-loading v-if="done"/>
        <template v-else>
            <article class="test__body">

                <h2 class="test__question">{{getCurrentQuestion.question}}</h2>
                <img class="test__image" v-if="getCurrentQuestion.picture" :src="require(`@/assets/${getCurrentQuestion.picture}`)"/>

                <v-number-inputs v-if="getCurrentQuestion.valueAsNumber" ref="input" @setInputValue="setCurrentValue"  :options="getCurrentQuestion.probabilityAnswers"/>
                <v-color-inputs v-else-if="getCurrentQuestion.colors" ref="input" @setInputValue="setCurrentValue"  :options="getCurrentQuestion.probabilityAnswers"/>
                <v-common-input v-else ref="input" @setInputValue="setCurrentValue"  :options="getCurrentQuestion.probabilityAnswers"/>

            </article>
            <v-button class="test__btn" :isActive="currentValue ? true : false"  @click="moveToNextQuestion">Далее</v-button>
        </template>
    </section>
</template>
  
<script>
    import Loading from '../loading-component/Loading.vue';
    import ColorInputs from '../ui-components/inputs/ColorInputs.vue'
    import NumberInputs from '../ui-components/inputs/NumberInputs.vue'
    import MainPageButton from '../ui-components/buttons/MainPageButton.vue';
    import CommonInputs from '../ui-components/inputs/Common-inputs.vue';
    import {mapState, mapGetters, mapActions} from 'vuex'
    import { onBeforeRouteLeave } from 'vue-router'
    import json from '@/questions.json'

    export default {
        name: 'TestComponent',
        components: {
            'v-loading': Loading,
            'v-color-inputs': ColorInputs,
            'v-number-inputs': NumberInputs,
            'v-common-input': CommonInputs,
            "v-button": MainPageButton,
        },
        data () {
            return {
                currentValue:'',
                done: false
            }
        },
        methods: {
            setCurrentValue (value) {
                this.currentValue = value
            },
            moveToNextQuestion () {
                if(this.currentQuestionId === this.getQuestionsQuantity) {
                    window.removeEventListener('beforeunload', this.onReload)
                    this.done = true
                }
                else{
                    const {question} = this.getCurrentQuestion
                    const answer = {question, answer:this.currentValue}
                    this.currentValue = ''
                    this.$refs.input.inputValue = ''
                    this.nextQuestion(answer)
                }
            },
            onReload (e) {
                e.preventDefault()
                e.returnValue = ''
                return confirm("Confirm refresh");
            },
            async mockRequestToEvaluateResult () {
                // Имитация запроса на сервер
                const promise = new Promise((resolve, reject)=>{
                    setTimeout(()=>resolve('Ответ'), 2000)
                })

                try {
                    // Обработать запрос
                    console.log(await promise)
                    this.$router.push('/result')
                } catch (error) {
                    // Показать сообщение про ошибку
                }
            },
            ...mapActions({
                getQuestions: 'getQuestions',
                nextQuestion: 'nextQuestion',
                resetTest: 'resetTest'
            })
        },
        computed: {
            ...mapState({
                currentQuestionId: state => state.currentQuestionId,
            }),
            ...mapGetters({
                getCurrentQuestion: 'getCurrentQuestion',
                getQuestionsQuantity: 'getQuestionsQuantity'
            }),
        },
        setup () {
            // Предупреждаем про сброс результатов теста при смене страницы.
            onBeforeRouteLeave((to, from) => {
                if(to.path !== '/result'){
                    const answer = window.confirm('Результаты теста будут сброшены. Покинуть страницу?')
                    if(!answer)return false
                }
            })
        },
        created () {
            this.getQuestions(json)
             // Предупреждаем про сброс результатов теста при перезагрузке
            window.addEventListener('beforeunload', this.onReload)
        },
        beforeUnmount () {
            window.removeEventListener('beforeunload', this.onReload)
            // Обнулить тест
            this.resetTest()
        },
        watch: {
            // Имитация функции расчета результата
            done () {
                this.mockRequestToEvaluateResult()
            }
        }
    }
</script>

<style scoped>
    .test {
        display: grid;
        grid-template-rows: (30px, auto, 200px);
        font-family: 'PT Serif';
        font-weight: 400;
        padding-top: 17px;
        min-height: calc(100vh - 63px);
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('../../assets/common/starry-sky.png');
    }
    .test_done {
        align-items: start;
    }
    .test__btn {
        margin-top: auto;
        margin-bottom: 25px;
    }
    .test__image {
        width: 220px;
        height: auto;
        margin-bottom: 25px;
    }
    .test__body {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 26px;
    }
    .test__question {
        width: 280px;
        margin: 0 auto;
        margin-bottom: 40px;
        font-size: 20px;
        line-height: 31px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: lowercase;
        color: #FFFFFF;
    }
    .test__question::first-letter {
        text-transform: capitalize;
    }
    .test__progress{
        display: block;
        width:260px;
        height: 11px;
        margin: 0 auto;
        margin-bottom: 17px;
        border-radius: 10.5px;
    }
    .test__progress[value]::-webkit-progress-bar {
        background-color: rgba(242, 243, 243, 0.59)
    }
    .test__progress[value]::-webkit-progress-value {
        background: rgba(59, 222, 124, 1);
    }
    .test__progress[value]::-webkit-progress-bar,
    .test__progress[value]::-webkit-progress-value {
        border-radius: 10.5px;
    }
    @media screen and (min-width: 700px) {
        .test__body {
            width: 80%;
            margin:0 auto;
        }
    }
</style>
  