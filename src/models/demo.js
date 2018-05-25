export default {
  namespace: 'demo',
  state:{
    lists:['demo','java']
  },
  reducers: {
    add(state, {payload: name}) {
      let lists = state.lists.concat(name)
      return {...state, lists}
    }
  }
}
