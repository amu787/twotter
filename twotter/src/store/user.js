 export const UserModule = {

    namespaced: true,

    state: {
        user: null
      },
    
      // mutation functions effect the STATE
      mutations: {
        SET_USER(state, user) {
          state.user = user;
        }
      },
    
      // action functions are called through out the application to call mutations
      actions: {
        setUser({ commit }, user) {
          commit('SET_USER', user);
        }
      },

 }