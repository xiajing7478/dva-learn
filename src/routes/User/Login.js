import React from 'react'
import styles from  './Login.css'
import { connect } from 'dva'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

@connect(({login, state}) => ({
  login,
  state
}))
class LoginPage extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type: 'login/login',
          payload: { phone: values.phone, password: values.password }
        })
      }
    })
  }

  render() {
    console.log(this.props.login.status)
    const { getFieldDecorator } = this.props.form;
    const { login }  = this.props
    return (
      <div>
        <h1>{login.status === false ? '用户名或密码错误' : null }</h1>
        <Form onSubmit={this.handleSubmit} className={styles["login-form"]}>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="phone" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className={styles["login-form-button"]} href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const LoginForm = Form.create()(LoginPage)
export default LoginForm
