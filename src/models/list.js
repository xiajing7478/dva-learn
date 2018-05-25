export default {
  namespace: 'lists',
  state: [

  ],
  reducers: {
    add(state, { payload: name }){
      // debugger
      let id = state.reduce( (previous,current) => previous.id > current.id ? previous : current).id;
      id++;
      // return state.lists.concat({name,id})
      // console.log(state.lists.concat({name, id}))
      // console.log(state)
      return [...state, { name, id}];
    },
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    *save({ payload: name }, { put, call }) {
      debugger
      // yield call(tosoServer, name)
      yield put({ type: 'add', payload: name })
    }
  }
};
