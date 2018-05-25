import React from 'react'
import Proptypes from 'prop-types'
import { Input, Icon, Button } from 'antd'

const Add = ({ onAdd, onChange, input}) => {
  return (
    <div>
      <Input placeholder="Enter your userName"
             onChange={onChange}
             value={input}
             prefix={<Icon type="user"/>} />
      <Button type="primary"  onClick={ onAdd } >添加</Button>
    </div>
  )
}

Add.propTypes = {
  onAdd: Proptypes.func.isRequired,
  input: Proptypes.string.isRequired
}

export default Add;
