import { routerRedux } from 'dva/router'

export default {
  namespace: 'login',
  state: {
    status: undefined
  },
  effects: {
    *login({payload}, {call, put}) {
      debugger
      console.log(payload)
    }
  }
}
