import { routerRedux } from 'dva/router'
import { fakeAccountLogin } from '../services/api'
import Api from '../services/api'
export default {
  namespace: 'login',
  state: {
    status: false,
    msg: 'goHome'
  },
  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call (fakeAccountLogin, payload)
      console.log(response)
      if (response.code === '000000') {
        yield put ({
          type: 'changeLoginStatus',
          payload: payload
        })
      }
    }
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        status: true,
        username: payload.phone
      }
    }
  }
}
