import { connect } from 'dva'
import React from 'react'
import { Input, Button, List, Popconfirm, Table } from 'antd'

const Demo = ({dispatch, demo}) => {
  // this.state= {
  //   value:''
  // }
  function handleAdd() {
    console.log(demo.value)
    // debugger
    dispatch(
      {
        type:'demo/add',
        payload: 'xiajing'
      }
    )
  }

  function handleChange(e) {
    // this.setState('value', e.target.value);
    demo.value = e.target.value
    console.log(e.target.value)
  }
  // onChange={handleChange}

  return (
    <div>
      <div>
        <Input type="text" onChange={handleChange} />
        {/*<input type="text"  value={this.state.value} />*/}
        <Button onClick={handleAdd}>确定</Button>
      </div>
      <List bordered dataSource={demo.lists}
            renderItem={item => (<List.Item>{item}</List.Item>)}/>
    </div>
  )
}

function mapStateToProps(state) {
  console.log(state.demo)
  return { demo: state.demo}
}

export default connect(mapStateToProps)(Demo)
