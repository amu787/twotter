import { createStore } from 'vuex'
import { UserModule } from './user'

export default createStore({
  state: {},

  // mutation functions effect the STATE
  mutations: {},

  // action functions are called through out the application to call mutations
  actions: {},

  modules: {
    User: UserModule
  }

})
