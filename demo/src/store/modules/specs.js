import { getSpecsList, getSpecsTotal } from '../../util/axios'
const state = {
    specsList: [],
    total: 0,
}

const getters = {
    getSpecsList(state) {
        return state.specsList
    },
    getSpecsTotal(state) {
        return state.total
    }
}

const mutations = {
    GETADMIN(state, payload) {
        state.specsList = payload
    },
    GETADMINTOTAL(state, payload) {
        state.total = payload
    }
}

const actions = {
    // 获取所有的管理员分页数据
    getSpecsListAction({ commit }, params) {
        getSpecsList(params).then(res => {
            if (res.data.code == 200) {
                console.log(res.data)
                commit('GETADMIN', res.data.list)
            }
        })
    },
    // 获取所有的管理员数据
    getSpecsTotalAction({ commit }) {
        getSpecsTotal().then(res => {
            if (res.data.code == 200) {
                commit('GETADMINTOTAL', res.data.list[0].total)
            }
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced: true
}
