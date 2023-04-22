import axios from "axios"
import resultService from "@/services/result-service"

export const resultsModule = {
    state: () => ({
        isLoading: false,
        result: '',
        error: ''
    }),
    getters: {
        getState (state) {
            return state
        }
    },
    mutations: {
        setLoading (state) {
            state.isLoading = true
        },
        setResult (state, payload) {
            state.result = payload
            state.error = ''
            state.isLoading = false
        },
        setError (state, payload) {
            state.error = payload
            state.isLoading = false
        },
        resetState (state) {
            state.error = ''
            state.isLoading = false
            state.result = ''
        }
    },
    actions: {
        async fetchResult ({commit}) {
            try {
                commit('setLoading')
                const {data} = await axios.get('https://swapi.dev/api/people/1/')
                data.homeworld = await resultService.getHomeworld(data.homeworld)
                data.species = await resultService.getDetailsFromList(data.species, 'name')
                data.films = await resultService.getDetailsFromList(data.films, 'title')
                data.vehicles = await resultService.getDetailsFromList(data.vehicles, 'name')
                data.starships = await resultService.getDetailsFromList(data.starships, 'name')
                commit('setResult', data)
            } catch (e) {
                commit('setError', 'Возникла ошибка, попробуйте позже')
            }
        },
        resetState ({commit}) {
            commit('resetState')
        }
    },
    namespaced: true
}