import axios from 'axios'
export default {
  post(url, params) {
    return axios({
      url: url,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(params)
    })
  },
  get(url, params) {
    return axios({
      url: url,
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(params)
    })
  }
}
