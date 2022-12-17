import {Admin} from "@/classes/admin";
import {Commit} from "vuex";

export default {
    namespaced: true,
    state: {
        admin: new Admin()
    },
    getters: {

    },
    mutations: {
        SET_ADMIN: (state: {admin: Admin}, admin: Admin) => state.admin = admin
    },
    actions: {
        setAdmin: ({commit}: {commit: Commit}, admin: Admin) => commit('SET_ADMIN', admin)
    }
}