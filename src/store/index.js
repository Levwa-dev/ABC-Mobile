import { createStore } from 'vuex'
import { resultsModule } from './resultsModule'

export default createStore({
  state: {
    questions: [],
    currentQuestionId: 1,
    answers: [],
  },
  getters: {
    getCurrentQuestion: (state) => {
      return state.questions.find(item=>item.id === state.currentQuestionId)
    },

    getQuestionsQuantity: (state) => {
      return state.questions.length
    },

  },
  mutations: {
    setCurrentQuestion(state, payload) {
      state.currentQuestionId = payload
    },

    setQuestions(state, payload) {
      state.questions = payload.questions
    },

    addAnswer(state, payload) {
      state.answers.push(payload)
    },

    resetAnswerList(state) {
      state.answers = []
    },

  },
  actions: {
    getQuestions:({commit}, json) => {
      commit('setQuestions', json)
    },

    nextQuestion: ({state, commit}, payload) => {
      const {currentQuestionId} = state
      commit('setCurrentQuestion', currentQuestionId + 1)
      commit('addAnswer', payload)
    },

    resetTest: ({commit}) => {
      commit('setCurrentQuestion', 1)
      commit('resetAnswerList')
    }
  },
  modules: {
      result: resultsModule
  }
})
