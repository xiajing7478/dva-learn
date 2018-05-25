import React, { PureComponent, Fragment } from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { Checkbox, Alert, Icon, Button, Input, Form } from 'antd'
import './Login.css'
const FormItem = Form.Item
@connect(({login}) => ({
  login
}))
@Form.create()
class LoginPage extends PureComponent {
  // state = {
  //   type: 'account',
  //   autoLogin: true
  // }
  //
  // onTabChange(type) {
  //   this.setState({type})
  // }
  //
  // handleSubmit = (err, values) => {
  //   debugger
  //   const { type } = this.state
  //   if (!err) {
  //     this.props.dispatch({
  //       type: 'login/login',
  //       payload: {
  //         ...values,
  //         type
  //       }
  //     })
  //   }
  // }
  //
  // changeAutoLogin(e) {
  //   this.setState({
  //     autoLogin: e.target.checked
  //   })
  // }
  //
  // renderMessage = content => {
  //   return <Alert style={{marginBottom: 24}}
  //                 message={content}
  //                 type="error" showIcon
  //   />
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      console.log(this.props.dispatch)
      debugger
      this.props.dispatch({
        type: 'login/login',
        payload: { ...values }
      })
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      // layout={}
      <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
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
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="">register now!</a>
          </FormItem>
      </Form>
    )
  }
}

export default LoginPage
