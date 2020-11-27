import { getCateList } from '../../util/axios'
const state = {
    cateList: [],
}

const getters = {
    getCateList(state) {
        return state.cateList
    },
}

const mutations = {
    GETCATELIST(state, payload) {
        state.cateList = payload
    },
}

const actions = {
    // 获取所有的管理员分页数据
    getCateListAction({ commit }, params) {
        getCateList(params).then(res => {
            if (res.data.code == 200) {
                commit('GETCATELIST', res.data.list)
            }
        })
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
    //命名空间
    namespaced: true
}
