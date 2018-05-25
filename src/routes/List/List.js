import React from 'react'
import { connect } from 'dva'
import List from '../../components/Lists'
import Add from '../../components/Add'

const Lists = ({dispatch, lists, inputs}) => {
  console.log('1', lists)
  function handleDelete(id) {
    dispatch({
      type: 'lists/delete',
      payload: id
    })
  }

  function handelChange(e) {
    dispatch({
      type: 'inputs/change',
      payload: e.target.value
    })
  }
  function handleAdd() {
    dispatch({
      type: 'lists/save',
      payload: inputs.input
    })
  }
  return (
    <div>
      <Add onAdd={handleAdd} onChange={handelChange} input={inputs.input}/>
      <br/>
      <hr/>
      <h2>List of Products</h2>
      <br/>
      <List onDelete={handleDelete} lists={lists}/>
    </div>
  )
}

// export default Lists
export default connect(({inputs, lists}) => ({
  inputs, lists,
}))(Lists)
