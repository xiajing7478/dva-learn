import dva from 'dva';
import './index.css';
import 'antd/dist/antd.min.css'
// 配置 history 为 browserHistory
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
import { message } from 'antd'

// 1. Initialize
/**
 * opts 包含：
 history：指定给路由用的 history，默认是 hashHistory
 initialState：指定初始数据，优先级高于 model 中的 state，默认是 {}
 */
const app = dva({
  history: createHistory(),
  onError(e) {
    message.error(e.message)
  }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
//   app.model(require('./models/list').default);
//   app.model(require('./models/add').default);
// app.model(require('./models/count').default);
// app.model(require('./models/demo').default);
  // app.model(require('./models/products').default);
// app.model(require('./models/example').default);
app.model(require('./models/login').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
