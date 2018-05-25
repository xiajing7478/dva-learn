app.model({
  namespace: 'todo',
  state: {
    todos: [],
    loading: false
  }, // 初始值，优先级低于传给 dva() 的 opts.initialState。
  // 以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。
  // 由 action 触发。
  reducers: {
    add(state, {payload: todo}) {
      // 保存数据到state
      return [...state, todo]
    },
    remove(state, {payload: id}) {
      return state.filter(todo => todo.id !== id)
    },
    update(state, {payload: updatedTodo}) {
      return state.map(todo => {
        if (todo.id === updatedTodo) {
          return { ...todo, ...updatedTodo}
        } else {
          return todo
        }
      })
    }
  },
  // 以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。
  // 由 action 触发，可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等
  effects: {
    *save({payload: todo}, {put, call}) {
      // put 用于触发action; call用于调用异步逻辑，支持promise
      // select 用于从state里获取数据<eg> const todos = yiled select(state=>state.todos)
      // 调用 saveTodoToServer，成功后触发 `add` action 保存到 state
      yield call(saveTodoToServer, todo);
      yield put({type: 'add', payload: todo})
    }
  },
  // 以 key/value 格式定义 subscription。subscription 是订阅，用于订阅一个数据源，然后根据需要
  // dispatch 相应的 action。在 app.start() 时被执行，
  subscriptions: {
    setup({history, dispatch}) {
      // 监听 history 变化，当进入 `/` 时触发 `load` action
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({type: 'load'})
        }
      })
    }
  }
})
