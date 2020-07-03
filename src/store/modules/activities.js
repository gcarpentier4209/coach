export default {
    state: {
        activities: []
    },
    getters: {
        activities: (state) => {
            return state.activities;
        }
    },
    mutations: {
        updateActivities(state, payload) {
            state.activities = payload;
        }
    },
    actions: {
        updateActivities({ commit }, payload) {
            commit('updateActivities', payload);
        }
    }
};
