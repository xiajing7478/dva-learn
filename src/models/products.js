import dva from 'dva'
export default {
  namespace: 'products',
  state: [
            { name: 'dva', id: 1 },
            { name: 'antd', id: 2 }
         ],
  reducers: {
    'delete'(state, { payload:id }) {
      return state.filter(item=> item.id !== id)
    },
    'add'(state, {payload: todo}) {
      console.log('payload', todo)
      // return state.push(todo)
      return [...state, todo]
    }
  }
}
