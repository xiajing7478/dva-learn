// import { stringify } from 'qs'
import request from './fetch'
// import axios from 'axios'
export async function fakeAccountLogin(params) {
  // return request('https://testenv.gjmetal.com/sso/login', {
  //   method: 'POST',
  //   body: params
  // })
  return request.post('https://testenv.gjmetal.com/sso/login', params)
                .then( res => {
                  return res.data
                })
}


