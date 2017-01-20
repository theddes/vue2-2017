import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const actions = {
    incrementAsync ({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 200)
    }
}

const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    }
}

const getters = {
    much_count: state => state.count > 10,
    little_count: state => state.count < -10
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
